"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Headphones,
  MessageSquare,
  BarChart,
  Star,
  Zap,
  PenTool,
  Volume2,
  Brain,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
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

  const stats = [
    { value: "10,000+", label: "Học viên" },
    { value: "5,000+", label: "Từ vựng" },
    { value: "500+", label: "Bài học" },
    { value: "98%", label: "Tỷ lệ đỗ HSK" },
  ];

  // HSK Levels
  const hskLevels = [
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
      description:
        "Có thể đọc báo chí, xem phim và hiểu các bài phát biểu dài.",
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

  // Learning Methods
  const learningMethods = [
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

  // Testimonials
  const testimonials = [
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

  // FAQ
  const faqs = [
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

  // Comparison
  const comparisons = [
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

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Học tiếng Trung hiệu quả
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Chinh phục tiếng Trung cùng{" "}
                <span className="text-primary">HSK 365 Master</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Nền tảng học tiếng Trung toàn diện giúp bạn chinh phục kỳ thi
                HSK và giao tiếp tự tin trong mọi tình huống. Học mọi lúc, mọi
                nơi với phương pháp khoa học và hiệu quả.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/learn">Bắt đầu học ngay</Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link href="#demo">
                    <PlayCircle className="h-5 w-5" />
                    Xem giới thiệu
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary-light/80 border-2 border-white flex items-center justify-center text-white font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    1,000+ học viên
                  </span>{" "}
                  đã tham gia trong tháng này
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Student learning Chinese"
                  width={500}
                  height={500}
                  className="relative z-10 animate-float"
                />
                <div className="absolute top-5 -right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20 animate-float">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="font-medium">HSK Level 5</span>
                  </div>
                </div>
                <div
                  className="absolute bottom-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">2000+ từ vựng</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding" id="features">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tại sao chọn HSK 365 Master?
            </h2>
            <p className="text-lg text-muted-foreground">
              Chúng tôi cung cấp phương pháp học tiếng Trung toàn diện, giúp bạn
              tiến bộ nhanh chóng và đạt kết quả cao trong kỳ thi HSK.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HSK Levels Section */}
      <section className="bg-gray-50 dark:bg-gray-900 section-padding overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Các cấp độ HSK
            </h2>
            <p className="text-lg text-muted-foreground">
              HSK (Hanyu Shuiping Kaoshi) là kỳ thi đánh giá năng lực tiếng
              Trung quốc tế, gồm 6 cấp độ từ cơ bản đến nâng cao.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hskLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">
                    {level.level}
                  </h3>
                  <div className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
                    {level.words} từ vựng
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {level.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Chủ đề bao gồm:</h4>
                  <div className="flex flex-wrap gap-2">
                    {level.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methods Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Phương pháp học hiệu quả
            </h2>
            <p className="text-lg text-muted-foreground">
              HSK 365 Master áp dụng các phương pháp học tiên tiến, dựa trên
              nghiên cứu khoa học về cách não bộ ghi nhớ và học ngôn ngữ hiệu
              quả.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {learningMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
              >
                <div className="mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About App Section */}
      <section className="bg-gray-50 dark:bg-gray-900 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="HSK 365 Master App Demo"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-full">
                    <PlayCircle className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Ứng dụng thông minh
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Học mọi lúc, mọi nơi với ứng dụng HSK 365 Master
              </h2>
              <p className="text-lg text-muted-foreground">
                Ứng dụng HSK 365 Master được thiết kế để giúp bạn học tiếng
                Trung mọi lúc, mọi nơi. Với giao diện thân thiện và tính năng
                thông minh, việc học tiếng Trung trở nên dễ dàng và thú vị hơn
                bao giờ hết.
              </p>
              <ul className="space-y-3">
                {[
                  "Học offline không cần kết nối internet",
                  "Đồng bộ tiến độ học tập giữa các thiết bị",
                  "Nhắc nhở lịch học thông minh",
                  "Tính năng nhận diện chữ Hán qua camera",
                  "Phát âm chuẩn với công nghệ text-to-speech",
                  "Bài tập tương tác và trò chơi học tập",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button className="gap-2" asChild>
                  <Link href="/learn">
                    Khám phá ngay
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" id="testimonials">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Học viên nói gì về chúng tôi?
            </h2>
            <p className="text-lg text-muted-foreground">
              Hàng ngàn học viên đã thành công trong việc học tiếng Trung cùng
              HSK 365 Master.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-gray-900 section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg text-muted-foreground">
              Tìm hiểu thêm về HSK 365 Master và cách chúng tôi có thể giúp bạn
              học tiếng Trung hiệu quả.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="font-medium text-lg">{faq.question}</h3>
                      <span className="transition-transform duration-300 group-open:rotate-180">
                        <ChevronRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              So sánh phương pháp học
            </h2>
            <p className="text-lg text-muted-foreground">
              Khám phá sự khác biệt giữa phương pháp học của HSK 365 Master và
              phương pháp học truyền thống.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-gray-100 dark:bg-gray-800 border">
                      Tính năng
                    </th>
                    <th className="p-4 text-left bg-primary/10 border">
                      HSK 365 Master
                    </th>
                    <th className="p-4 text-left bg-gray-100 dark:bg-gray-800 border">
                      Phương pháp truyền thống
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index}>
                      <td className="p-4 border font-medium">
                        {comparison.feature}
                      </td>
                      <td className="p-4 border bg-primary/5">
                        {comparison.hsk365}
                      </td>
                      <td className="p-4 border">{comparison.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Sẵn sàng bắt đầu hành trình học tiếng Trung?
              </h2>
              <p className="text-lg text-muted-foreground">
                Đăng ký ngay hôm nay để nhận 7 ngày học thử miễn phí và bắt đầu
                hành trình chinh phục tiếng Trung cùng HSK 365 Master.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/learn">Bắt đầu học ngay</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Tìm hiểu thêm</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
