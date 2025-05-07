import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type GrammarRule = {
  title: string;
  description: string;
  example: string;
  translation: string;
  explanation: string;
};

export default function GrammarCard({ grammar }: { grammar: GrammarRule }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden card-hover h-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3">{grammar.title}</h3>
          <p className="text-muted-foreground mb-4">{grammar.description}</p>
          <div className="bg-primary/5 p-4 rounded-lg mb-4">
            <p className="font-medium mb-1">Ví dụ:</p>
            <p className="text-lg mb-1">{grammar.example}</p>
            <p className="text-muted-foreground">{grammar.translation}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-medium mb-1">Giải thích:</p>
            <p className="text-muted-foreground">{grammar.explanation}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
