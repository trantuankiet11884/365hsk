import { motion } from "framer-motion";

type LearningMethod = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function LearningMethodCard({
  method,
}: {
  method: LearningMethod;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
    >
      <div className="mb-4">{method.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
      <p className="text-muted-foreground">{method.description}</p>
    </motion.div>
  );
}
