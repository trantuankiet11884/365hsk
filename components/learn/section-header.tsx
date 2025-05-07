import { motion } from "framer-motion";
import Image from "next/image";

type SectionHeaderProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function SectionHeader({
  title,
  description,
  icon,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12 relative"
    >
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/5 blur-lg"></div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-primary/5 blur-lg"></div>

      {/* Background brush stroke */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none flex items-center justify-center">
        <Image
          src="/svg/chinese-brush.svg"
          alt=""
          width={200}
          height={80}
          className="text-primary"
        />
      </div>

      {/* Icon if provided */}
      {icon && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </motion.div>
      )}

      <h2 className="text-3xl font-bold mb-4 relative inline-block">
        {/* Decorative underline */}
        <span className="absolute -bottom-2 left-0 right-0 h-2 bg-primary/10 -z-10 transform skew-x-12"></span>
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>

      {/* Decorative dot pattern */}
      <div className="flex justify-center mt-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            className="w-2 h-2 rounded-full bg-primary mx-1"
          ></motion.div>
        ))}
      </div>
    </motion.div>
  );
}
