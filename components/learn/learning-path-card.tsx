import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

type LearningPath = {
  id: number;
  title: string;
  description: string;
  level: string;
  topics: string[];
  icon: React.ReactNode;
  image: string;
};

export default function LearningPathCard({
  path,
  index = 0,
}: {
  path: LearningPath;
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
      <Card className="overflow-hidden card-hover h-full relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image
            src="/svg/learning-path-bg.svg"
            alt=""
            fill
            className="object-cover text-primary"
          />
        </div>

        {/* Cover image with overlay */}
        <div className="h-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/40 z-10"></div>
          <Image
            src={
              path.image ||
              "https://images.unsplash.com/photo-1547155023-3d2a5afa687a?w=800&auto=format&fit=crop"
            }
            alt={path.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 z-20">
            <div className="inline-block px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-primary rounded-full text-xs font-medium">
              {path.level}
            </div>
          </div>
        </div>

        <CardContent className="p-6 relative">
          <div className="absolute -top-8 right-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
            {path.icon}
          </div>

          <h3 className="text-xl font-semibold mb-4 flex items-center">
            {path.title}
          </h3>

          <p className="text-muted-foreground mb-4">{path.description}</p>

          <div className="space-y-2 mb-4">
            <h4 className="font-medium text-sm flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"></span>
              Chủ đề bao gồm:
            </h4>
            <ul className="space-y-1">
              {path.topics.map((topic, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{topic}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full group">
              Xem lộ trình
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>

          {/* Progress indicator */}
          <div className="mt-4 pt-2">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Tiến độ</span>
              <span>0%</span>
            </div>
            <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full bg-primary rounded-full"
              ></motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
