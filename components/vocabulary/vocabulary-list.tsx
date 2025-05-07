"use client";

import { useState } from "react";
import Link from "next/link";
import {
  useVocabularyList,
  usePrefetchVocabularyDetail,
} from "@/hooks/useVocabulary";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface VocabularyListProps {
  initialLevel?: number;
}

export default function VocabularyList({
  initialLevel = 1,
}: VocabularyListProps) {
  const [level, setLevel] = useState(initialLevel);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, isError } = useVocabularyList({
    level,
    page,
    pageSize,
  });

  const prefetchDetail = usePrefetchVocabularyDetail();

  // Xử lý khi thay đổi cấp độ HSK
  const handleLevelChange = (newLevel: number) => {
    setLevel(newLevel);
    setPage(1); // Reset về trang 1 khi thay đổi cấp độ
  };

  // Xử lý khi hover vào một bài học để prefetch dữ liệu
  const handleItemHover = (id: string) => {
    prefetchDetail(id);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (isError) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">
          Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.
        </p>
        <Button onClick={() => window.location.reload()}>Tải lại trang</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HSK Level Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[1, 2, 3, 4, 5, 6].map((hskLevel) => (
          <Button
            key={hskLevel}
            variant={level === hskLevel ? "default" : "outline"}
            onClick={() => handleLevelChange(hskLevel)}
            className="min-w-[80px]"
          >
            HSK {hskLevel}
          </Button>
        ))}
      </div>

      {/* Vocabulary List */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex justify-between items-center pt-2">
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      ) : data && data.data ? (
        <motion.div
          className="grid md:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {data.data.map((item) => (
            <motion.div
              key={item._id}
              onMouseEnter={() => handleItemHover(item._id)}
            >
              <Link href={`/vocabulary/${item._id}`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="p-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Cấp độ HSK {item.level} - Giai đoạn {item.stage}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-1 text-primary text-sm">
                          <GraduationCap className="h-4 w-4" />
                          <span>Bắt đầu học</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Không có dữ liệu từ vựng.</p>
        </div>
      )}

      {/* Pagination */}
      {data && data.metadata && (
        <div className="flex justify-center mt-8">
          <Pagination
            currentPage={page}
            totalPages={data.metadata.totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}
