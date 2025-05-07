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
    <section className="hero-gradient min-h-[90vh] flex items-center section-padding overflow-hidden relative">
      {/* Custom SVG background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 opacity-20">
        <Image
          src="/svg/chinese-pattern.svg"
          alt="Chinese Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-[20%] left-[10%] animate-float-slow opacity-30 z-0">
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 9H15M9 12H15M9 15H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute bottom-[15%] right-[15%] animate-float opacity-30 z-0">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9h18M3 15h18M12 3v18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
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
                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=2070&auto=format&fit=crop"
                alt="Student learning Chinese"
                width={500}
                height={500}
                className="relative z-10 animate-float rounded-3xl object-cover"
              />

              {/* Floating achievement cards */}
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

              {/* Additional floating elements */}
              <div
                className="absolute top-40 -left-14 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg z-20 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3v7M12 14v.01"
                    stroke="#FF4A4A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8l8 8M16 8l-8 8"
                    stroke="#FF4A4A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="absolute -bottom-4 right-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg z-20 animate-pulse"
                style={{ animationDelay: "0.7s" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#4BC3FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
