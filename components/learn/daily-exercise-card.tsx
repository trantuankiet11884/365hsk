import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

type DailyExercise = {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  type: string;
};

export default function DailyExerciseCard({
  exercise,
}: {
  exercise: DailyExercise;
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
          <div className="flex justify-between items-start mb-4">
            <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {exercise.type}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{exercise.duration}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
          <p className="text-muted-foreground mb-4">{exercise.description}</p>
          <div className="flex justify-between items-center">
            <div className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-muted-foreground rounded-full text-xs">
              {exercise.difficulty}
            </div>
            <Button variant="outline" size="sm">
              Bắt đầu
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
