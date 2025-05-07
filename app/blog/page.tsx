"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 mẹo học từ vựng tiếng Trung hiệu quả",
    excerpt: "Khám phá các phương pháp học từ vựng tiếng Trung hiệu quả giúp bạn ghi nhớ lâu và sử dụng đúng ngữ cảnh.",
    category: "Học tập",
    date: "15/04/2023",
    author: "Nguyễn Văn A",
    readTime: "5 phút",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Cách luyện phát âm chuẩn như người bản xứ",
    excerpt:
      "Hướng dẫn chi tiết cách luyện phát âm tiếng Trung chuẩn, từ âm thanh đến thanh điệu để nói như người bản xứ.",
    category: "Phát âm",
    date: "20/04/2023",
    author: "Trần Thị B",
    readTime: "7 phút",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Lộ trình học tiếng Trung từ cơ bản đến nâng cao",
    excerpt: "Lộ trình học tiếng Trung toàn diện từ cơ bản đến nâng cao, giúp bạn đạt được mục tiêu học tập của mình.",
    category: "Lộ trình",
    date: "25/04/2023",
    author: "Lê Văn C",
    readTime: "10 phút",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Kinh nghiệm thi HSK 5 đạt điểm cao",
    excerpt: "Chia sẻ kinh nghiệm và bí quyết giúp bạn chinh phục kỳ thi HSK 5 với số điểm cao nhất.",
    category: "Kỳ thi HSK",
    date: "30/04/2023",
    author: "Phạm Thị D",
    readTime: "8 phút",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "5 ứng dụng hỗ trợ học tiếng Trung hiệu quả",
    excerpt: "Giới thiệu 5 ứng dụng hỗ trợ học tiếng Trung hiệu quả, giúp bạn học mọi lúc, mọi nơi.",
    category: "Công nghệ",
    date: "05/05/2023",
    author: "Nguyễn Văn A",
    readTime: "6 phút",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Văn hóa Trung Quốc qua các thành ngữ",
    excerpt: "Khám phá văn hóa Trung Quốc thông qua các thành ngữ phổ biến và ý nghĩa sâu sắc đằng sau chúng.",
    category: "Văn hóa",
    date: "10/05/2023",
    author: "Trần Thị B",
    readTime: "9 phút",
    image: "/placeholder.svg?height=200&width=400",
  },
]

// Featured posts
const featuredPosts = blogPosts.slice(0, 3)

export default function BlogPage() {
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
      <section className="hero-gradient min-h-[40vh] flex items-center section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Blog HSK 365 Master</h1>
            <p className="text-lg text-muted-foreground">
              Khám phá các bài viết, mẹo học tập và kinh nghiệm học tiếng Trung từ các chuyên gia và cộng đồng học viên.
            </p>
            <div className="max-w-md mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input type="text" placeholder="Tìm kiếm bài viết..." className="pl-10 pr-4 py-6 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Bài viết nổi bật</h2>
            <p className="text-muted-foreground">
              Những bài viết được đọc nhiều nhất và nhận được nhiều phản hồi tích cực từ cộng đồng.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeIn} className="group">
                <Link href={`/blog/${post.id}`} className="block">
                  <Card className="overflow-hidden border-0 shadow-lg card-hover h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1 text-primary">
                          Đọc tiếp
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="bg-gray-50 dark:bg-gray-900 section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Tất cả bài viết</h2>
            <p className="text-muted-foreground">
              Khám phá tất cả bài viết về học tiếng Trung, kỳ thi HSK và văn hóa Trung Quốc.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Tất cả</TabsTrigger>
                <TabsTrigger value="learning">Học tập</TabsTrigger>
                <TabsTrigger value="hsk">Kỳ thi HSK</TabsTrigger>
                <TabsTrigger value="culture">Văn hóa</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogPosts.map((post) => (
                  <motion.div key={post.id} variants={fadeIn} className="group">
                    <Link href={`/blog/${post.id}`} className="block">
                      <Card className="overflow-hidden border card-hover h-full">
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                            {post.category}
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <User className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-sm font-medium">{post.author}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1 text-primary">
                              Đọc tiếp
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="learning">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogPosts
                  .filter(
                    (post) =>
                      post.category === "Học tập" || post.category === "Phát âm" || post.category === "Lộ trình",
                  )
                  .map((post) => (
                    <motion.div key={post.id} variants={fadeIn} className="group">
                      <Link href={`/blog/${post.id}`} className="block">
                        <Card className="overflow-hidden border card-hover h-full">
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                              {post.category}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                  <User className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium">{post.author}</span>
                              </div>
                              <Button variant="ghost" size="sm" className="gap-1 text-primary">
                                Đọc tiếp
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="hsk">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogPosts
                  .filter((post) => post.category === "Kỳ thi HSK")
                  .map((post) => (
                    <motion.div key={post.id} variants={fadeIn} className="group">
                      <Link href={`/blog/${post.id}`} className="block">
                        <Card className="overflow-hidden border card-hover h-full">
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                              {post.category}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                  <User className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium">{post.author}</span>
                              </div>
                              <Button variant="ghost" size="sm" className="gap-1 text-primary">
                                Đọc tiếp
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="culture">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogPosts
                  .filter((post) => post.category === "Văn hóa")
                  .map((post) => (
                    <motion.div key={post.id} variants={fadeIn} className="group">
                      <Link href={`/blog/${post.id}`} className="block">
                        <Card className="overflow-hidden border card-hover h-full">
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                              {post.category}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                  <User className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium">{post.author}</span>
                              </div>
                              <Button variant="ghost" size="sm" className="gap-1 text-primary">
                                Đọc tiếp
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-primary/10 rounded-xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl font-bold">Đăng ký nhận bản tin</h2>
              <p className="text-muted-foreground">
                Đăng ký để nhận các bài viết mới nhất, mẹo học tiếng Trung và thông tin về các khóa học mới.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Email của bạn" className="flex-1" />
                <Button>Đăng ký</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Chúng tôi tôn trọng quyền riêng tư của bạn. Bạn có thể hủy đăng ký bất cứ lúc nào.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
