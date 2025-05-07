import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-[50vh] flex items-center section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Học tiếng Trung cùng HSK 365 Master
          </h1>
          <p className="text-lg text-muted-foreground">
            Khám phá các bài học, từ vựng và tài liệu học tập giúp bạn chinh
            phục tiếng Trung một cách hiệu quả.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
