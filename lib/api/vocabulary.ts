import axios from "axios";
import type {
  VocabularyListParams,
  VocabularyListResponse,
  VocabularyDetailResponse,
} from "@/types/vocabulary";

// Base URL cho API
const API_BASE_URL = "https://hskapi.bohubo.com/api";

// Tạo instance axios với cấu hình chung
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Hàm lấy danh sách bài học từ vựng
export const getVocabularyList = async (
  params: VocabularyListParams
): Promise<VocabularyListResponse> => {
  try {
    const response = await api.get<VocabularyListResponse>("/vocals", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching vocabulary list:", error);
    throw error;
  }
};

// Hàm lấy chi tiết bài học từ vựng
export const getVocabularyDetail = async (
  id: string
): Promise<VocabularyDetailResponse> => {
  try {
    const response = await api.get<VocabularyDetailResponse>(`/vocals/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vocabulary detail:", error);
    throw error;
  }
};

// Hàm chuyển đổi đường dẫn audio từ API
export const getAudioUrl = (audioPath: string): string => {
  // Xử lý đường dẫn audio từ API
  if (!audioPath) return "";

  // Nếu đường dẫn bắt đầu bằng @oss hoặc @cdn, thay thế bằng URL thực
  if (audioPath.startsWith("@oss")) {
    return `https://akm.hskcdn.com/cms${audioPath.substring(4)}`;
  }

  if (audioPath.startsWith("@cdn")) {
    return `https://akm.hskcdn.com${audioPath.substring(4)}`;
  }

  return audioPath;
};
