import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 section-padding relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute -bottom-10 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Chinese character decorations */}
      <div className="absolute left-[10%] bottom-[10%] text-8xl text-primary/10 font-bold animate-float-slow">
        开
      </div>
      <div className="absolute right-[10%] top-[10%] text-8xl text-primary/10 font-bold animate-float">
        始
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                Đăng ký ngay
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Sẵn sàng bắt đầu hành trình học tiếng Trung?
            </h2>
            <p className="text-lg text-muted-foreground">
              Đăng ký ngay hôm nay để bắt đầu hành trình chinh phục tiếng Trung
              cùng HSK 365 Master.
            </p>

            <div className="bg-primary/5 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto border border-primary/20">
              <Calendar className="text-primary h-8 w-8 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Lịch học linh hoạt</span>: Học bất
                cứ lúc nào, bất cứ nơi đâu với các bài học ngắn gọn, hiệu quả
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="group" asChild>
                  <Link href="/learn" className="flex items-center gap-2">
                    Bắt đầu học ngay
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2"
                  asChild
                >
                  <Link href="/about">Tìm hiểu thêm</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
