import type { Metadata } from "next";
import VocabularyQuiz from "@/components/vocabulary/vocabulary-quiz";

interface VocabularyQuizPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: VocabularyQuizPageProps): Promise<Metadata> {
  return {
    title: `Kiểm tra từ vựng | HSK 365 Master`,
    description:
      "Kiểm tra kiến thức từ vựng tiếng Trung của bạn với các bài kiểm tra tương tác tại HSK 365 Master.",
  };
}

export default function VocabularyQuizPage({
  params,
}: VocabularyQuizPageProps) {
  return (
    <div className="pt-16">
      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <VocabularyQuiz id={params.id} />
          </div>
        </div>
      </section>
    </div>
  );
}
