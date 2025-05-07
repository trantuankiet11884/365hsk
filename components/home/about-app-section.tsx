import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  PlayCircle,
  ArrowRight,
  Smartphone,
  Globe,
  Download,
  RefreshCw,
  Camera,
  Music,
  Gamepad2,
} from "lucide-react";

export default function AboutAppSection() {
  const appFeatures = [
    {
      text: "Học offline không cần kết nối internet",
      icon: <Globe className="h-4 w-4 text-primary mr-2 flex-shrink-0" />,
    },
    {
      text: "Đồng bộ tiến độ học tập giữa các thiết bị",
      icon: <RefreshCw className="h-4 w-4 text-primary mr-2 flex-shrink-0" />,
    },
    {
      text: "Nhắc nhở lịch học thông minh",
      icon: <Smartphone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />,
    },
    {
      text: "Tính năng nhận diện chữ Hán qua camera",
      icon: <Camera className="h-4 w-4 text-primary mr-2 flex-shrink-0" />,
    },
    {
      text: "Phát âm chuẩn với công nghệ text-to-speech",
      icon: <Music className="h-4 w-4 text-primary mr-2 flex-shrink-0" />,
    },
    {
      text: "Bài tập tương tác và trò chơi học tập",
      icon: <Gamepad2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />,
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 section-padding relative overflow-hidden">
      {/* Decorative SVG Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image
          src="/svg/grid-pattern.svg"
          alt="Grid Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Chinese Characters */}
      <div className="absolute top-20 left-10 animate-float opacity-10 text-6xl font-bold text-primary">
        学
      </div>
      <div className="absolute bottom-20 right-10 animate-float-slow opacity-10 text-6xl font-bold text-primary">
        习
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-2">
              {/* App mockup frame */}
              <div className="absolute top-0 left-0 w-full h-7 bg-gray-200 dark:bg-gray-700 rounded-t-lg flex items-center px-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="relative w-full h-full pt-7 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616627561950-9f746e330187?q=80&w=2187&auto=format&fit=crop"
                  alt="HSK 365 Master App Demo"
                  width={600}
                  height={400}
                  className="object-cover rounded-b-lg"
                />

                {/* Animated app features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 right-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">10K+ Downloads</span>
                  </div>
                </motion.div>
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
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  </div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gap-2" asChild>
                  <Link href="/learn">
                    Khám phá ngay
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
