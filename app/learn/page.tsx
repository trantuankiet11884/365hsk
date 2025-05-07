"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Volume2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  CheckCircle,
  Brain,
  GraduationCap,
  Lightbulb,
  Users,
  ArrowRight,
  BookMarked,
  Smartphone,
  Headphones,
  PenTool,
  Globe,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample vocabulary data with audio URLs
const vocabularyData = [
  {
    id: 1,
    chinese: "你好",
    pinyin: "nǐ hǎo",
    vietnamese: "Xin chào",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/ni3_hao3.mp3",
  },
  {
    id: 2,
    chinese: "谢谢",
    pinyin: "xiè xiè",
    vietnamese: "Cảm ơn",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/xie4_xie4.mp3",
  },
  {
    id: 3,
    chinese: "再见",
    pinyin: "zài jiàn",
    vietnamese: "Tạm biệt",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/zai4_jian4.mp3",
  },
  {
    id: 4,
    chinese: "对不起",
    pinyin: "duì bù qǐ",
    vietnamese: "Xin lỗi",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/dui4_bu4_qi3.mp3",
  },
  {
    id: 5,
    chinese: "没关系",
    pinyin: "méi guān xì",
    vietnamese: "Không sao",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/mei2_guan1_xi4.mp3",
  },
  {
    id: 6,
    chinese: "我爱你",
    pinyin: "wǒ ài nǐ",
    vietnamese: "Tôi yêu bạn",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/wo3_ai4_ni3.mp3",
  },
  {
    id: 7,
    chinese: "学习",
    pinyin: "xué xí",
    vietnamese: "Học tập",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/xue2_xi2.mp3",
  },
  {
    id: 8,
    chinese: "工作",
    pinyin: "gōng zuò",
    vietnamese: "Công việc",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/gong1_zuo4.mp3",
  },
  {
    id: 9,
    chinese: "朋友",
    pinyin: "péng yǒu",
    vietnamese: "Bạn bè",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/peng2_you3.mp3",
  },
  {
    id: 10,
    chinese: "家庭",
    pinyin: "jiā tíng",
    vietnamese: "Gia đình",
    audioUrl: "https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/jia1_ting2.mp3",
  },
]

