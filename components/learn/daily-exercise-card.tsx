import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  index = 0,
}: {
  exercise: DailyExercise;
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
      <Card className="overflow-hidden card-hover h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative border">
        {/* Exercise icon decoration */}

        <CardContent className="p-6 relative">
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
            <Link href={`/vocabulary`}>
              <Button variant="outline" size="sm" className="group">
                Bắt đầu
                <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* Decorative progress line */}
          <div className="mt-4 pt-1">
            <div className="h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full bg-primary/50 rounded-full"
              ></motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
