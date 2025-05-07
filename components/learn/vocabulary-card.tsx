"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import { vocabularyData } from "@/lib/data";

export default function VocabularyCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = (audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const nextCard = () => {
    if (currentIndex < vocabularyData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(vocabularyData.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Thẻ từ vựng</h2>
          <p className="text-muted-foreground">
            Luyện tập từ vựng tiếng Trung với thẻ học tương tác. Nghe phát âm và
            học cách sử dụng từ vựng trong các tình huống thực tế.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div ref={carouselRef} className="overflow-hidden rounded-xl">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-muted-foreground">
                    {currentIndex + 1} / {vocabularyData.length}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      playAudio(vocabularyData[currentIndex].audioUrl)
                    }
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <Volume2 className="h-6 w-6" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <div className="space-y-6 text-center">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">
                      {vocabularyData[currentIndex].chinese}
                    </h3>
                    <p className="text-xl text-primary">
                      {vocabularyData[currentIndex].pinyin}
                    </p>
                  </div>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>
                  <p className="text-2xl">
                    {vocabularyData[currentIndex].vietnamese}
                  </p>
                </div>
              </motion.div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-lg z-10"
              onClick={prevCard}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-lg z-10"
              onClick={nextCard}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {vocabularyData.map((_: unknown, index: number) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <audio ref={audioRef} className="hidden">
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
}
