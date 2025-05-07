import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor?: string;
};

export default function SectionHeader({
  title,
  description,
  icon,
  accentColor = "primary",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16 relative"
    >
      {/* Decorative underline */}
      <div className="absolute left-1/2 -bottom-6 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-1/2"></div>

      {/* Decorative background shapes */}
      <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-primary/5 blur-xl"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-primary/5 blur-xl"></div>

      {/* Icon if provided */}
      {icon && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div
            className={`w-16 h-16 bg-${accentColor}/10 rounded-full flex items-center justify-center`}
          >
            {icon}
          </div>
        </motion.div>
      )}

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Decorative highlight for title */}
        <span className="absolute inset-x-0 bottom-2 h-3 bg-primary/10 -z-10 transform skew-x-12"></span>
        {title}
      </motion.h2>

      <motion.p
        className="text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {description}
      </motion.p>

      {/* Decorative dots */}
      <div className="flex justify-center mt-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-2 h-2 rounded-full bg-primary mx-1"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="w-2 h-2 rounded-full bg-primary mx-1"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="w-2 h-2 rounded-full bg-primary mx-1"
        ></motion.div>
      </div>
    </motion.div>
  );
}
