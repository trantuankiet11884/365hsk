import {
  BookOpen,
  Brain,
  GraduationCap,
  Lightbulb,
  Users,
  Volume2,
  Headphones,
  MessageSquare,
  BarChart,
  Zap,
  PenTool,
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

export const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Học từ vựng hiệu quả",
    description:
      "Phương pháp học từ vựng khoa học giúp ghi nhớ lâu và hiệu quả.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "Luyện phát âm chuẩn",
    description:
      "Công nghệ nhận diện giọng nói giúp bạn phát âm chuẩn như người bản xứ.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Luyện giao tiếp thực tế",
    description:
      "Các bài học giao tiếp thực tế giúp bạn tự tin trong mọi tình huống.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Theo dõi tiến độ",
    description:
      "Hệ thống theo dõi tiến độ chi tiết giúp bạn nắm rõ quá trình học tập.",
  },
];

export const stats = [
  { value: "10,000+", label: "Học viên" },
  { value: "5,000+", label: "Từ vựng" },
  { value: "500+", label: "Bài học" },
  { value: "98%", label: "Tỷ lệ đỗ HSK" },
];

export const hskLevels = [
  {
    level: "HSK 1",
    words: "150",
    description:
      "Dành cho người mới bắt đầu, có thể hiểu và sử dụng các từ và cụm từ cơ bản.",
    topics: ["Chào hỏi", "Giới thiệu bản thân", "Số đếm", "Thời gian"],
  },
  {
    level: "HSK 2",
    words: "300",
    description:
      "Có thể giao tiếp đơn giản và trực tiếp về các chủ đề quen thuộc hàng ngày.",
    topics: ["Mua sắm", "Ăn uống", "Hỏi đường", "Thời tiết"],
  },
  {
    level: "HSK 3",
    words: "600",
    description:
      "Có thể giao tiếp cơ bản trong công việc, học tập và cuộc sống hàng ngày.",
    topics: ["Du lịch", "Công việc", "Học tập", "Sở thích"],
  },
  {
    level: "HSK 4",
    words: "1200",
    description:
      "Có thể giao tiếp trôi chảy với người bản xứ về nhiều chủ đề khác nhau.",
    topics: ["Văn hóa", "Lịch sử", "Kinh tế", "Xã hội"],
  },
  {
    level: "HSK 5",
    words: "2500",
    description: "Có thể đọc báo chí, xem phim và hiểu các bài phát biểu dài.",
    topics: ["Văn học", "Thời sự", "Khoa học", "Nghệ thuật"],
  },
  {
    level: "HSK 6",
    words: "5000+",
    description:
      "Có thể hiểu mọi thứ nghe và đọc bằng tiếng Trung, gần như người bản xứ.",
    topics: [
      "Triết học",
      "Chính trị",
      "Kinh tế quốc tế",
      "Nghiên cứu học thuật",
    ],
  },
];

export const learningMethods = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Phương pháp lặp lại ngắt quãng",
    description:
      "Ôn tập từ vựng theo các khoảng thời gian tối ưu, giúp ghi nhớ lâu dài và hiệu quả.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Phương pháp viết tay",
    description:
      "Luyện viết chữ Hán bằng tay giúp ghi nhớ tốt hơn và hiểu sâu về cấu trúc chữ.",
  },
  {
    icon: <Volume2 className="h-10 w-10 text-primary" />,
    title: "Phương pháp nghe - nhắc lại",
    description:
      "Nghe và nhắc lại nhiều lần giúp cải thiện phát âm và khả năng nghe hiểu.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Phương pháp liên tưởng",
    description:
      "Liên kết từ vựng mới với hình ảnh hoặc câu chuyện giúp ghi nhớ dễ dàng hơn.",
  },
];

