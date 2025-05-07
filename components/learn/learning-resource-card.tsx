import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

type LearningResource = {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
};

export default function LearningResourceCard({
  resource,
}: {
  resource: LearningResource;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden card-hover h-full">
        <CardContent className="p-6">
          <div className="mb-4">{resource.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
          <p className="text-muted-foreground mb-4">{resource.description}</p>
          <ul className="space-y-2">
            {resource.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
