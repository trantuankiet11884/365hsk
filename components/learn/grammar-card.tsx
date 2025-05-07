import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

type GrammarRule = {
  title: string;
  description: string;
  example: string;
  translation: string;
  explanation: string;
};

export default function GrammarCard({
  grammar,
  index = 0,
}: {
  grammar: GrammarRule;
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
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image
            src="/svg/grammar-pattern.svg"
            alt=""
            fill
            className="object-cover text-primary"
          />
        </div>

        <CardContent className="p-6 relative z-10">
          {/* Title with decorative underline */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3 relative inline-block">
              {grammar.title}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-1 left-0 h-1 bg-primary/20 rounded-full w-full"
              ></motion.div>
            </h3>
          </div>

          <p className="text-muted-foreground mb-4">{grammar.description}</p>

          <div className="bg-primary/5 p-4 rounded-lg mb-4 border border-primary/10">
            <p className="font-medium mb-1 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Ví dụ:
            </p>
            <p className="text-lg mb-1 font-medium">{grammar.example}</p>
            <p className="text-muted-foreground">{grammar.translation}</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
            <p className="font-medium mb-1 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Giải thích:
            </p>
            <p className="text-muted-foreground">{grammar.explanation}</p>
          </div>

          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-8 h-32 bg-primary/20"></div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
