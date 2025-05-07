"use client";

import { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useVocabularyList, useVocabularyDetail } from "@/hooks/useVocabulary";
import { getAudioUrl } from "@/lib/api/vocabulary";
import type { Word } from "@/types/vocabulary";
import Link from "next/link";

// Map chủ đề sang level trong API
const topicToLevelMap = {
  daily: 1,
  business: 2,
  travel: 3,
  food: 4,
};

export default function VocabularyByTopic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTopic, setCurrentTopic] =
    useState<keyof typeof topicToLevelMap>("daily");

  // Fetch vocabulary list
  const {
    data: listData,
    isLoading: isListLoading,
    error: listError,
  } = useVocabularyList({
    level: topicToLevelMap[currentTopic],
    page: 1,
    pageSize: 8,
  });

  // Fetch vocabulary detail for the first item in the list
  const firstItemId = listData?.data?.[0]?._id || null;
  const {
    data: detailData,
    isLoading: isDetailLoading,
    error: detailError,
  } = useVocabularyDetail(firstItemId);

  // State chứa từ vựng đã được xử lý
  const [processedVocabulary, setProcessedVocabulary] = useState<
    Record<string, Word[]>
  >({});

  useEffect(() => {
    if (detailData && detailData.success) {
      setProcessedVocabulary((prev) => ({
        ...prev,
        [currentTopic]: detailData.data.words.slice(0, 8),
      }));
    }
  }, [detailData, currentTopic]);

  const handleTabChange = (topic: string) => {
    setCurrentTopic(topic as keyof typeof topicToLevelMap);
  };

  const playAudio = (audioPath: string) => {
    if (audioRef.current) {
      const audioUrl = getAudioUrl(audioPath);
      if (!audioUrl) return;

      audioRef.current.src = audioUrl;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  // Render loading state
  if (
    isListLoading ||
    (isDetailLoading && !processedVocabulary[currentTopic])
  ) {
    return (
      <section className="section-padding">
        <div className="container-custom text-center py-12">
          <Loader2 className="w-8 h-8 animate-spin mx-auto" />
          <p className="mt-2">Đang tải dữ liệu...</p>
        </div>
      </section>
    );
  }

  // Render error state
  if (listError || detailError) {
    return (
      <section className="section-padding">
        <div className="container-custom text-center py-12">
          <p className="text-red-500">
            Có lỗi xảy ra khi tải dữ liệu:{" "}
            {listError?.message || detailError?.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3，四 mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Từ vựng theo chủ đề</h2>
          <p className="text-muted-foreground">
            Học từ vựng theo chủ đề giúp bạn dễ dàng ghi nhớ và sử dụng trong
            các tình huống thực tế.
          </p>
        </motion.div>

        <Tabs
          defaultValue="daily"
          className="w-full"
          onValueChange={handleTabChange}
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="daily">Giao tiếp hàng ngày</TabsTrigger>
              <TabsTrigger value="business">Kinh doanh</TabsTrigger>
              <TabsTrigger value="travel">Du lịch</TabsTrigger>
              <TabsTrigger value="food">Ẩm thực</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(topicToLevelMap).map((topic) => (
            <TabsContent key={topic} value={topic}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {processedVocabulary[topic] ? (
                  processedVocabulary[topic].map((word, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card className="overflow-hidden card-hover h-full">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-2xl font-bold mb-1">
                                {word.text}
                              </h3>
                              <p className="text-primary">{word.pinyin}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => playAudio(word.audio)}
                              className="text-primary hover:text-primary hover:bg-primary/10"
                            >
                              <Volume2 className="h-5 w-5" />
                              <span className="sr-only">
                                Play pronunciation
                              </span>
                            </Button>
                          </div>
                          <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-4"></div>
                          <p className="text-lg mb-4">{word.trans.text}</p>
                          {word.sentences && word.sentences.length > 0 && (
                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-muted-foreground">
                              <p>
                                {word.sentences[0].text}
                                <br />
                                {word.sentences[0].trans.text}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-4 text-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                    <p className="mt-2">Đang tải dữ liệu...</p>
                  </div>
                )}
              </motion.div>
              <div className="flex justify-center mt-4">
                <Button>
                  <Link href={`/vocabulary`}>Xem tất cả</Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <audio ref={audioRef} className="hidden">
          <source src={undefined} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}
