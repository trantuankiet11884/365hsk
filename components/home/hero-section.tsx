import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, CheckCircle, PlayCircle } from "lucide-react";

export default function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
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
              Nền tảng học tiếng Trung toàn diện giúp bạn chinh phục kỳ thi HSK
              và giao tiếp tự tin trong mọi tình huống. Học mọi lúc, mọi nơi với
              phương pháp khoa học và hiệu quả.
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
  );
}
