"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useVocabularyDetail } from "@/hooks/useVocabulary";
import { getAudioUrl } from "@/lib/api/vocabulary";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart2,
  BookOpen,
  ClipboardCheck,
  CreditCard,
  Layers,
  MessageSquare,
  Star,
  StarOff,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface VocabularyDetailProps {
  id: string;
}

export default function VocabularyDetail({ id }: VocabularyDetailProps) {
  const { data, isLoading, isError } = useVocabularyDetail(id);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [collectedWords, setCollectedWords] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load collected words from localStorage
  useEffect(() => {
    const storedCollectedWords = localStorage.getItem(`favorite_words_${id}`);
    if (storedCollectedWords) {
      setCollectedWords(JSON.parse(storedCollectedWords));
    }
  }, [id]);

  // Save collected words to localStorage
  useEffect(() => {
    localStorage.setItem(
      `favorite_words_${id}`,
      JSON.stringify(collectedWords)
    );
  }, [collectedWords, id]);

  // Xử lý phát âm thanh
  const playAudio = (audioPath: string) => {
    if (!audioPath) return;

    const audioUrl = getAudioUrl(audioPath);

    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  // Xử lý chuyển đến từ tiếp theo
  const handleNextWord = () => {
    if (!data || !data.data.words) return;

    if (activeWordIndex < data.data.words.length - 1) {
      setActiveWordIndex(activeWordIndex + 1);
      setShowMeaning(false);
    }
  };

  // Xử lý quay lại từ trước
  const handlePrevWord = () => {
    if (activeWordIndex > 0) {
      setActiveWordIndex(activeWordIndex - 1);
      setShowMeaning(false);
    }
  };

  // Xử lý lưu/bỏ lưu từ vựng
  const toggleCollectWord = (wordId: number) => {
    if (collectedWords.includes(wordId)) {
      setCollectedWords(collectedWords.filter((id) => id !== wordId));
    } else {
      setCollectedWords([...collectedWords, wordId]);
    }
  };

  if (isError) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">
          Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.
        </p>
        <Button asChild>
          <Link href="/vocabulary">Quay lại danh sách</Link>
        </Button>
      </div>
    );
  }

  // Thay đổi phần kiểm tra dữ liệu
  const activeWord = data?.data?.words?.[activeWordIndex];

  return (
    <div className="space-y-8">
      {/* Back button and title */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" asChild className="gap-1">
          <Link href="/vocabulary">
            <ArrowLeft className="h-4 w-4" />
            <span>Quay lại danh sách</span>
          </Link>
        </Button>

        {isLoading ? (
          <Skeleton className="h-8 w-40" />
        ) : (
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-semibold">{data?.data.name}</h1>
          </div>
        )}
      </div>

      {/* Learning options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href={`/vocabulary/${id}/flashcards`}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <CreditCard className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-medium">Flashcards</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Học với thẻ ghi nhớ
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href={`/vocabulary/${id}/quiz`}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <ClipboardCheck className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-medium">Kiểm tra</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Làm bài trắc nghiệm
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href={`/vocabulary/${id}/stats`}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <BarChart2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-medium">Thống kê</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Theo dõi tiến độ
              </p>
            </CardContent>
          </Card>
        </Link>

        <Card className="h-full">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <Layers className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <h3 className="font-medium text-muted-foreground">Luyện viết</h3>
            <p className="text-xs text-muted-foreground mt-1">Sắp ra mắt</p>
          </CardContent>
        </Card>
      </div>

      {/* Vocabulary card */}
      <div className="max-w-2xl mx-auto">
        {isLoading ? (
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <Skeleton className="h-16 w-full" />
                <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>
                <Skeleton className="h-8 w-3/4 mx-auto" />
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        ) : activeWord ? (
          <Card>
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-muted-foreground">
                  {activeWordIndex + 1} / {data?.data.words.length}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleCollectWord(activeWord.id)}
                    className={
                      collectedWords.includes(activeWord.id)
                        ? "text-yellow-500"
                        : "text-muted-foreground"
                    }
                  >
                    {collectedWords.includes(activeWord.id) ? (
                      <Star className="h-5 w-5 fill-yellow-500" />
                    ) : (
                      <StarOff className="h-5 w-5" />
                    )}
                    <span className="sr-only">
                      {collectedWords.includes(activeWord.id)
                        ? "Bỏ lưu từ"
                        : "Lưu từ"}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => playAudio(activeWord.audio)}
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Phát âm</span>
                  </Button>
                </div>
              </div>

              <motion.div
                key={activeWord.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">
                    {activeWord.text}
                  </h2>
                  <p className="text-xl text-primary">{activeWord.pinyin}</p>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>

                <AnimatePresence>
                  {showMeaning ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-2xl">{activeWord.trans.text}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {activeWord.prop}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Button
                        variant="outline"
                        onClick={() => setShowMeaning(true)}
                        className="px-8"
                      >
                        Hiện nghĩa
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevWord}
                  disabled={activeWordIndex === 0}
                >
                  Từ trước
                </Button>
                <Button
                  onClick={handleNextWord}
                  disabled={
                    activeWordIndex === (data?.data.words.length || 0) - 1
                  }
                >
                  Từ tiếp theo
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              Không có từ vựng nào trong bài học này.
            </p>
          </div>
        )}
      </div>

      {/* Example sentences */}
      {!isLoading &&
        activeWord &&
        activeWord.sentences &&
        activeWord.sentences.length > 0 && (
          <div className="max-w-2xl mx-auto mt-8">
            <Tabs defaultValue="examples" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="examples"
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Ví dụ câu</span>
                </TabsTrigger>
                <TabsTrigger value="notes" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Ghi chú</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="examples" className="mt-4">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    {activeWord.sentences.map((sentence, index) => (
                      <div
                        key={sentence.id}
                        className="space-y-2 pb-4 border-b last:border-0"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-lg font-medium">
                              {sentence.text}
                            </p>
                            <p className="text-primary text-sm">
                              {sentence.pinyin}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => playAudio(sentence.audio)}
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Volume2 className="h-5 w-5" />
                            <span className="sr-only">Phát âm</span>
                          </Button>
                        </div>
                        <p className="text-muted-foreground">
                          {sentence.trans.text}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Ghi chú về từ "{activeWord.text}"
                      </h3>
                      <p className="text-muted-foreground">
                        {activeWord.prop === "danh từ" &&
                          "Đây là danh từ, dùng để chỉ người, vật, hiện tượng, khái niệm."}
                        {activeWord.prop === "động từ" &&
                          "Đây là động từ, dùng để chỉ hành động, hoạt động."}
                        {activeWord.prop === "tính từ" &&
                          "Đây là tính từ, dùng để miêu tả tính chất, đặc điểm của sự vật, hiện tượng."}
                        {!["danh từ", "động từ", "tính từ"].includes(
                          activeWord.prop
                        ) &&
                          "Từ này thuộc loại từ " +
                            activeWord.prop +
                            ". Hãy chú ý cách sử dụng trong các ví dụ câu."}
                      </p>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Mẹo ghi nhớ:</h4>
                        <p>
                          Hãy tạo câu ví dụ của riêng bạn với từ "
                          {activeWord.text}" và luyện tập phát âm thường xuyên.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

      {/* Audio element for playback */}
      <audio ref={audioRef} className="hidden">
        <source src={undefined} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
