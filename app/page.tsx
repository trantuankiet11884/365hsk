"use client";

import AboutAppSection from "@/components/home/about-app-section";
import ComparisonSection from "@/components/home/comparison-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";
import FeatureCard from "@/components/home/feature-card";
import HeroSection from "@/components/home/hero-section";
import HSKmetforminLevelCard from "@/components/home/hsk-level-card";
import LearningMethodCard from "@/components/home/learning-method-card";
import SectionHeader from "@/components/home/section-header";
import StatsSection from "@/components/home/stats-section";
import TestimonialCard from "@/components/home/testimonial-card";
import { features, hskLevels, learningMethods, testimonials } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="pt-16 overflow-x-hidden">
      <HeroSection />
      <StatsSection />

      <section className="section-padding" id="features">
        <div className="container-custom">
          <SectionHeader
            title="Tại sao chọn HSK 365 Master?"
            description="Chúng tôi cung cấp phương pháp học tiếng Trung toàn diện, giúp bạn tiến bộ nhanh chóng và đạt kết quả cao trong kỳ thi HSK."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 section-padding overflow-hidden">
        <div className="container-custom">
          <SectionHeader
            title="Các cấp độ HSK"
            description="HSK (Hanyu Shuiping Kaoshi) là kỳ thi đánh giá năng lực tiếng Trung quốc tế, gồm 6 cấp độ từ cơ bản đến nâng cao."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hskLevels.map((level, index) => (
              <HSKmetforminLevelCard key={index} level={level} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Phương pháp học hiệu quả"
            description="HSK 365 Master áp dụng các phương pháp học tiên tiến, dựa trên nghiên cứu khoa học về cách não bộ ghi nhớ và học ngôn ngữ hiệu quả."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {learningMethods.map((method, index) => (
              <LearningMethodCard key={index} method={method} />
            ))}
          </motion.div>
        </div>
      </section>

      <AboutAppSection />

      <section className="section-padding" id="testimonials">
        <div className="container-custom">
          <SectionHeader
            title="Học viên nói gì về chúng tôi?"
            description="Hàng ngàn học viên đã thành công trong việc học tiếng Trung cùng HSK 365 Master."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <ComparisonSection />
      <CTASection />
    </div>
  );
}
