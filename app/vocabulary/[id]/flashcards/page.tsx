import type { Metadata } from "next";
import VocabularyFlashcards from "@/components/vocabulary/vocabulary-flash-cards";

interface VocabularyFlashcardsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: VocabularyFlashcardsPageProps): Promise<Metadata> {
  return {
    title: `Flashcards từ vựng | HSK 365 Master`,
    description:
      "Học từ vựng tiếng Trung với flashcards tương tác tại HSK 365 Master.",
  };
}

export default function VocabularyFlashcardsPage({
  params,
}: VocabularyFlashcardsPageProps) {
  return (
    <div className="pt-16">
      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <VocabularyFlashcards id={params.id} />
          </div>
        </div>
      </section>
    </div>
  );
}
