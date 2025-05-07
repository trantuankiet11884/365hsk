"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, BookOpen, Globe, CheckCircle } from "lucide-react";

export default function AboutPage() {
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

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[50vh] flex items-center section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Về HSK 365 Master
            </h1>
            <p className="text-lg text-muted-foreground">
              Chúng tôi là nền tảng học tiếng Trung hàng đầu, giúp hàng ngàn học
              viên chinh phục tiếng Trung và kỳ thi HSK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square max-w-md">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="HSK 365 Master Team"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Câu chuyện của chúng tôi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Sứ mệnh giúp mọi người chinh phục tiếng Trung
              </h2>
              <p className="text-lg text-muted-foreground">
                HSK 365 Master được thành lập vào năm 2020 với sứ mệnh giúp
                người Việt Nam học tiếng Trung một cách hiệu quả và thú vị.
                Chúng tôi tin rằng việc học ngôn ngữ không chỉ là ghi nhớ từ
                vựng và ngữ pháp, mà còn là hiểu biết về văn hóa và con người.
              </p>
              <p className="text-lg text-muted-foreground">
                Với đội ngũ giáo viên giàu kinh nghiệm và phương pháp giảng dạy
                hiện đại, chúng tôi đã giúp hàng ngàn học viên đạt được mục tiêu
                học tiếng Trung của họ, từ giao tiếp cơ bản đến chinh phục kỳ
                thi HSK.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">10,000+ học viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">98% tỷ lệ đỗ HSK</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium">500+ bài học</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Giá trị cốt lõi
            </h2>
            <p className="text-lg text-muted-foreground">
              Những giá trị định hướng mọi hoạt động của chúng tôi và cam kết
              mang đến trải nghiệm học tập tốt nhất cho học viên.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Chất lượng",
                description:
                  "Cam kết mang đến nội dung học tập chất lượng cao, được biên soạn bởi các chuyên gia ngôn ngữ.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Cộng đồng",
                description:
                  "Xây dựng cộng đồng học tập hỗ trợ lẫn nhau, tạo môi trường học tập tích cực.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Đa dạng văn hóa",
                description:
                  "Tôn trọng và giới thiệu sự đa dạng văn hóa, giúp học viên hiểu sâu về văn hóa Trung Quốc.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Đổi mới",
                description:
                  "Liên tục cải tiến phương pháp giảng dạy và nội dung học tập để mang lại hiệu quả tốt nhất.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover text-center"
              >
                <div className="mx-auto mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
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
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-lg text-muted-foreground">
              Gặp gỡ những chuyên gia ngôn ngữ và giáo dục tận tâm, những người
              đã tạo nên HSK 365 Master.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Nguyễn Văn A",
                role: "Giám đốc điều hành",
                bio: "Hơn 15 năm kinh nghiệm giảng dạy tiếng Trung và quản lý giáo dục.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Trần Thị B",
                role: "Trưởng bộ phận học thuật",
                bio: "Tiến sĩ ngôn ngữ học, chuyên gia về phương pháp giảng dạy tiếng Trung.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lê Văn C",
                role: "Giáo viên chính",
                bio: "Giáo viên tiếng Trung với hơn 10 năm kinh nghiệm giảng dạy tại Trung Quốc.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Phạm Thị D",
                role: "Chuyên gia nội dung",
                bio: "Chuyên gia phát triển nội dung học tập và biên soạn giáo trình.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border overflow-hidden card-hover"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-primary/5 section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-lg text-muted-foreground">
              Những con số và thành tựu đáng tự hào trong hành trình phát triển
              của HSK 365 Master.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Những cột mốc quan trọng</h3>
              <div className="space-y-6">
                {[
                  {
                    year: "2020",
                    title: "Thành lập HSK 365 Master",
                    description:
                      "Khởi đầu với 5 giáo viên và 100 học viên đầu tiên.",
                  },
                  {
                    year: "2021",
                    title: "Ra mắt ứng dụng di động",
                    description:
                      "Mở rộng nền tảng học tập với ứng dụng di động trên iOS và Android.",
                  },
                  {
                    year: "2022",
                    title: "Đạt 5,000 học viên",
                    description:
                      "Cộng đồng học viên phát triển mạnh mẽ trên toàn quốc.",
                  },
                  {
                    year: "2023",
                    title: "Hợp tác quốc tế",
                    description:
                      "Ký kết hợp tác với các trường đại học tại Trung Quốc.",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-16 flex-shrink-0">
                      <div className="bg-primary text-white text-center py-1 px-2 rounded font-medium">
                        {milestone.year}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{milestone.title}</h4>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Giải thưởng và ghi nhận</h3>
              <div className="space-y-6">
                {[
                  {
                    award: "Nền tảng học tiếng Trung tốt nhất",
                    organization: "Hiệp hội Giáo dục Trực tuyến Việt Nam",
                    year: "2022",
                  },
                  {
                    award: "Ứng dụng giáo dục xuất sắc",
                    organization: "Tech Awards Vietnam",
                    year: "2022",
                  },
                  {
                    award: "Đối tác giáo dục tin cậy",
                    organization: "Viện Khổng Tử Hà Nội",
                    year: "2023",
                  },
                  {
                    award: "Doanh nghiệp EdTech tiêu biểu",
                    organization: "Vietnam EdTech Forum",
                    year: "2023",
                  },
                ].map((award, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg border"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold mb-1">{award.award}</h4>
                        <p className="text-muted-foreground">
                          {award.organization}
                        </p>
                      </div>
                      <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                        {award.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold">
                Tham gia cùng chúng tôi
              </h2>
              <p className="text-lg text-muted-foreground">
                Bắt đầu hành trình học tiếng Trung của bạn cùng HSK 365 Master
                ngay hôm nay và trở thành một phần của cộng đồng học viên của
                chúng tôi.
              </p>
              <Button size="lg" className="px-8">
                Đăng ký ngay
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
