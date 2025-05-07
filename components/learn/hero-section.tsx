import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-[50vh] flex items-center section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/svg/hero-decoration.svg"
          alt="Decorative background"
          fill
          className="object-cover text-primary"
        />
      </div>

      {/* Floating Chinese characters */}
      <div className="absolute top-1/4 left-[10%] text-6xl font-bold text-primary/10 animate-float-slow">
        学
      </div>
      <div className="absolute bottom-1/4 right-[10%] text-6xl font-bold text-primary/10 animate-float">
        习
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              HSK 365 Master
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Học tiếng Trung cùng HSK 365 Master
            </h1>
            <p className="text-lg text-muted-foreground">
              Khám phá các bài học, từ vựng và tài liệu học tập giúp bạn chinh
              phục tiếng Trung một cách hiệu quả.
            </p>

            {/* Added visual indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/80 border-2 border-white flex items-center justify-center text-white font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  3 bước đơn giản
                </span>{" "}
                để làm chủ tiếng Trung
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
              <Image
                src="/images/hero-learning.webp"
                alt="Chinese learning"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />

              {/* Floating achievement card */}
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg shadow-lg z-20 flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">+</span>
                </div>
                <span className="text-sm font-medium">Bắt đầu hành trình</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
