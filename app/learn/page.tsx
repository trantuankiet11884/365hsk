"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Globe,
  Headphones,
  PenTool,
  Smartphone,
} from "lucide-react";
import HeroSection from "@/components/learn/hero-section";
import VocabularyCard from "@/components/learn/vocabulary-card";
import SectionHeader from "@/components/learn/section-header";
import { dailyExercises, learningPaths, learningTips } from "@/lib/data";
import LearningPathCard from "@/components/learn/learning-path-card";
import DailyExerciseCard from "@/components/learn/daily-exercise-card";
import VocabularyByTopic from "@/components/learn/vocabulary-by-topic";
import GrammarCard from "@/components/learn/grammar-card";
import LearningResourceCard from "@/components/learn/learning-resource-card";
import LearningTipCard from "@/components/learn/learning-tip-card";
import CTASection from "@/components/learn/cta-section";

const grammarRules = [
  {
    title: "Cấu trúc câu cơ bản",
    description:
      "Tiếng Trung có cấu trúc câu Chủ - Vị - Tân tương tự như tiếng Việt.",
    example: "我喜欢学习中文。(Wǒ xǐhuān xuéxí zhōngwén.)",
    translation: "Tôi thích học tiếng Trung.",
    explanation: "我 (tôi) + 喜欢 (thích) + 学习中文 (học tiếng Trung)",
  },
  {
    title: "Câu hỏi có/không",
    description:
      "Thêm 吗 (ma) vào cuối câu để biến câu khẳng định thành câu hỏi có/không.",
    example: "你是学生吗？(Nǐ shì xuéshēng ma?)",
    translation: "Bạn có phải là học sinh không?",
    explanation: "你是学生 (Bạn là học sinh) + 吗 (không?)",
  },
  {
    title: "Câu hỏi với từ để hỏi",
    description:
      "Sử dụng từ để hỏi như 什么 (shénme - cái gì), 谁 (shuí - ai), 哪里 (nǎlǐ - đâu).",
    example: "你叫什么名字？(Nǐ jiào shénme míngzì?)",
    translation: "Bạn tên là gì?",
    explanation: "你叫 (bạn tên) + 什么 (gì) + 名字 (tên)",
  },
  {
    title: "Thời gian trong tiếng Trung",
    description:
      "Thời gian trong tiếng Trung được sắp xếp từ lớn đến nhỏ: năm, tháng, ngày, giờ, phút.",
    example:
      "2023年5月10日下午3点30分 (2023 nián 5 yuè 10 rì xiàwǔ 3 diǎn 30 fēn)",
    translation: "3:30 chiều ngày 10 tháng 5 năm 2023",
    explanation:
      "年 (năm) → 月 (tháng) → 日 (ngày) → 下午 (chiều) → 点 (giờ) → 分 (phút)",
  },
];

const learningResources = [
  {
    title: "Sách giáo trình HSK",
    description: "Bộ sách giáo trình chuẩn cho kỳ thi HSK từ cấp độ 1 đến 6.",
    icon: <BookMarked className="h-10 w-10 text-primary" />,
    items: [
      "HSK Standard Course 1",
      "HSK Standard Course 2",
      "HSK Standard Course 3",
      "HSK Standard Course 4",
    ],
  },
  {
    title: "Ứng dụng học tập",
    description:
      "Các ứng dụng hỗ trợ học tiếng Trung hiệu quả trên điện thoại và máy tính.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    items: [
      "HSK 365 Master",
      "Pleco Dictionary",
      "HelloChinese",
      "ChineseSkill",
    ],
  },
  {
    title: "Tài liệu nghe",
    description:
      "Các tài liệu nghe giúp cải thiện kỹ năng nghe hiểu tiếng Trung.",
    icon: <Headphones className="h-10 w-10 text-primary" />,
    items: [
      "HSK Listening Materials",
      "Chinese Pod",
      "ChinesePod101",
      "Slow Chinese",
    ],
  },
  {
    title: "Tài liệu đọc",
    description:
      "Các tài liệu đọc phù hợp với nhiều trình độ để cải thiện kỹ năng đọc hiểu.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    items: [
      "Graded Chinese Readers",
      "Chinese Breeze",
      "DuChinese",
      "The Chairman's Bao",
    ],
  },
  {
    title: "Tài liệu viết",
    description:
      "Các tài liệu hướng dẫn viết chữ Hán và cải thiện kỹ năng viết.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    items: [
      "HSK Writing Practice",
      "Chinese Writing Master",
      "Hanzi Grids",
      "Skritter",
    ],
  },
  {
    title: "Tài liệu văn hóa",
    description:
      "Các tài liệu giới thiệu về văn hóa Trung Quốc, giúp hiểu sâu hơn về ngôn ngữ.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    items: [
      "Chinese Culture Reader",
      "Chinese Festivals",
      "Chinese Customs",
      "Chinese History",
    ],
  },
];

export default function LearnPage() {
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
    <div className="pt-16">
      <HeroSection />
      <VocabularyCard />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Lộ trình học tập"
            description="Khám phá các lộ trình học tiếng Trung được thiết kế phù hợp với mục tiêu và trình độ của bạn."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {learningPaths.map((path) => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-primary/5 section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Bài tập luyện hàng ngày"
            description="Luyện tập mỗi ngày với các bài tập được thiết kế để cải thiện kỹ năng nghe, nói, đọc và viết."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {dailyExercises.map((exercise) => (
              <DailyExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </motion.div>
        </div>
      </section>

      <VocabularyByTopic />

      <section className="bg-gray-50 dark:bg-gray-900 section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Ngữ pháp cơ bản"
            description="Học các cấu trúc ngữ pháp cơ bản để xây dựng nền tảng vững chắc cho việc học tiếng Trung."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {grammarRules.map((grammar, index) => (
              <GrammarCard key={index} grammar={grammar} />
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2">
              Xem thêm ngữ pháp
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Tài liệu học tập"
            description="Khám phá các tài liệu học tập phong phú để nâng cao kỹ năng tiếng Trung của bạn."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {learningResources.map((resource, index) => (
              <LearningResourceCard key={index} resource={resource} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-primary/5 section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Mẹo học tiếng Trung hiệu quả"
            description="Khám phá các mẹo và phương pháp học tiếng Trung hiệu quả từ các chuyên gia ngôn ngữ."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {learningTips.map((tip, index) => (
              <LearningTipCard key={index} tip={tip} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