export const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Sinh viên Đại học Ngoại ngữ",
    content:
      "HSK 365 Master đã giúp tôi vượt qua kỳ thi HSK 5 với số điểm 240/300. Phương pháp học rất hiệu quả và dễ tiếp cận. Tôi đặc biệt thích tính năng luyện phát âm và thẻ ghi nhớ thông minh.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Trần Thị B",
    role: "Nhân viên công ty thương mại Trung Quốc",
    content:
      "Tôi đã học tiếng Trung được 6 tháng với HSK 365 Master và giờ đây tôi có thể tự tin giao tiếp với đối tác Trung Quốc. Các bài học giao tiếp thực tế rất hữu ích cho công việc của tôi.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Lê Văn C",
    role: "Doanh nhân",
    content:
      "Ứng dụng rất tiện lợi, tôi có thể học mọi lúc mọi nơi. Các bài học thực tế giúp tôi áp dụng ngay vào công việc kinh doanh. Sau 1 năm học, tôi đã có thể đàm phán trực tiếp với đối tác Trung Quốc.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    name: "Phạm Thị D",
    role: "Giáo viên tiếng Anh",
    content:
      "Tôi đã thử nhiều ứng dụng học tiếng Trung nhưng HSK 365 Master là ứng dụng tốt nhất. Phương pháp học từ vựng rất hiệu quả và các bài tập ngữ pháp giúp tôi hiểu sâu về cấu trúc câu tiếng Trung.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "HSK 365 Master có phù hợp với người mới bắt đầu không?",
    answer:
      "Có, HSK 365 Master được thiết kế cho mọi trình độ, từ người mới bắt đầu đến người học nâng cao. Chúng tôi có các khóa học từ HSK 1 đến HSK 6, phù hợp với mọi nhu cầu học tập.",
  },
  {
    question: "Tôi cần học bao lâu để đạt trình độ giao tiếp cơ bản?",
    answer:
      "Với việc học đều đặn 30-60 phút mỗi ngày, hầu hết học viên có thể đạt trình độ giao tiếp cơ bản (tương đương HSK 2-3) trong khoảng 6-9 tháng.",
  },
  {
    question: "HSK 365 Master có hỗ trợ học offline không?",
    answer:
      "Có, ứng dụng HSK 365 Master cho phép bạn tải bài học về máy để học offline. Bạn có thể học mọi lúc, mọi nơi mà không cần kết nối internet.",
  },
  {
    question: "Làm thế nào để cải thiện phát âm tiếng Trung?",
    answer:
      "HSK 365 Master cung cấp công cụ nhận diện giọng nói giúp bạn luyện phát âm. Bạn có thể nghe phát âm chuẩn, sau đó luyện nói và nhận phản hồi ngay lập tức về độ chính xác của phát âm.",
  },
  {
    question: "Tôi có thể học tiếng Trung mà không cần học chữ Hán không?",
    answer:
      "Mặc dù chúng tôi khuyến khích học chữ Hán để hiểu sâu về ngôn ngữ và văn hóa Trung Quốc, HSK 365 Master cũng cung cấp tùy chọn học với phiên âm pinyin cho những người muốn tập trung vào giao tiếp trước.",
  },
  {
    question:
      "HSK 365 Master có cung cấp chứng chỉ sau khi hoàn thành khóa học không?",
    answer:
      "HSK 365 Master cung cấp chứng chỉ hoàn thành khóa học nội bộ. Tuy nhiên, để có chứng chỉ HSK chính thức, bạn cần tham gia kỳ thi HSK do Hanban tổ chức. Chúng tôi có các khóa học luyện thi HSK để giúp bạn chuẩn bị cho kỳ thi này.",
  },
];

export const comparisons = [
  {
    feature: "Phương pháp học",
    hsk365:
      "Phương pháp lặp lại ngắt quãng, học theo chủ đề, luyện tập tương tác",
    traditional: "Học thuộc lòng, luyện tập lặp đi lặp lại",
  },
  {
    feature: "Thời gian học",
    hsk365: "Linh hoạt, học mọi lúc mọi nơi, 15-30 phút mỗi ngày",
    traditional: "Cố định, thường 1-2 giờ mỗi buổi học",
  },
  {
    feature: "Tài liệu học tập",
    hsk365: "Đa dạng: video, audio, thẻ ghi nhớ, bài tập tương tác",
    traditional: "Chủ yếu là sách giáo trình và bài tập viết",
  },
  {
    feature: "Theo dõi tiến độ",
    hsk365: "Hệ thống theo dõi chi tiết, phân tích điểm mạnh, điểm yếu",
    traditional: "Thường không có hệ thống theo dõi chi tiết",
  },
  {
    feature: "Hỗ trợ",
    hsk365: "Hỗ trợ 24/7 qua ứng dụng, cộng đồng học viên",
    traditional: "Chỉ hỗ trợ trong giờ học",
  },
  {
    feature: "Chi phí",
    hsk365: "Tiết kiệm hơn, trả phí theo gói dịch vụ",
    traditional: "Thường cao hơn, trả phí theo buổi học",
  },
];
