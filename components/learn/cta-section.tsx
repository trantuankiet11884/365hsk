import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-transparent">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/svg/cta-decoration.svg"
          alt="Decorative background"
          fill
          className="object-cover text-primary"
        />
      </div>

      {/* Floating Chinese characters */}
      <div className="absolute top-10 left-10 text-7xl font-bold text-primary/10 transform rotate-12 animate-float-slow">
        加
      </div>
      <div className="absolute bottom-10 right-10 text-7xl font-bold text-primary/10 transform -rotate-12 animate-float">
        油
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
              Bắt đầu hành trình học tiếng Trung ngay hôm nay
            </h2>
            <p className="text-lg text-muted-foreground">
              Đăng ký tài khoản HSK 365 Master để truy cập đầy đủ các bài học,
              từ vựng và tài liệu học tập.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center gap-4 py-4 border-y my-4">
              <div className="text-center px-6">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Học viên</div>
              </div>
              <div className="text-center px-6">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Bài học</div>
              </div>
              <div className="text-center px-6">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Cấp độ HSK</div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="px-8 group">
                Đăng ký ngay
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
