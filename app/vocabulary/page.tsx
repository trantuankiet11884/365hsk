import type { Metadata } from "next";
import VocabularyList from "@/components/vocabulary/vocabulary-list";

export const metadata: Metadata = {
  title: "Học từ vựng tiếng Trung | HSK 365 Master",
  description:
    "Học từ vựng tiếng Trung hiệu quả với HSK 365 Master. Từ vựng được phân loại theo cấp độ HSK từ 1 đến 6.",
};

export default function VocabularyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[40vh] flex items-center section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Học từ vựng tiếng Trung
            </h1>
            <p className="text-lg text-muted-foreground">
              Khám phá và học từ vựng tiếng Trung theo cấp độ HSK. Phương pháp
              học hiệu quả với phát âm chuẩn và ví dụ câu.
            </p>
          </div>
        </div>
      </section>

      {/* Vocabulary List Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <VocabularyList initialLevel={1} />
          </div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="bg-primary/5 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Mẹo học từ vựng hiệu quả
            </h2>
            <p className="text-muted-foreground">
              Áp dụng các phương pháp học từ vựng hiệu quả để ghi nhớ lâu và sử
              dụng đúng ngữ cảnh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Học từ vựng theo chủ đề",
                description:
                  "Phân loại từ vựng theo chủ đề giúp bạn dễ dàng ghi nhớ và sử dụng trong các tình huống thực tế.",
              },
              {
                title: "Lặp lại có khoảng cách",
                description:
                  "Ôn tập từ vựng theo các khoảng thời gian tăng dần giúp ghi nhớ lâu hơn.",
              },
              {
                title: "Học qua ví dụ câu",
                description:
                  "Học từ vựng trong ngữ cảnh câu giúp hiểu rõ cách sử dụng và dễ nhớ hơn.",
              },
              {
                title: "Viết chữ Hán thường xuyên",
                description:
                  "Viết tay chữ Hán giúp bạn ghi nhớ tốt hơn so với chỉ đọc hoặc gõ.",
              },
              {
                title: "Liên kết với hình ảnh",
                description:
                  "Tạo liên kết giữa từ vựng với hình ảnh cụ thể giúp ghi nhớ hiệu quả hơn.",
              },
              {
                title: "Luyện tập thường xuyên",
                description:
                  "Dành 15-20 phút mỗi ngày để ôn tập từ vựng đã học và học từ mới.",
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border card-hover"
              >
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
