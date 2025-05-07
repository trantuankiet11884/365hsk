import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
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
              Bắt đầu hành trình học tiếng Trung ngay hôm nay
            </h2>
            <p className="text-lg text-muted-foreground">
              Đăng ký tài khoản HSK 365 Master để truy cập đầy đủ các bài học,
              từ vựng và tài liệu học tập.
            </p>
            <Button size="lg" className="px-8">
              Đăng ký ngay
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
