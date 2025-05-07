import { motion } from "framer-motion";
import { ChevronRight, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { faqs } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function FAQSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 section-padding relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      {/* Floating question marks */}
      <div className="absolute top-[20%] left-[5%] text-primary/10 animate-float-slow">
        <Image
          src="/svg/question-mark.svg"
          alt="Question Mark"
          width={60}
          height={60}
          className="text-current"
        />
      </div>
      <div
        className="absolute bottom-[30%] right-[10%] text-primary/10 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <Image
          src="/svg/question-mark.svg"
          alt="Question Mark"
          width={40}
          height={40}
          className="text-current"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <MessageCircleQuestion className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-lg text-muted-foreground">
            Tìm hiểu thêm về HSK 365 Master và cách chúng tôi có thể giúp bạn
            học tiếng Trung hiệu quả.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border overflow-hidden transform transition-all duration-300 hover:shadow-md"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <HelpCircle className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-medium text-lg">{faq.question}</h3>
                    </div>
                    <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-300 group-open:rotate-90">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 pl-[70px]">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact us link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground">
              Không tìm thấy câu trả lời bạn cần?{" "}
              <Link
                href="/contact"
                className="text-primary font-medium inline-flex items-center hover:underline"
              >
                Liên hệ với chúng tôi <ChevronRight className="h-4 w-4" />
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
