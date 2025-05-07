import type { Metadata } from "next";
import VocabularyDetail from "@/components/vocabulary/vocabulary-detail";

interface VocabularyDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: VocabularyDetailPageProps): Promise<Metadata> {
  return {
    title: `Chi tiết bài học từ vựng | HSK 365 Master`,
    description:
      "Học từ vựng tiếng Trung với phát âm chuẩn và ví dụ câu tại HSK 365 Master.",
  };
}

export default function VocabularyDetailPage({
  params,
}: VocabularyDetailPageProps) {
  return (
    <div className="pt-16">
      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <VocabularyDetail id={params.id} />
          </div>
        </div>
      </section>
    </div>
  );
}
