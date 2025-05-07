"use client";

import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const vocabularyByTopic = {
  daily: [
    {
      chinese: "你好",
      pinyin: "nǐ hǎo",
      vietnamese: "Xin chào",
      example: "你好，我叫小明。(Xin chào, tôi tên là Tiểu Minh.)",
    },
    {
      chinese: "谢谢",
      pinyin: "xiè xiè",
      vietnamese: "Cảm ơn",
      example: "谢谢你的帮助。(Cảm ơn sự giúp đỡ của bạn.)",
    },
    {
      chinese: "对不起",
      pinyin: "duì bù qǐ",
      vietnamese: "Xin lỗi",
      example: "对不起，我迟到了。(Xin lỗi, tôi đến muộn.)",
    },
    {
      chinese: "没关系",
      pinyin: "méi guān xì",
      vietnamese: "Không sao",
      example: "没关系，我理解。(Không sao, tôi hiểu.)",
    },
    {
      chinese: "请问",
      pinyin: "qǐng wèn",
      vietnamese: "Xin hỏi",
      example: "请问，银行在哪里？(Xin hỏi, ngân hàng ở đâu?)",
    },
    {
      chinese: "再见",
      pinyin: "zài jiàn",
      vietnamese: "Tạm biệt",
      example: "明天见，再见！(Hẹn gặp lại ngày mai, tạm biệt!)",
    },
    {
      chinese: "我爱你",
      pinyin: "wǒ ài nǐ",
      vietnamese: "Tôi yêu bạn",
      example: "我爱你，我的家人。(Tôi yêu các bạn, gia đình của tôi.)",
    },
    {
      chinese: "多少钱",
      pinyin: "duō shǎo qián",
      vietnamese: "Bao nhiêu tiền",
      example: "这个苹果多少钱？(Quả táo này bao nhiêu tiền?)",
    },
  ],
  business: [
    {
      chinese: "公司",
      pinyin: "gōng sī",
      vietnamese: "Công ty",
      example:
        "我在一家科技公司工作。(Tôi làm việc tại một công ty công nghệ.)",
    },
    {
      chinese: "会议",
      pinyin: "huì yì",
      vietnamese: "Cuộc họp",
      example:
        "明天我们有一个重要的会议。(Ngày mai chúng ta có một cuộc họp quan trọng.)",
    },
    {
      chinese: "合同",
      pinyin: "hé tong",
      vietnamese: "Hợp đồng",
      example: "请签署这份合同。(Vui lòng ký hợp đồng này.)",
    },
    {
      chinese: "客户",
      pinyin: "kè hù",
      vietnamese: "Khách hàng",
      example: "我们有很多国际客户。(Chúng tôi có nhiều khách hàng quốc tế.)",
    },
    {
      chinese: "市场",
      pinyin: "shì chǎng",
      vietnamese: "Thị trường",
      example: "中国市场很大。(Thị trường Trung Quốc rất lớn.)",
    },
    {
      chinese: "投资",
      pinyin: "tóu zī",
      vietnamese: "Đầu tư",
      example: "我们需要更多的投资。(Chúng tôi cần nhiều đầu tư hơn.)",
    },
    {
      chinese: "利润",
      pinyin: "lì rùn",
      vietnamese: "Lợi nhuận",
      example: "今年的利润增加了。(Lợi nhuận năm nay đã tăng.)",
    },
    {
      chinese: "谈判",
      pinyin: "tán pàn",
      vietnamese: "Đàm phán",
      example: "我们正在与他们谈判。(Chúng tôi đang đàm phán với họ.)",
    },
  ],
  travel: [
    {
      chinese: "机场",
      pinyin: "jī chǎng",
      vietnamese: "Sân bay",
      example:
        "我们需要提前两个小时到机场。(Chúng ta cần đến sân bay trước hai giờ.)",
    },
    {
      chinese: "护照",
      pinyin: "hù zhào",
      vietnamese: "Hộ chiếu",
      example: "请出示您的护照。(Vui lòng xuất trình hộ chiếu của bạn.)",
    },
    {
      chinese: "酒店",
      pinyin: "jiǔ diàn",
      vietnamese: "Khách sạn",
      example: "这家酒店很舒适。(Khách sạn này rất thoải mái.)",
    },
    {
      chinese: "景点",
      pinyin: "jǐng diǎn",
      vietnamese: "Điểm du lịch",
      example:
        "北京有很多著名的景点。(Bắc Kinh có nhiều điểm du lịch nổi tiếng.)",
    },
    {
      chinese: "地图",
      pinyin: "dì tú",
      vietnamese: "Bản đồ",
      example:
        "你可以在地图上找到这个地方。(Bạn có thể tìm thấy địa điểm này trên bản đồ.)",
    },
    {
      chinese: "出租车",
      pinyin: "chū zū chē",
      vietnamese: "Taxi",
      example: "我们可以打出租车去那里。(Chúng ta có thể đi taxi đến đó.)",
    },
    {
      chinese: "票",
      pinyin: "piào",
      vietnamese: "Vé",
      example: "我已经买了电影票。(Tôi đã mua vé xem phim.)",
    },
    {
      chinese: "行李",
      pinyin: "xíng lǐ",
      vietnamese: "Hành lý",
      example: "我的行李很重。(Hành lý của tôi rất nặng.)",
    },
  ],
  food: [
    {
      chinese: "饭",
      pinyin: "fàn",
      vietnamese: "Cơm",
      example: "我想吃米饭。(Tôi muốn ăn cơm.)",
    },
    {
      chinese: "面条",
      pinyin: "miàn tiáo",
      vietnamese: "Mì",
      example: "这家餐厅的面条很好吃。(Mì ở nhà hàng này rất ngon.)",
    },
    {
      chinese: "水果",
      pinyin: "shuǐ guǒ",
      vietnamese: "Trái cây",
      example: "我喜欢吃水果。(Tôi thích ăn trái cây.)",
    },
    {
      chinese: "蔬菜",
      pinyin: "shū cài",
      vietnamese: "Rau",
      example: "蔬菜对健康很重要。(Rau rất quan trọng đối với sức khỏe.)",
    },
    {
      chinese: "牛肉",
      pinyin: "niú ròu",
      vietnamese: "Thịt bò",
      example: "我想点一份牛肉面。(Tôi muốn gọi một phần mì bò.)",
    },
    {
      chinese: "鸡肉",
      pinyin: "jī ròu",
      vietnamese: "Thịt gà",
      example: "这是鸡肉炒饭。(Đây là cơm chiên gà.)",
    },
    {
      chinese: "茶",
      pinyin: "chá",
      vietnamese: "Trà",
      example: "中国人喜欢喝茶。(Người Trung Quốc thích uống trà.)",
    },
    {
      chinese: "咖啡",
      pinyin: "kā fēi",
      vietnamese: "Cà phê",
      example: "我每天早上喝咖啡。(Tôi uống cà phê mỗi sáng.)",
    },
  ],
};

