import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

type LearningResource = {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
};

export default function LearningResourceCard({
  resource,
  index = 0,
}: {
  resource: LearningResource;
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
    >
      <Card className="overflow-hidden card-hover h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image
            src="/svg/chinese-calligraphy.svg"
            alt=""
            fill
            className="object-cover text-primary"
          />
        </div>

        {/* Rounded corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-8 h-32 bg-primary/10"></div>
        </div>

        <CardContent className="p-6 relative z-10">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="mb-4 p-3 inline-flex rounded-lg bg-primary/10"
          >
            {resource.icon}
          </motion.div>

          <h3 className="text-xl font-semibold mb-2 relative inline-block">
            {resource.title}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-1 left-0 h-1 bg-primary/20 rounded-full w-full"
            ></motion.div>
          </h3>

          <p className="text-muted-foreground mb-4">{resource.description}</p>

          <ul className="space-y-2">
            {resource.items.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Decorative element */}
          <div className="mt-6 flex justify-end">
            <div className="flex space-x-1">
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="w-2 h-2 rounded-full bg-primary/50"
                ></motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
