import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { faqs } from "@/lib/data";

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
    <section className="bg-gray-50 dark:bg-gray-900 section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
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
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
