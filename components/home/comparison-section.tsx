import { motion } from "framer-motion";
import { comparisons } from "@/lib/data";

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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            className="text',
    'text-3xl md:text-4xl font-bold mb-4"
          >
            So sánh phương pháp học
          </h2>
          <p className="text-lg text-muted-foreground">
            Khám phá sự khác biệt giữa phương pháp học của HSK 365 Master và
            phương pháp học truyền thống.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-100 dark:bg-gray-800 border">
                    Tính năng
                  </th>
                  <th className="p-4 text-left bg-primary/10 border">
                    HSK 365 Master
                  </th>
                  <th className="p-4 text-left bg-gray-100 dark:bg-gray-800 border">
                    Phương pháp truyền thống
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr key={index}>
                    <td className="p-4 border font-medium">
                      {comparison.feature}
                    </td>
                    <td className="p-4 border bg-primary/5">
                      {comparison.hsk365}
                    </td>
                    <td className="p-4 border">{comparison.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
