import type { Metadata } from "next";
import VocabularyStats from "@/components/vocabulary/vocabulary-stats";

interface VocabularyStatsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: VocabularyStatsPageProps): Promise<Metadata> {
  return {
    title: `Thống kê học tập | HSK 365 Master`,
    description:
      "Theo dõi tiến độ học tập và thống kê từ vựng tiếng Trung của bạn tại HSK 365 Master.",
  };
}

export default function VocabularyStatsPage({
  params,
}: VocabularyStatsPageProps) {
  return (
    <div className="pt-16">
      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <VocabularyStats id={params.id} />
          </div>
        </div>
      </section>
    </div>
  );
}
