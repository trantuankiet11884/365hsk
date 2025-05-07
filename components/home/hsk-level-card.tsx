import { motion } from "framer-motion";

type HSKLevel = {
  level: string;
  words: string;
  description: string;
  topics: string[];
};

export default function HSKmetforminLevelCard({
  level,
  index,
}: {
  level: HSKLevel;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-primary">{level.level}</h3>
        <div className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium">
          {level.words} từ vựng
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{level.description}</p>
      <div className="space-y-2">
        <h4 className="font-medium text-sm">Chủ đề bao gồm:</h4>
        <div className="flex flex-wrap gap-2">
          {level.topics.map((topic, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
