import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

export default function StatsSection() {
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

  // Array of icons to display with stats
  const statIcons = [
    <Users key="users" className="h-6 w-6 text-blue-500" />,
    <BookOpen key="book" className="h-6 w-6 text-green-500" />,
    <TrendingUp key="trending" className="h-6 w-6 text-orange-500" />,
    <Award key="award" className="h-6 w-6 text-purple-500" />,
  ];

  return (
    <section className="bg-primary/5 section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/10 dark:from-white/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/10 dark:from-white/5 to-transparent"></div>

      <div className="absolute left-0 top-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>

      {/* Decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="10,10"
          className="text-primary/10"
        />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="10,10"
          className="text-primary/10"
        />
      </svg>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat: any, index: number) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="text-center relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border shadow-sm"
            >
              {/* Decorative glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent"></div>

              {/* Icon circle */}
              <div className="flex justify-center mb-3">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1,
                  }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2"
                >
                  {statIcons[index % statIcons.length]}
                </motion.div>
              </div>

              <motion.h3
                className="text-3xl md:text-4xl font-bold text-primary relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {stat.value}
                </motion.span>
              </motion.h3>

              <motion.p
                className="text-muted-foreground mt-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="h-0.5 bg-primary/30 mt-2 mx-auto rounded-full"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
