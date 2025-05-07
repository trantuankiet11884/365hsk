// Định nghĩa các types cho API response

// Type cho danh sách các bài học từ vựng (cửa)
export interface VocabularyListResponse {
  code: number;
  success: boolean;
  message: string;
  data: VocabularyItem[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    totalWordsCount: number;
  };
}

export interface VocabularyItem {
  _id: string;
  level: number;
  name: string;
  stage: number;
}

// Type cho chi tiết bài học từ vựng
export interface VocabularyDetailResponse {
  code: number;
  success: boolean;
  message: string;
  data: VocabularyDetail;
}

export interface VocabularyDetail {
  _id: string;
  level: number;
  name: string;
  words: Word[];
}

export interface Word {
  trans: {
    language: string;
    text: string;
    prop: string;
  };
  id: number;
  vid: number;
  text: string;
  pinyin: string;
  prop: string;
  audio: string;
  stage: number;
  seed_ids: string;
  collected: number;
  sentences: Sentence[];
}

export interface Sentence {
  trans: {
    language: string;
    text: string;
  };
  id: number;
  wid: number;
  text: string;
  pinyin: string;
  audio: string;
  fragment: null;
  participles: {
    text: Participle[];
  };
}

export interface Participle {
  t: string;
  p?: string;
  id?: number;
  a?: string;
  ts?: string;
}

// Types cho các params
export interface VocabularyListParams {
  level: number;
  page: number;
  pageSize: number;
}
