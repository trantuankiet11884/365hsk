import { motion } from "framer-motion";
import Image from "next/image";

type LearningMethod = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
};

export default function LearningMethodCard({
  method,
  index = 0,
}: {
  method: LearningMethod;
  index?: number;
}) {
  // Define background patterns for the cards
  const patterns = [
    <Image
      key="wave"
      src="/svg/pattern-wave.svg"
      alt="Wave Pattern"
      width={100}
      height={100}
      className="absolute bottom-0 right-0 h-24 w-24 text-gray-200 dark:text-gray-700 opacity-20"
    />,
    <Image
      key="dots"
      src="/svg/pattern-dots.svg"
      alt="Dots Pattern"
      width={100}
      height={100}
      className="absolute top-0 left-0 h-24 w-24 text-gray-200 dark:text-gray-700 opacity-20"
    />,
    <Image
      key="zigzag"
      src="/svg/pattern-zigzag.svg"
      alt="Zigzag Pattern"
      width={100}
      height={100}
      className="absolute bottom-0 left-0 h-24 w-24 text-gray-200 dark:text-gray-700 opacity-20"
    />,
    <Image
      key="squares"
      src="/svg/pattern-squares.svg"
      alt="Squares Pattern"
      width={100}
      height={100}
      className="absolute top-0 right-0 h-24 w-24 text-gray-200 dark:text-gray-700 opacity-20"
    />,
  ];

  // Choose pattern based on index
  const pattern = patterns[index % patterns.length];

  // Determine background color class based on method color or use default
  const bgColorClass = method.color
    ? `bg-${method.color}-50 dark:bg-${method.color}-900/10`
    : `bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900`;

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
      className={`p-6 rounded-xl shadow-sm border relative overflow-hidden ${bgColorClass}`}
    >
      {/* Background pattern */}
      {pattern}

      {/* Decorative glow effect */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>

      <div className="relative z-10">
        <motion.div
          className="mb-4 p-3 inline-flex rounded-lg bg-primary/10"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {method.icon}
        </motion.div>

        <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
        <p className="text-muted-foreground">{method.description}</p>

        {/* Visual indicator for progress/steps */}
        <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center">
          <div className="flex space-x-1">
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + step * 0.1 }}
                className="w-2 h-2 rounded-full bg-primary/70"
              ></motion.div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground ml-2">
            Học theo bước
          </div>
        </div>
      </div>
    </motion.div>
  );
}
