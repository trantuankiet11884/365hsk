"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { useVocabularyDetail } from "@/hooks/useVocabulary";
import { getAudioUrl } from "@/lib/api/vocabulary";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  CircleCheck,
  RotateCw,
  Volume2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

interface VocabularyFlashcardsProps {
  id: string;
}

export default function VocabularyFlashcards({
  id,
}: VocabularyFlashcardsProps) {
  const { data, isLoading, isError } = useVocabularyDetail(id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownWords, setKnownWords] = useState<number[]>([]);
  const [unknownWords, setUnknownWords] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  const isMobile = useMobile();

  // Reset state when id changes
  useEffect(() => {
    setCurrentIndex(0);
    setFlipped(false);
    setKnownWords([]);
    setUnknownWords([]);
    setCompleted(false);
    setShowConfetti(false);
  }, [id]);

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

  // Xử lý lật thẻ
  const handleFlip = () => {
    setFlipped(!flipped);

    // Phát âm khi lật thẻ để hiện nghĩa
    if (!flipped && data?.data.words[currentIndex]) {
      playAudio(data.data.words[currentIndex].audio);
    }
  };

  // Xử lý đánh dấu từ đã biết
  const handleKnown = () => {
    if (!data) return;

    const wordId = data.data.words[currentIndex].id;
    if (!knownWords.includes(wordId)) {
      setKnownWords([...knownWords, wordId]);
    }

    handleNext();
  };

  // Xử lý đánh dấu từ chưa biết
  const handleUnknown = () => {
    if (!data) return;

    const wordId = data.data.words[currentIndex].id;
    if (!unknownWords.includes(wordId)) {
      setUnknownWords([...unknownWords, wordId]);
    }

    handleNext();
  };

  // Xử lý chuyển đến từ tiếp theo
  const handleNext = () => {
    if (!data) return;

    if (currentIndex < data.data.words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      // Đã hoàn thành tất cả các từ
      setCompleted(true);
      setShowConfetti(true);

      // Hiển thị thông báo hoàn thành
      toast({
        title: "Hoàn thành!",
        description: `Bạn đã học ${
          knownWords.length + 1
        } từ trong bài học này.`,
      });

      // Tắt confetti sau 5 giây
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  };

  // Xử lý quay lại từ trước
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  // Xử lý bắt đầu lại
  const handleRestart = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setCompleted(false);
  };

  // Tính toán tiến độ
  const calculateProgress = () => {
    if (!data || !data.data || !data.data.words) return 0;
    return Math.round(
      ((currentIndex + (completed ? 1 : 0)) / data.data.words.length) * 100
    );
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

  return (
    <div className="space-y-8">
      {/* Confetti effect when completed */}
      {showConfetti && (
        <Confetti
          width={typeof window !== "undefined" ? window.innerWidth : 1200}
          height={typeof window !== "undefined" ? window.innerHeight : 800}
          recycle={false}
          numberOfPieces={isMobile ? 100 : 200}
        />
      )}

      {/* Back button and title */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" asChild className="gap-1">
          <Link href={`/vocabulary/${id}`}>
            <ArrowLeft className="h-4 w-4" />
            <span>Quay lại</span>
          </Link>
        </Button>

        {isLoading ? (
          <Skeleton className="h-8 w-40" />
        ) : (
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">
              {data?.data.name} - Flashcards
            </h1>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Tiến độ</span>
          <span>
            {isLoading ? (
              <Skeleton className="h-4 w-16 inline-block" />
            ) : (
              `${currentIndex + (completed ? 1 : 0)}/${
                data?.data.words.length || 0
              }`
            )}
          </span>
        </div>
        <Progress value={calculateProgress()} className="h-2" />
      </div>

      {/* Flashcard */}
      {completed ? (
        <div className="max-w-md mx-auto text-center space-y-6 py-8">
          <h2 className="text-2xl font-bold">Chúc mừng!</h2>
          <p className="text-muted-foreground">
            Bạn đã hoàn thành bài học flashcards này. Dưới đây là kết quả của
            bạn:
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {knownWords.length}
              </div>
              <div className="text-sm text-muted-foreground">Từ đã biết</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {unknownWords.length}
              </div>
              <div className="text-sm text-muted-foreground">Từ chưa biết</div>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Button onClick={handleRestart} className="gap-2">
              <RotateCw className="h-4 w-4" />
              Học lại
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/vocabulary/${id}/quiz`}>Làm bài kiểm tra</Link>
            </Button>
          </div>
        </div>
      ) : isLoading ? (
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="aspect-[3/2] relative">
                <Skeleton className="absolute inset-0 rounded-md" />
              </div>
            </CardContent>
          </Card>
        </div>
      ) : data?.data?.words && data.data.words.length > 0 ? (
        <div className="max-w-md mx-auto">
          <div className="perspective-1000">
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="preserve-3d cursor-pointer"
              onClick={handleFlip}
            >
              <Card className="backface-hidden">
                <CardContent className="p-8 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">
                      {data.data.words[currentIndex].text}
                    </h2>
                    <p className="text-xl text-primary">
                      {data.data.words[currentIndex].pinyin}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(data.data.words[currentIndex].audio);
                      }}
                      className="text-primary hover:text-primary hover:bg-primary/10 mt-2"
                    >
                      <Volume2 className="h-6 w-6" />
                      <span className="sr-only">Phát âm</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="backface-hidden absolute inset-0 rotate-y-180">
                <CardContent className="p-8 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-medium">
                      {data.data.words[currentIndex].trans.text}
                    </h3>
                    <p className="text-muted-foreground">
                      {data.data.words[currentIndex].prop}
                    </p>
                    {data.data.words[currentIndex].sentences &&
                      data.data.words[currentIndex].sentences.length > 0 && (
                        <div className="text-sm text-left bg-muted/50 p-3 rounded-md">
                          <p className="font-medium mb-1">Ví dụ:</p>
                          <p>
                            {data.data.words[currentIndex].sentences[0].text}
                          </p>
                          <p className="text-primary text-xs mt-1">
                            {data.data.words[currentIndex].sentences[0].pinyin}
                          </p>
                          <p className="text-muted-foreground text-xs mt-1">
                            {
                              data.data.words[currentIndex].sentences[0].trans
                                .text
                            }
                          </p>
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Trước
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleUnknown}
                className="gap-2 border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
              >
                <X className="h-4 w-4" />
                Chưa biết
              </Button>
              <Button
                onClick={handleKnown}
                className="gap-2 bg-green-600 hover:bg-green-700"
              >
                <Check className="h-4 w-4" />
                Đã biết
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            Không có từ vựng nào trong bài học này.
          </p>
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
