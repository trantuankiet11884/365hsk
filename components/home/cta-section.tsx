import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
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
  );
}