// Sample learning paths
const learningPaths = [
  {
    id: 1,
    title: "Giao tiếp cơ bản",
    description: "Học các từ vựng và cấu trúc câu cơ bản để giao tiếp hàng ngày.",
    level: "Cơ bản",
    topics: ["Chào hỏi", "Giới thiệu bản thân", "Mua sắm", "Đi ăn nhà hàng"],
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Luyện phát âm",
    description: "Tập trung vào việc phát âm chuẩn các âm tiết và thanh điệu tiếng Trung.",
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
    topics: ["Bộ thủ cơ bản", "Quy tắc viết", "Chữ Hán thông dụng", "Luyện viết"],
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Ngữ pháp nâng cao",
    description: "Học các cấu trúc ngữ pháp phức tạp để diễn đạt ý tưởng chính xác.",
    level: "Trung cấp đến Nâng cao",
    topics: ["Câu điều kiện", "Thể bị động", "Trợ từ ngữ pháp", "Cấu trúc phức hợp"],
    icon: <Brain className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Sample learning tips
const learningTips = [
  {
    title: "Học từ vựng theo chủ đề",
    description: "Phân loại từ vựng theo chủ đề giúp bạn dễ dàng ghi nhớ và sử dụng trong các tình huống thực tế.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    title: "Luyện viết chữ Hán mỗi ngày",
    description: "Dành 15 phút mỗi ngày để luyện viết chữ Hán sẽ giúp bạn ghi nhớ tốt hơn và cải thiện kỹ năng viết.",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
  },
  {
    title: "Nghe và bắt chước phát âm",
    description: "Nghe và bắt chước phát âm từ người bản xứ là cách tốt nhất để cải thiện kỹ năng phát âm của bạn.",
    icon: <Volume2 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Học qua phim và âm nhạc",
    description: "Xem phim và nghe nhạc Trung Quốc giúp bạn làm quen với ngôn ngữ và văn hóa một cách tự nhiên.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
  },
  {
    title: "Sử dụng ứng dụng học tiếng Trung",
    description: "Sử dụng ứng dụng HSK 365 Master để học tiếng Trung mọi lúc, mọi nơi và theo dõi tiến độ học tập.",
    icon: <Brain className="h-10 w-10 text-primary" />,
  },
  {
    title: "Tham gia cộng đồng học tiếng Trung",
    description: "Tham gia các nhóm học tiếng Trung để trao đổi kinh nghiệm và thực hành giao tiếp với người khác.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
]

// Sample daily practice exercises
const dailyExercises = [
  {
    id: 1,
    title: "Luyện nghe - Đoạn hội thoại cơ bản",
    description: "Nghe đoạn hội thoại ngắn và trả lời câu hỏi để cải thiện kỹ năng nghe.",
    duration: "10 phút",
    difficulty: "Cơ bản",
    type: "Nghe",
  },
  {
    id: 2,
    title: "Luyện đọc - Bài đọc ngắn",
    description: "Đọc bài văn ngắn và trả lời câu hỏi để cải thiện kỹ năng đọc hiểu.",
    duration: "15 phút",
    difficulty: "Trung cấp",
    type: "Đọc",
  },
  {
    id: 3,
    title: "Luyện viết - Viết đoạn văn ngắn",
    description: "Viết đoạn văn ngắn về chủ đề hàng ngày để cải thiện kỹ năng viết.",
    duration: "20 phút",
    difficulty: "Trung cấp",
    type: "Viết",
  },
  {
    id: 4,
    title: "Luyện nói - Tự giới thiệu bản thân",
    description: "Luyện nói về bản thân, sở thích và công việc để cải thiện kỹ năng nói.",
    duration: "10 phút",
    difficulty: "Cơ bản",
    type: "Nói",
  },
]

export default function LearnPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playAudio = (audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error)
      })
    }
  }

  const nextCard = () => {
    if (currentIndex < vocabularyData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(vocabularyData.length - 1)
    }
  }

  // Auto-advance cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[50vh] flex items-center section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Học tiếng Trung cùng HSK 365 Master</h1>
            <p className="text-lg text-muted-foreground">
              Khám phá các bài học, từ vựng và tài liệu học tập giúp bạn chinh phục tiếng Trung một cách hiệu quả.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vocabulary Cards Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Thẻ từ vựng</h2>
            <p className="text-muted-foreground">
              Luyện tập từ vựng tiếng Trung với thẻ học tương tác. Nghe phát âm và học cách sử dụng từ vựng trong các
              tình huống thực tế.
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
                      onClick={() => playAudio(vocabularyData[currentIndex].audioUrl)}
                      className="text-primary hover:text-primary hover:bg-primary/10"
                    >
                      <Volume2 className="h-6 w-6" />
                      <span className="sr-only">Play pronunciation</span>
                    </Button>
                  </div>
                  <div className="space-y-6 text-center">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-2">{vocabularyData[currentIndex].chinese}</h3>
                      <p className="text-xl text-primary">{vocabularyData[currentIndex].pinyin}</p>
                    </div>
                    <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>
                    <p className="text-2xl">{vocabularyData[currentIndex].vietnamese}</p>
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
              {vocabularyData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Audio element for playback */}
            <audio ref={audioRef} className="hidden">
              <source src="" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Lộ trình học tập</h2>
            <p className="text-muted-foreground">
              Khám phá các lộ trình học tiếng Trung được thiết kế phù hợp với mục tiêu và trình độ của bạn.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {learningPaths.map((path) => (
              <motion.div key={path.id} variants={fadeIn}>
                <Card className="overflow-hidden card-hover h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">{path.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                    <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                      {path.level}
                    </div>
                    <p className="text-muted-foreground mb-4">{path.description}</p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-medium text-sm">Chủ đề bao gồm:</h4>
                      <ul className="space-y-1">
                        {path.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full">Xem lộ trình</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Daily Practice Section */}
      <section className="bg-primary/5 section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Bài tập luyện hàng ngày</h2>
            <p className="text-muted-foreground">
              Luyện tập mỗi ngày với các bài tập được thiết kế để cải thiện kỹ năng nghe, nói, đọc và viết.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {dailyExercises.map((exercise) => (
              <motion.div key={exercise.id} variants={fadeIn}>
                <Card className="overflow-hidden card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {exercise.type}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{exercise.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
                    <p className="text-muted-foreground mb-4">{exercise.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-muted-foreground rounded-full text-xs">
                        {exercise.difficulty}
                      </div>
                      <Button variant="outline" size="sm">
                        Bắt đầu
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vocabulary by Topic Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Từ vựng theo chủ đề</h2>
            <p className="text-muted-foreground">
              Học từ vựng theo chủ đề giúp bạn dễ dàng ghi nhớ và sử dụng trong các tình huống thực tế.
            </p>
          </motion.div>

          <Tabs defaultValue="daily" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="daily">Giao tiếp hàng ngày</TabsTrigger>
                <TabsTrigger value="business">Kinh doanh</TabsTrigger>
                <TabsTrigger value="travel">Du lịch</TabsTrigger>
                <TabsTrigger value="food">Ẩm thực</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="daily">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    chinese: "你好",
                    pinyin: "nǐ hǎo",
                    vietnamese: "Xin chào",
                    example: "你好，我叫小明。(Xin chào, tôi tên là Tiểu Minh.)",
                  },
                  {
                    chinese: "谢谢",
                    pinyin: "xiè xiè",
                    vietnamese: "Cảm ơn",
                    example: "谢谢你的帮助。(Cảm ơn sự giúp đỡ của bạn.)",
                  },
                  {
                    chinese: "对不起",
                    pinyin: "duì bù qǐ",
                    vietnamese: "Xin lỗi",
                    example: "对不起，我迟到了。(Xin lỗi, tôi đến muộn.)",
                  },
                  {
                    chinese: "没关系",
                    pinyin: "méi guān xì",
                    vietnamese: "Không sao",
                    example: "没关系，我理解。(Không sao, tôi hiểu.)",
                  },
                  {
                    chinese: "请问",
                    pinyin: "qǐng wèn",
                    vietnamese: "Xin hỏi",
                    example: "请问，银行在哪里？(Xin hỏi, ngân hàng ở đâu?)",
                  },
                  {
                    chinese: "再见",
                    pinyin: "zài jiàn",
                    vietnamese: "Tạm biệt",
                    example: "明天见，再见！(Hẹn gặp lại ngày mai, tạm biệt!)",
                  },
                  {
                    chinese: "我爱你",
                    pinyin: "wǒ ài nǐ",
                    vietnamese: "Tôi yêu bạn",
                    example: "我爱你，我的家人。(Tôi yêu các bạn, gia đình của tôi.)",
                  },
                  {
                    chinese: "多少钱",
                    pinyin: "duō shǎo qián",
                    vietnamese: "Bao nhiêu tiền",
                    example: "这个苹果多少钱？(Quả táo này bao nhiêu tiền?)",
                  },
                ].map((word, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="overflow-hidden card-hover h-full">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{word.chinese}</h3>
                            <p className="text-primary">{word.pinyin}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              playAudio(
                                `https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/${word.pinyin.replace(/\s/g, "_").replace(/[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/g, "")}.mp3`,
                              )
                            }
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Volume2 className="h-5 w-5" />
                            <span className="sr-only">Play pronunciation</span>
                          </Button>
                        </div>
                        <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-4"></div>
                        <p className="text-lg mb-4">{word.vietnamese}</p>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-muted-foreground">
                          <p>{word.example}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="business">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    chinese: "公司",
                    pinyin: "gōng sī",
                    vietnamese: "Công ty",
                    example: "我在一家科技公司工作。(Tôi làm việc tại một công ty công nghệ.)",
                  },
                  {
                    chinese: "会议",
                    pinyin: "huì yì",
                    vietnamese: "Cuộc họp",
                    example: "明天我们有一个重要的会议。(Ngày mai chúng ta có một cuộc họp quan trọng.)",
                  },
                  {
                    chinese: "合同",
                    pinyin: "hé tong",
                    vietnamese: "Hợp đồng",
                    example: "请签署这份合同。(Vui lòng ký hợp đồng này.)",
                  },
                  {
                    chinese: "客户",
                    pinyin: "kè hù",
                    vietnamese: "Khách hàng",
                    example: "我们有很多国际客户。(Chúng tôi có nhiều khách hàng quốc tế.)",
                  },
                  {
                    chinese: "市场",
                    pinyin: "shì chǎng",
                    vietnamese: "Thị trường",
                    example: "中国市场很大。(Thị trường Trung Quốc rất lớn.)",
                  },
                  {
                    chinese: "投资",
                    pinyin: "tóu zī",
                    vietnamese: "Đầu tư",
                    example: "我们需要更多的投资。(Chúng tôi cần nhiều đầu tư hơn.)",
                  },
                  {
                    chinese: "利润",
                    pinyin: "lì rùn",
                    vietnamese: "Lợi nhuận",
                    example: "今年的利润增加了。(Lợi nhuận năm nay đã tăng.)",
                  },
                  {
                    chinese: "谈判",
                    pinyin: "tán pàn",
                    vietnamese: "Đàm phán",
                    example: "我们正在与他们谈判。(Chúng tôi đang đàm phán với họ.)",
                  },
                ].map((word, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="overflow-hidden card-hover h-full">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{word.chinese}</h3>
                            <p className="text-primary">{word.pinyin}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              playAudio(
                                `https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/${word.pinyin.replace(/\s/g, "_").replace(/[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/g, "")}.mp3`,
                              )
                            }
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Volume2 className="h-5 w-5" />
                            <span className="sr-only">Play pronunciation</span>
                          </Button>
                        </div>
                        <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-4"></div>
                        <p className="text-lg mb-4">{word.vietnamese}</p>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-muted-foreground">
                          <p>{word.example}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="travel">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    chinese: "机场",
                    pinyin: "jī chǎng",
                    vietnamese: "Sân bay",
                    example: "我们需要提前两个小时到机场。(Chúng ta cần đến sân bay trước hai giờ.)",
                  },
                  {
                    chinese: "护照",
                    pinyin: "hù zhào",
                    vietnamese: "Hộ chiếu",
                    example: "请出示您的护照。(Vui lòng xuất trình hộ chiếu của bạn.)",
                  },
                  {
                    chinese: "酒店",
                    pinyin: "jiǔ diàn",
                    vietnamese: "Khách sạn",
                    example: "这家酒店很舒适。(Khách sạn này rất thoải mái.)",
                  },
                  {
                    chinese: "景点",
                    pinyin: "jǐng diǎn",
                    vietnamese: "Điểm du lịch",
                    example: "北京有很多著名的景点。(Bắc Kinh có nhiều điểm du lịch nổi tiếng.)",
                  },
                  {
                    chinese: "地图",
                    pinyin: "dì tú",
                    vietnamese: "Bản đồ",
                    example: "你可以在地图上找到这个地方。(Bạn có thể tìm thấy địa điểm này trên bản đồ.)",
                  },
                  {
                    chinese: "出租车",
                    pinyin: "chū zū chē",
                    vietnamese: "Taxi",
                    example: "我们可以打出租车去那里。(Chúng ta có thể đi taxi đến đó.)",
                  },
                  {
                    chinese: "票",
                    pinyin: "piào",
                    vietnamese: "Vé",
                    example: "我已经买了电影票。(Tôi đã mua vé xem phim.)",
                  },
                  {
                    chinese: "行李",
                    pinyin: "xíng lǐ",
                    vietnamese: "Hành lý",
                    example: "我的行李很重。(Hành lý của tôi rất nặng.)",
                  },
                ].map((word, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="overflow-hidden card-hover h-full">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{word.chinese}</h3>
                            <p className="text-primary">{word.pinyin}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              playAudio(
                                `https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/${word.pinyin.replace(/\s/g, "_").replace(/[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/g, "")}.mp3`,
                              )
                            }
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Volume2 className="h-5 w-5" />
                            <span className="sr-only">Play pronunciation</span>
                          </Button>
                        </div>
                        <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-4"></div>
                        <p className="text-lg mb-4">{word.vietnamese}</p>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-muted-foreground">
                          <p>{word.example}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="food">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    chinese: "饭",
                    pinyin: "fàn",
                    vietnamese: "Cơm",
                    example: "我想吃米饭。(Tôi muốn ăn cơm.)",
                  },
                  {
                    chinese: "面条",
                    pinyin: "miàn tiáo",
                    vietnamese: "Mì",
                    example: "这家餐厅的面条很好吃。(Mì ở nhà hàng này rất ngon.)",
                  },
                  {
                    chinese: "水果",
                    pinyin: "shuǐ guǒ",
                    vietnamese: "Trái cây",
                    example: "我喜欢吃水果。(Tôi thích ăn trái cây.)",
                  },
                  {
                    chinese: "蔬菜",
                    pinyin: "shū cài",
                    vietnamese: "Rau",
                    example: "蔬菜对健康很重要。(Rau rất quan trọng đối với sức khỏe.)",
                  },
                  {
                    chinese: "牛肉",
                    pinyin: "niú ròu",
                    vietnamese: "Thịt bò",
                    example: "我想点一份牛肉面。(Tôi muốn gọi một phần mì bò.)",
                  },
                  {
                    chinese: "鸡肉",
                    pinyin: "jī ròu",
                    vietnamese: "Thịt gà",
                    example: "这是鸡肉炒饭。(Đây là cơm chiên gà.)",
                  },
                  {
                    chinese: "茶",
                    pinyin: "chá",
                    vietnamese: "Trà",
                    example: "中国人喜欢喝茶。(Người Trung Quốc thích uống trà.)",
                  },
                  {
                    chinese: "咖啡",
                    pinyin: "kā fēi",
                    vietnamese: "Cà phê",
                    example: "我每天早上喝咖啡。(Tôi uống cà phê mỗi sáng.)",
                  },
                ].map((word, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="overflow-hidden card-hover h-full">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{word.chinese}</h3>
                            <p className="text-primary">{word.pinyin}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              playAudio(
                                `https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/${word.pinyin.replace(/\s/g, "_").replace(/[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/g, "")}.mp3`,
                              )
                            }
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Volume2 className="h-5 w-5" />
                            <span className="sr-only">Play pronunciation</span>
                          </Button>
                        </div>
                        <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-4"></div>
                        <p className="text-lg mb-4">{word.vietnamese}</p>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-muted-foreground">
                          <p>{word.example}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Basic Grammar Section */}
      <section className="bg-gray-50 dark:bg-gray-900 section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ngữ pháp cơ bản</h2>
            <p className="text-muted-foreground">
              Học các cấu trúc ngữ pháp cơ bản để xây dựng nền tảng vững chắc cho việc học tiếng Trung.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Cấu trúc câu cơ bản",
                description: "Tiếng Trung có cấu trúc câu Chủ - Vị - Tân tương tự như tiếng Việt.",
                example: "我喜欢学习中文。(Wǒ xǐhuān xuéxí zhōngwén.)",
                translation: "Tôi thích học tiếng Trung.",
                explanation: "我 (tôi) + 喜欢 (thích) + 学习中文 (học tiếng Trung)",
              },
              {
                title: "Câu hỏi có/không",
                description: "Thêm 吗 (ma) vào cuối câu để biến câu khẳng định thành câu hỏi có/không.",
                example: "你是学生吗？(Nǐ shì xuéshēng ma?)",
                translation: "Bạn có phải là học sinh không?",
                explanation: "你是学生 (Bạn là học sinh) + 吗 (không?)",
              },
              {
                title: "Câu hỏi với từ để hỏi",
                description: "Sử dụng từ để hỏi như 什么 (shénme - cái gì), 谁 (shuí - ai), 哪里 (nǎlǐ - đâu).",
                example: "你叫什么名字？(Nǐ jiào shénme míngzì?)",
                translation: "Bạn tên là gì?",
                explanation: "你叫 (bạn tên) + 什么 (gì) + 名字 (tên)",
              },
              {
                title: "Thời gian trong tiếng Trung",
                description: "Thời gian trong tiếng Trung được sắp xếp từ lớn đến nhỏ: năm, tháng, ngày, giờ, phút.",
                example: "2023年5月10日下午3点30分 (2023 nián 5 yuè 10 rì xiàwǔ 3 diǎn 30 fēn)",
                translation: "3:30 chiều ngày 10 tháng 5 năm 2023",
                explanation: "年 (năm) → 月 (tháng) → 日 (ngày) → 下午 (chiều) → 点 (giờ) → 分 (phút)",
              },
            ].map((grammar, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden card-hover h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{grammar.title}</h3>
                    <p className="text-muted-foreground mb-4">{grammar.description}</p>
                    <div className="bg-primary/5 p-4 rounded-lg mb-4">
                      <p className="font-medium mb-1">Ví dụ:</p>
                      <p className="text-lg mb-1">{grammar.example}</p>
                      <p className="text-muted-foreground">{grammar.translation}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <p className="font-medium mb-1">Giải thích:</p>
                      <p className="text-muted-foreground">{grammar.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2">
              Xem thêm ngữ pháp
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Tài liệu học tập</h2>
            <p className="text-muted-foreground">
              Khám phá các tài liệu học tập phong phú để nâng cao kỹ năng tiếng Trung của bạn.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Sách giáo trình HSK",
                description: "Bộ sách giáo trình chuẩn cho kỳ thi HSK từ cấp độ 1 đến 6.",
                icon: <BookMarked className="h-10 w-10 text-primary" />,
                items: [
                  "HSK Standard Course 1",
                  "HSK Standard Course 2",
                  "HSK Standard Course 3",
                  "HSK Standard Course 4",
                ],
              },
              {
                title: "Ứng dụng học tập",
                description: "Các ứng dụng hỗ trợ học tiếng Trung hiệu quả trên điện thoại và máy tính.",
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                items: ["HSK 365 Master", "Pleco Dictionary", "HelloChinese", "ChineseSkill"],
              },
              {
                title: "Tài liệu nghe",
                description: "Các tài liệu nghe giúp cải thiện kỹ năng nghe hiểu tiếng Trung.",
                icon: <Headphones className="h-10 w-10 text-primary" />,
                items: ["HSK Listening Materials", "Chinese Pod", "ChinesePod101", "Slow Chinese"],
              },
              {
                title: "Tài liệu đọc",
                description: "Các tài liệu đọc phù hợp với nhiều trình độ để cải thiện kỹ năng đọc hiểu.",
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                items: ["Graded Chinese Readers", "Chinese Breeze", "DuChinese", "The Chairman's Bao"],
              },
              {
                title: "Tài liệu viết",
                description: "Các tài liệu hướng dẫn viết chữ Hán và cải thiện kỹ năng viết.",
                icon: <PenTool className="h-10 w-10 text-primary" />,
                items: ["HSK Writing Practice", "Chinese Writing Master", "Hanzi Grids", "Skritter"],
              },
              {
                title: "Tài liệu văn hóa",
                description: "Các tài liệu giới thiệu về văn hóa Trung Quốc, giúp hiểu sâu hơn về ngôn ngữ.",
                icon: <Globe className="h-10 w-10 text-primary" />,
                items: ["Chinese Culture Reader", "Chinese Festivals", "Chinese Customs", "Chinese History"],
              },
            ].map((resource, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden card-hover h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <ul className="space-y-2">
                      {resource.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="bg-primary/5 section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Mẹo học tiếng Trung hiệu quả</h2>
            <p className="text-muted-foreground">
              Khám phá các mẹo và phương pháp học tiếng Trung hiệu quả từ các chuyên gia ngôn ngữ.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {learningTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
              >
                <div className="mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Bắt đầu hành trình học tiếng Trung ngay hôm nay</h2>
              <p className="text-lg text-muted-foreground">
                Đăng ký tài khoản HSK 365 Master để truy cập đầy đủ các bài học, từ vựng và tài liệu học tập.
              </p>
              <Button size="lg" className="px-8">
                Đăng ký ngay
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
