import { motion } from "framer-motion";
import Image from "next/image";

type LearningTip = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function LearningTipCard({
  tip,
  index = 0,
}: {
  tip: LearningTip;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none">
        <Image
          src="/svg/chinese-calligraphy.svg"
          alt=""
          fill
          className="object-cover text-primary"
        />
      </div>

      {/* Top corner decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-8 h-32 bg-primary/10"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="mb-4 p-3 inline-flex rounded-lg bg-primary/10"
        >
          {tip.icon}
        </motion.div>

        <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
        <p className="text-muted-foreground">{tip.description}</p>

        {/* Bottom decoration line */}
        <div className="mt-4 pt-1">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-primary/20 rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
