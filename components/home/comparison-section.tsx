import { motion } from "framer-motion";
import { comparisons } from "@/lib/data";
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";

export default function ComparisonSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      过渡: { duration: 0.6 },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* Floating decorative Chinese characters */}
      <div className="absolute left-[5%] top-1/4 text-7xl font-bold text-primary/10 transform rotate-12 animate-float-slow">
        比
      </div>
      <div className="absolute right-[5%] bottom-1/4 text-7xl font-bold text-primary/10 transform -rotate-12 animate-float">
        较
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            So sánh phương pháp học
          </h2>
          <p className="text-lg text-muted-foreground">
            Khám phá sự khác biệt giữa phương pháp học của HSK 365 Master và
            phương pháp học truyền thống.
          </p>

          {/* Visual comparison illustration */}
          <div className="relative mt-8 h-20 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/svg/circle-plus.svg"
                  alt="Circle Plus"
                  width={40}
                  height={40}
                  className="text-current"
                />
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="h-1 bg-gradient-to-r from-primary/20 to-primary"
              ></motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                  <Image
                    src="/svg/circle-plus.svg"
                    alt="Circle Plus"
                    width={48}
                    height={48}
                    className="text-white"
                  />
                </div>
                <div className="absolute -right-1 -top-1 bg-white dark:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold">+</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="h-1 bg-gradient-to-r from-primary to-primary/20"
              ></motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
                className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/svg/list-icon.svg"
                  alt="List Icon"
                  width={40}
                  height={40}
                  className="text-current"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-100 dark:bg-gray-700 border-b">
                    Tính năng
                  </th>
                  <th className="p-4 text-left bg-primary/10 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Image
                          src="/svg/check-icon.svg"
                          alt="Check"
                          width={14}
                          height={14}
                          className="text-white"
                        />
                      </div>
                      <span>HSK 365 Master</span>
                    </div>
                  </th>
                  <th className="p-4 text-left bg-gray-100 dark:bg-gray-700 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                        <Image
                          src="/svg/chevron-right.svg"
                          alt="Chevron Right"
                          width={14}
                          height={14}
                          className="text-current"
                        />
                      </div>
                      <span>Phương pháp truyền thống</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="p-4 border-b font-medium">
                      {comparison.feature}
                    </td>
                    <td className="p-4 border-b bg-primary/5">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{comparison.hsk365}</span>
                      </div>
                    </td>
                    <td className="p-4 border-b">
                      <div className="flex items-center gap-2">
                        {comparison.traditional.includes("Không") ||
                        comparison.traditional.includes("Hạn chế") ? (
                          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span>{comparison.traditional}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
