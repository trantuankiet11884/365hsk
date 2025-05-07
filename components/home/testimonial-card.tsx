import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
};

export default function TestimonialCard({
  testimonial,
  index = 0,
}: {
  testimonial: Testimonial;
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
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover relative overflow-hidden"
    >
      {/* Quote icon in the background */}
      <div className="absolute -top-1 -left-1 text-primary/5">
        <Image
          src="/svg/quote-icon.svg"
          alt="Quote"
          width={60}
          height={60}
          className="text-current"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 p-0.5">
            <div className="rounded-full overflow-hidden w-full h-full">
              <Image
                src={
                  testimonial.image ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
                alt={testimonial.name}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>

        <div className="mb-3 flex items-center">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < testimonial.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {testimonial.rating}.0/5.0
          </span>
        </div>

        <blockquote className="relative">
          <p className="text-muted-foreground italic">{testimonial.content}</p>
        </blockquote>

        {/* Decorative line at the bottom */}
        <div className="mt-4 pt-2 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            Học viên HSK 365 Master
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
          >
            <Image
              src="/svg/plus-icon.svg"
              alt="Plus"
              width={10}
              height={10}
              className="text-current"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
