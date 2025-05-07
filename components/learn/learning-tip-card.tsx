import { motion } from "framer-motion";

type LearningTip = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function LearningTipCard({ tip }: { tip: LearningTip }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
    >
      <div className="mb-4">{tip.icon}</div>
      <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
      <p className="text-muted-foreground">{tip.description}</p>
    </motion.div>
  );
}
