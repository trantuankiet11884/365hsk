"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVocabularyList, getVocabularyDetail } from "@/lib/api/vocabulary";
import type { VocabularyListParams } from "@/types/vocabulary";
import { useEffect } from "react";

// Hook để lấy danh sách bài học từ vựng
export const useVocabularyList = (params: VocabularyListParams) => {
  return useQuery({
    queryKey: ["vocabularyList", params],
    queryFn: () => getVocabularyList(params),
    staleTime: 5 * 60 * 1000, // 5 phút
    placeholderData: (previousData) => previousData,
  });
};

// Hook để lấy chi tiết bài học từ vựng
export const useVocabularyDetail = (id: string | null) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["vocabularyDetail", id],
    queryFn: () => getVocabularyDetail(id!),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });

  // Handle side effect with useEffect
  useEffect(() => {
    if (query.data && id) {
      queryClient.setQueryData(["vocabularyDetail", id], query.data);
    }
  }, [query.data, id, queryClient]);

  return query;
};

// Hook để prefetch chi tiết bài học từ vựng
export const usePrefetchVocabularyDetail = () => {
  const queryClient = useQueryClient();

  return (id: string) => {
    if (!id) return;

    queryClient.prefetchQuery({
      queryKey: ["vocabularyDetail", id],
      queryFn: () => getVocabularyDetail(id),
      staleTime: 10 * 60 * 1000, // 10 phút
    });
  };
};