export default function VocabularyByTopic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = (audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Từ vựng theo chủ đề</h2>
          <p className="text-muted-foreground">
            Học từ vựng theo chủ đề giúp bạn dễ dàng ghi nhớ và sử dụng trong
            các tình huống thực tế.
          </p>
        </motion.div>

        <Tabs defaultValue="daily" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="daily">Giao tiếp hàng ngày</TabsTrigger>
              <TabsTrigger value="business">Kinh doanh</TabsTrigger>
              <TabsTrigger value="travel">Du lịch</TabsTrigger>
              <TabsTrigger value="food">Ẩm thực</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(vocabularyByTopic).map(([key, words]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {words.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="overflow-hidden card-hover h-full">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">
                              {word.chinese}
                            </h3>
                            <p className="text-primary">{word.pinyin}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              playAudio(
                                `https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/${word.pinyin
                                  .replace(/\s/g, "_")
                                  .replace(
                                    /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/g,
                                    ""
                                  )}.mp3`
                              )
                            }
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Volume2 className="h-5 w-5" />
                            <span className="sr-only">Play pronunciation</span>
                          </Button>
                        </div>
                        <div className="h-px bg-gray-200 dark:bg-gray-700 w-full mb-4"></div>
                        <p className="text-lg mb-4">{word.vietnamese}</p>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-muted-foreground">
                          <p>{word.example}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <audio ref={audioRef} className="hidden">
          <source src="" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}
