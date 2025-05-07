import { motion } from "framer-motion";
import Image from "next/image";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
};

export default function FeatureCard({
  feature,
  index = 0,
}: {
  feature: Feature;
  index?: number;
}) {
  // Define a set of background patterns
  const patterns = [
    <Image
      key="pattern1"
      src="/svg/pattern-lines.svg"
      alt="Lines Pattern"
      width={100}
      height={100}
      className="absolute top-0 right-0 h-20 w-20 text-gray-200 dark:text-gray-700 opacity-30"
    />,
    <Image
      key="pattern2"
      src="/svg/pattern-circles.svg"
      alt="Circles Pattern"
      width={100}
      height={100}
      className="absolute bottom-0 right-0 h-16 w-16 text-gray-200 dark:text-gray-700 opacity-30"
    />,
    <Image
      key="pattern3"
      src="/svg/pattern-square.svg"
      alt="Square Pattern"
      width={100}
      height={100}
      className="absolute top-0 left-0 h-16 w-16 text-gray-200 dark:text-gray-700 opacity-30"
    />,
    <Image
      key="pattern4"
      src="/svg/pattern-cross.svg"
      alt="Cross Pattern"
      width={100}
      height={100}
      className="absolute bottom-0 left-0 h-20 w-20 text-gray-200 dark:text-gray-700 opacity-30"
    />,
  ];

  // Get a pattern based on the index
  const pattern = patterns[index % patterns.length];

  // Highlight background based on feature color or default to a subtle gradient
  const highlightClass = feature.color
    ? `bg-${feature.color}-50 dark:bg-${feature.color}-900/10`
    : "bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900";

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
      className={`p-6 rounded-xl shadow-sm border card-hover relative overflow-hidden ${highlightClass}`}
    >
      {/* Decorative pattern */}
      {pattern}

      <div className="relative z-10">
        <motion.div
          className="mb-4 p-3 inline-flex rounded-lg bg-primary/10"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {feature.icon}
        </motion.div>

        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-24 bg-primary/10"></div>
      </div>
    </motion.div>
  );
}
