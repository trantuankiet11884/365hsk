import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

type LearningPath = {
  id: number;
  title: string;
  description: string;
  level: string;
  topics: string[];
  icon: React.ReactNode;
  image: string;
};

export default function LearningPathCard({ path }: { path: LearningPath }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden card-hover h-full">
        <CardContent className="p-6">
          <div className="mb-4">{path.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
          <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
            {path.level}
          </div>
          <p className="text-muted-foreground mb-4">{path.description}</p>
          <div className="space-y-2 mb-4">
            <h4 className="font-medium text-sm">Chủ đề bao gồm:</h4>
            <ul className="space-y-1">
              {path.topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full">Xem lộ trình</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
