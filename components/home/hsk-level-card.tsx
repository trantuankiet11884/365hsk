import { motion } from "framer-motion";
import { Star, Book, BarChart3 } from "lucide-react";

type HSKLevel = {
  level: string;
  words: string;
  description: string;
  topics: string[];
};

export default function HSKLevelCard({
  level,
  index,
}: {
  level: HSKLevel;
  index: number;
}) {
  // Create an array with the number of stars based on the HSK level number
  const levelNumber = parseInt(level.level.replace("HSK ", ""));
  const stars = Array.from({ length: levelNumber }, (_, i) => i);

  // Generate a different gradient based on the level
  const gradients = [
    "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20",
    "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
    "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
    "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
  ];

  const cardGradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-xl shadow-sm border card-hover relative overflow-hidden ${cardGradient}`}
    >
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary">{level.level}</h3>
          <div className="flex mt-1">
            {stars.map((i) => (
              <Star
                key={i}
                className="h-3 w-3 text-primary fill-primary"
                style={{ marginRight: "2px" }}
              />
            ))}
          </div>
        </div>
        <div className="px-3 py-1.5 bg-primary/10 rounded-full text-xs font-medium flex items-center gap-1.5">
          <Book className="h-3 w-3 text-primary" />
          {level.words} từ vựng
        </div>
      </div>

      <p className="text-muted-foreground mb-4 relative z-10">
        {level.description}
      </p>

      <div className="space-y-3 relative z-10">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Chủ đề bao gồm:</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {level.topics.map((topic, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="inline-block px-2 py-1 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-full text-xs shadow-sm"
            >
              {topic}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 relative z-10">
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>Mức độ khó</span>
          <span>{levelNumber}/6</span>
        </div>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${(levelNumber / 6) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-full bg-primary rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
