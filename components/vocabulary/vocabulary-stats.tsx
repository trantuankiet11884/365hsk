"use client";

import { useState, useEffect } from "react";
import { useVocabularyDetail } from "@/hooks/useVocabulary";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowLeft,
  BookOpen,
  Star,
  BarChart,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface VocabularyStatsProps {
  id: string;
}

export default function VocabularyStats({ id }: VocabularyStatsProps) {
  const { data, isLoading, isError } = useVocabularyDetail(id);
  const [learnedWords, setLearnedWords] = useState<number[]>([]);
  const [favoriteWords, setFavoriteWords] = useState<number[]>([]);
  const [quizResults, setQuizResults] = useState<{
    attempts: number;
    correctAnswers: number;
    incorrectAnswers: number;
    lastAttemptDate: string | null;
  }>({
    attempts: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    lastAttemptDate: null,
  });
  const [studyTime, setStudyTime] = useState<{
    totalMinutes: number;
    lastStudyDate: string | null;
  }>({
    totalMinutes: 0,
    lastStudyDate: null,
  });

  // Tải dữ liệu từ localStorage khi component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Lấy danh sách từ đã học
      const storedLearnedWords = localStorage.getItem(`learned_words_${id}`);
      if (storedLearnedWords) {
        setLearnedWords(JSON.parse(storedLearnedWords));
      }

      // Lấy danh sách từ yêu thích
      const storedFavoriteWords = localStorage.getItem(`favorite_words_${id}`);
      if (storedFavoriteWords) {
        setFavoriteWords(JSON.parse(storedFavoriteWords));
      }

      // Lấy kết quả quiz
      const storedQuizResults = localStorage.getItem(`quiz_results_${id}`);
      if (storedQuizResults) {
        setQuizResults(JSON.parse(storedQuizResults));
      } else {
        // Dữ liệu mẫu nếu chưa có
        setQuizResults({
          attempts: Math.floor(Math.random() * 5) + 1,
          correctAnswers: Math.floor(Math.random() * 20) + 5,
          incorrectAnswers: Math.floor(Math.random() * 10) + 2,
          lastAttemptDate: new Date(
            Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
          ).toISOString(),
        });
      }

      // Lấy thời gian học
      const storedStudyTime = localStorage.getItem(`study_time_${id}`);
      if (storedStudyTime) {
        setStudyTime(JSON.parse(storedStudyTime));
      } else {
        // Dữ liệu mẫu nếu chưa có
        setStudyTime({
          totalMinutes: Math.floor(Math.random() * 120) + 30,
          lastStudyDate: new Date(
            Date.now() - Math.random() * 3 * 24 * 60 * 60 * 1000
          ).toISOString(),
        });
      }
    }
  }, [id]);

  // Tính toán tỷ lệ hoàn thành
  const calculateCompletionRate = () => {
    if (!data || !data.data || !data.data.words || data.data.words.length === 0)
      return 0;
    return Math.round((learnedWords.length / data.data.words.length) * 100);
  };

  // Format thời gian học
  const formatStudyTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0) {
      return `${hours} giờ ${mins} phút`;
    }
    return `${mins} phút`;
  };

  // Format ngày
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Chưa có dữ liệu";

    const date = new Date(dateString);
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
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
              {data?.data.name} - Thống kê
            </h1>
          </div>
        )}
      </div>

      {/* Stats overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Completion rate */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-medium">Tiến độ học tập</h2>
              <BookOpen className="h-5 w-5 text-primary" />
            </div>

            <div className="mt-6 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="10"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className="text-primary"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 45 * (1 - calculateCompletionRate() / 100)
                    }`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">
                    {calculateCompletionRate()}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                {isLoading ? (
                  <Skeleton className="h-4 w-full" />
                ) : (
                  `${learnedWords.length} / ${
                    data?.data.words.length || 0
                  } từ đã học`
                )}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Study time */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-medium">Thời gian học tập</h2>
              <Clock className="h-5 w-5 text-primary" />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Tổng thời gian:</span>
                <span className="text-xl font-bold">
                  {formatStudyTime(studyTime.totalMinutes)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Lần học gần nhất:</span>
                <span>{formatDate(studyTime.lastStudyDate)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Thời gian trung bình/từ:
                </span>
                <span>
                  {data && data.data.words && data.data.words.length > 0
                    ? formatStudyTime(
                        Math.round(
                          studyTime.totalMinutes / data.data.words.length
                        )
                      )
                    : "0 phút"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed stats */}
      <Tabs defaultValue="quiz" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="quiz" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span>Kết quả kiểm tra</span>
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>Từ vựng yêu thích</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quiz" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Tổng số lần kiểm tra:</h3>
                  <span className="font-bold">{quizResults.attempts}</span>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Lần kiểm tra gần nhất:</h3>
                  <span>{formatDate(quizResults.lastAttemptDate)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {quizResults.correctAnswers}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Câu trả lời đúng
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">
                      <XCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      {quizResults.incorrectAnswers}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Câu trả lời sai
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Tỷ lệ trả lời đúng:</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{
                        width: `${
                          quizResults.correctAnswers +
                            quizResults.incorrectAnswers >
                          0
                            ? Math.round(
                                (quizResults.correctAnswers /
                                  (quizResults.correctAnswers +
                                    quizResults.incorrectAnswers)) *
                                  100
                              )
                            : 0
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-end mt-1 text-sm text-muted-foreground">
                    {quizResults.correctAnswers + quizResults.incorrectAnswers >
                    0
                      ? Math.round(
                          (quizResults.correctAnswers /
                            (quizResults.correctAnswers +
                              quizResults.incorrectAnswers)) *
                            100
                        )
                      : 0}
                    %
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites" className="mt-4">
          <Card>
            <CardContent className="p-6">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ) : favoriteWords.length > 0 && data?.data?.words ? (
                <div className="space-y-4">
                  {data.data.words
                    .filter((word) => favoriteWords.includes(word.id))
                    .map((word, index) => (
                      <motion.div
                        key={word.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-medium">{word.text}</span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {word.pinyin} - {word.trans.text}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/flashcard-illustration.png"
                      alt="No favorites"
                      fill
                      className="object-contain opacity-50"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Bạn chưa có từ vựng yêu thích nào.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Nhấn vào biểu tượng ngôi sao khi học từ vựng để thêm vào
                    danh sách yêu thích.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href={`/vocabulary/${id}/flashcards`}>Học flashcards</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={`/vocabulary/${id}/quiz`}>Làm bài kiểm tra</Link>
        </Button>
      </div>
    </div>
  );
}
