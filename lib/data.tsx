import {
  BookOpen,
  Brain,
  GraduationCap,
  Lightbulb,
  Users,
  Volume2,
} from "lucide-react";

export const vocabularyData = [
  {
    id: 1,
    chinese: "你好",
    pinyin: "nǐ hǎo",
    vietnamese: "Xin chào",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/ni3_hao3.mp3",
  },
  {
    id: 2,
    chinese: "谢谢",
    pinyin: "xiè xiè",
    vietnamese: "Cảm ơn",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/xie4_xie4.mp3",
  },
  {
    id: 3,
    chinese: "再见",
    pinyin: "zài jiàn",
    vietnamese: "Tạm biệt",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/zai4_jian4.mp3",
  },
  {
    id: 4,
    chinese: "对不起",
    pinyin: "duì bù qǐ",
    vietnamese: "Xin lỗi",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/dui4_bu4_qi3.mp3",
  },
  {
    id: 5,
    chinese: "没关系",
    pinyin: "méi guān xì",
    vietnamese: "Không sao",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/mei2_guan1_xi4.mp3",
  },
  {
    id: 6,
    chinese: "我爱你",
    pinyin: "wǒ ài nǐ",
    vietnamese: "Tôi yêu bạn",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/wo3_ai4_ni3.mp3",
  },
  {
    id: 7,
    chinese: "学习",
    pinyin: "xué xí",
    vietnamese: "Học tập",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/xue2_xi2.mp3",
  },
  {
    id: 8,
    chinese: "工作",
    pinyin: "gōng zuò",
    vietnamese: "Công việc",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/gong1_zuo4.mp3",
  },
  {
    id: 9,
    chinese: "朋友",
    pinyin: "péng yǒu",
    vietnamese: "Bạn bè",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/peng2_you3.mp3",
  },
  {
    id: 10,
    chinese: "家庭",
    pinyin: "jiā tíng",
    vietnamese: "Gia đình",
    audioUrl:
      "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/jia1_ting2.mp3",
  },
];

export const learningPaths = [
  {
    id: 1,
    title: "Giao tiếp cơ bản",
    description:
      "Học các từ vựng và cấu trúc câu cơ bản để giao tiếp hàng ngày.",
    level: "Cơ bản",
    topics: ["Chào hỏi", "Giới thiệu bản thân", "Mua sắm", "Đi ăn nhà hàng"],
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Luyện phát âm",
    description:
      "Tập trung vào việc phát âm chuẩn các âm tiết và thanh điệu tiếng Trung.",
    level: "Mọi trình độ",
    topics: ["Âm đầu", "Âm giữa", "Âm cuối", "Thanh điệu"],
    icon: <Volume2 className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Luyện viết chữ Hán",
    description: "Học cách viết chữ Hán đúng bộ thủ và thứ tự nét.",
    level: "Cơ bản đến Trung cấp",
    topics: [
      "Bộ thủ cơ bản",
      "Quy tắc viết",
      "Chữ Hán thông dụng",
      "Luyện viết",
    ],
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Ngữ pháp nâng cao",
    description:
      "Học các cấu trúc ngữ pháp phức tạp để diễn đạt ý tưởng chính xác.",
    level: "Trung cấp đến Nâng cao",
    topics: [
      "Câu điều kiện",
      "Thể bị động",
      "Trợ từ ngữ pháp",
      "Cấu trúc phức hợp",
    ],
    icon: <Brain className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export const learningTips = [
  {
    title: "Học từ vựng theo chủ đề",
    description:
      "Phân loại từ vựng theo chủ đề giúp bạn dễ dàng ghi nhớ và sử dụng trong các tình huống thực tế.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    title: "Luyện viết chữ Hán mỗi ngày",
    description:
      "Dành 15 phút mỗi ngày để luyện viết chữ Hán sẽ giúp bạn ghi nhớ tốt hơn và cải thiện kỹ năng viết.",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
  },
  {
    title: "Nghe và bắt chước phát âm",
    description:
      "Nghe và bắt chước phát âm từ người bản xứ là cách tốt nhất để cải thiện kỹ năng phát âm của bạn.",
    icon: <Volume2 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Học qua phim và âm nhạc",
    description:
      "Xem phim và nghe nhạc Trung Quốc giúp bạn làm quen với ngôn ngữ và văn hóa một cách tự nhiên.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
  },
  {
    title: "Sử dụng ứng dụng học tiếng Trung",
    description:
      "Sử dụng ứng dụng HSK 365 Master để học tiếng Trung mọi lúc, mọi nơi và theo dõi tiến độ học tập.",
    icon: <Brain className="h-10 w-10 text-primary" />,
  },
  {
    title: "Tham gia cộng đồng học tiếng Trung",
    description:
      "Tham gia các nhóm học tiếng Trung để trao đổi kinh nghiệm và thực hành giao tiếp với người khác.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
];

export const dailyExercises = [
  {
    id: 1,
    title: "Luyện nghe - Đoạn hội thoại cơ bản",
    description:
      "Nghe đoạn hội thoại ngắn và trả lời câu hỏi để cải thiện kỹ năng nghe.",
    duration: "10 phút",
    difficulty: "Cơ bản",
    type: "Nghe",
  },
  {
    id: 2,
    title: "Luyện đọc - Bài đọc ngắn",
    description:
      "Đọc bài văn ngắn và trả lời câu hỏi để cải thiện kỹ năng đọc hiểu.",
    duration: "15 phút",
    difficulty: "Trung cấp",
    type: "Đọc",
  },
  {
    id: 3,
    title: "Luyện viết - Viết đoạn văn ngắn",
    description:
      "Viết đoạn văn ngắn về chủ đề hàng ngày để cải thiện kỹ năng viết.",
    duration: "20 phút",
    difficulty: "Trung cấp",
    type: "Viết",
  },
  {
    id: 4,
    title: "Luyện nói - Tự giới thiệu bản thân",
    description:
      "Luyện nói về bản thân, sở thích và công việc để cải thiện kỹ năng nói.",
    duration: "10 phút",
    difficulty: "Cơ bản",
    type: "Nói",
  },
];
