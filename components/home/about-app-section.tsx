import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, PlayCircle, ArrowRight } from "lucide-react";

export default function AboutAppSection() {
  const appFeatures = [
    "Học offline không cần kết nối internet",
    "Đồng bộ tiến độ học tập giữa các thiết bị",
    "Nhắc nhở lịch học thông minh",
    "Tính năng nhận diện chữ Hán qua camera",
    "Phát âm chuẩn với công nghệ text-to-speech",
    "Bài tập tương tác và trò chơi học tập",
  ];

  return (
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
              Ứng dụng HSK 365 Master được thiết kế để giúp bạn học tiếng Trung
              mọi lúc, mọi nơi. Với giao diện thân thiện và tính năng thông
              minh, việc học tiếng Trung trở nên dễ dàng và thú vị hơn bao giờ
              hết.
            </p>
            <ul className="space-y-3">
              {appFeatures.map((item, index) => (
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
  );
}
