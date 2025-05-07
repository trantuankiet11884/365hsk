"use client";

import { useState, useRef, useEffect } from "react";
import { useVocabularyDetail } from "@/hooks/useVocabulary";
import { getAudioUrl } from "@/lib/api/vocabulary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Volume2,
  ArrowLeft,
  CheckCircle,
  XCircle,
  RotateCw,
  CircleCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Confetti from "react-confetti";
import { useToast } from "@/hooks/use-toast";
import { useMobile } from "@/hooks/use-mobile";
import type { Word } from "@/types/vocabulary";

interface VocabularyQuizProps {
  id: string;
}

type QuizQuestion = {
  word: Word;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  userAnswer: string | null;
  isCorrect: boolean | null;
};

export default function VocabularyQuiz({ id }: VocabularyQuizProps) {
  const { data, isLoading, isError } = useVocabularyDetail(id);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  const isMobile = useMobile();

  // Tạo câu hỏi khi dữ liệu được tải
  useEffect(() => {
    if (data && data.data && data.data.words && data.data.words.length > 0) {
      const generatedQuestions = generateQuestions(data.data.words);
      setQuestions(generatedQuestions);
    }
  }, [data]);

  // Reset state when id changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setCompleted(false);
    setShowConfetti(false);
  }, [id]);

  // Tạo câu hỏi trắc nghiệm
  const generateQuestions = (words: Word[]): QuizQuestion[] => {
    // Lọc ra các từ có đủ thông tin
    const validWords = words.filter((word) => word.text && word.trans.text);

    return validWords.map((word) => {
      // Tạo các lựa chọn
      const correctOption = { text: word.trans.text, isCorrect: true };

      // Lấy ngẫu nhiên 3 từ khác làm lựa chọn sai
      const otherWords = validWords.filter((w) => w.id !== word.id);
      const shuffledWords = [...otherWords].sort(() => 0.5 - Math.random());
      const incorrectOptions = shuffledWords.slice(0, 3).map((w) => ({
        text: w.trans.text,
        isCorrect: false,
      }));

      // Kết hợp và xáo trộn các lựa chọn
      const options = [correctOption, ...incorrectOptions].sort(
        () => 0.5 - Math.random()
      );

      return {
        word,
        options,
        userAnswer: null,
        isCorrect: null,
      };
    });
  };

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

  // Xử lý khi chọn đáp án
  const handleSelectOption = (optionText: string) => {
    if (answered) return;
    setSelectedOption(optionText);
  };

  // Xử lý khi kiểm tra đáp án
  const handleCheckAnswer = () => {
    if (!selectedOption || !questions.length) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect =
      currentQuestion.options.find((opt) => opt.text === selectedOption)
        ?.isCorrect || false;

    // Cập nhật câu hỏi hiện tại
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = {
      ...currentQuestion,
      userAnswer: selectedOption,
      isCorrect,
    };

    setQuestions(updatedQuestions);
    setAnswered(true);

    // Cập nhật điểm số
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  // Xử lý chuyển đến câu hỏi tiếp theo
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      // Đã hoàn thành tất cả các câu hỏi
      setCompleted(true);
      setShowConfetti(true);

      // Hiển thị thông báo hoàn thành
      toast({
        title: "Hoàn thành bài kiểm tra!",
        description: `Điểm của bạn: ${score}/${questions.length}`,
      });

      // Tắt confetti sau 5 giây
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  };

  // Xử lý bắt đầu lại
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setCompleted(false);

    // Reset đáp án người dùng
    const resetQuestions = questions.map((q) => ({
      ...q,
      userAnswer: null,
      isCorrect: null,
    }));
    setQuestions(resetQuestions);
  };

  // Tính toán tiến độ
  const calculateProgress = () => {
    if (!questions.length) return 0;
    return Math.round(
      ((currentQuestionIndex + (completed ? 1 : 0)) / questions.length) * 100
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
              {data?.data.name} - Kiểm tra
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
              `${currentQuestionIndex + (completed ? 1 : 0)}/${
                questions.length || 0
              }`
            )}
          </span>
        </div>
        <Progress value={calculateProgress()} className="h-2" />
      </div>

      {/* Quiz content */}
      {completed ? (
        <div className="max-w-md mx-auto text-center space-y-6 py-8">
          <h2 className="text-2xl font-bold">Chúc mừng!</h2>
          <p className="text-muted-foreground">
            Bạn đã hoàn thành bài kiểm tra này. Dưới đây là kết quả của bạn:
          </p>
          <div className="bg-primary/10 p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary">
              {score}/{questions.length}
            </div>
            <div className="text-sm text-muted-foreground mt-1">Điểm số</div>
            <div className="mt-4">
              <Progress
                value={(score / questions.length) * 100}
                className="h-2"
              />
            </div>
          </div>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Button onClick={handleRestart} className="gap-2">
              <RotateCw className="h-4 w-4" />
              Làm lại
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/vocabulary/${id}`}>Quay lại bài học</Link>
            </Button>
          </div>
        </div>
      ) : isLoading || questions.length === 0 ? (
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-8 space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-10 w-3/4" />
              <div className="space-y-2 pt-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {questions[currentQuestionIndex].word.text}
                  </h2>
                  <p className="text-primary">
                    {questions[currentQuestionIndex].word.pinyin}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    playAudio(questions[currentQuestionIndex].word.audio)
                  }
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  <Volume2 className="h-5 w-5" />
                  <span className="sr-only">Phát âm</span>
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Chọn nghĩa đúng:</h3>
                <RadioGroup value={selectedOption || ""} className="space-y-3">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={option.text}
                          id={`option-${index}`}
                          onClick={() => handleSelectOption(option.text)}
                          disabled={answered}
                          className={
                            answered
                              ? option.isCorrect
                                ? "border-green-500 text-green-500"
                                : option.text === selectedOption
                                ? "border-red-500 text-red-500"
                                : ""
                              : ""
                          }
                        />
                        <Label
                          htmlFor={`option-${index}`}
                          className={
                            answered
                              ? option.isCorrect
                                ? "text-green-500 font-medium"
                                : option.text === selectedOption &&
                                  !option.isCorrect
                                ? "text-red-500"
                                : ""
                              : ""
                          }
                        >
                          {option.text}
                          {answered && option.isCorrect && (
                            <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-500" />
                          )}
                          {answered &&
                            option.text === selectedOption &&
                            !option.isCorrect && (
                              <XCircle className="inline-block ml-2 h-4 w-4 text-red-500" />
                            )}
                        </Label>
                      </div>
                    )
                  )}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-6 pt-0">
              {!answered ? (
                <Button
                  onClick={handleCheckAnswer}
                  disabled={!selectedOption}
                  className="w-full"
                >
                  Kiểm tra
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="w-full">
                  {currentQuestionIndex < questions.length - 1
                    ? "Câu tiếp theo"
                    : "Xem kết quả"}
                </Button>
              )}
            </CardFooter>
          </Card>
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
