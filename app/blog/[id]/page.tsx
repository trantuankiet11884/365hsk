"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Copy, CheckCheck, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "10 mẹo học từ vựng tiếng Trung hiệu quả",
    excerpt: "Khám phá các phương pháp học từ vựng tiếng Trung hiệu quả giúp bạn ghi nhớ lâu và sử dụng đúng ngữ cảnh.",
    category: "Học tập",
    date: "15/04/2023",
    author: "Nguyễn Văn A",
    authorRole: "Giáo viên tiếng Trung",
    readTime: "5 phút",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Giới thiệu</h2>
      <p>Học từ vựng là một trong những thách thức lớn nhất khi học tiếng Trung. Với hàng ngàn chữ Hán và cách phát âm khác biệt, việc ghi nhớ từ vựng tiếng Trung đòi hỏi phương pháp học tập hiệu quả.</p>
      
      <h2>1. Học từ vựng theo chủ đề</h2>
      <p>Thay vì học từ vựng một cách rời rạc, hãy phân loại từ vựng theo chủ đề như gia đình, thực phẩm, du lịch, công việc... Điều này giúp bạn dễ dàng liên kết các từ với nhau và nhớ lâu hơn.</p>
      
      <h2>2. Sử dụng thẻ ghi nhớ (Flashcards)</h2>
      <p>Thẻ ghi nhớ là công cụ hiệu quả để học từ vựng. Bạn có thể tạo thẻ với chữ Hán ở một mặt và phiên âm, nghĩa tiếng Việt ở mặt còn lại. Ứng dụng HSK 365 Master cung cấp tính năng thẻ ghi nhớ thông minh giúp bạn học hiệu quả.</p>
      
      <h2>3. Học từ vựng trong ngữ cảnh</h2>
      <p>Thay vì học từng từ riêng lẻ, hãy học từ vựng trong câu hoặc đoạn văn. Điều này giúp bạn hiểu cách sử dụng từ trong ngữ cảnh thực tế và dễ dàng ghi nhớ hơn.</p>
      
      <h2>4. Lặp lại có khoảng cách (Spaced Repetition)</h2>
      <p>Phương pháp lặp lại có khoảng cách là kỹ thuật học tập hiệu quả, trong đó bạn ôn lại từ vựng theo các khoảng thời gian tăng dần. Ví dụ: ôn lại sau 1 ngày, sau đó 3 ngày, 7 ngày, 14 ngày...</p>
      
      <h2>5. Liên kết từ vựng với hình ảnh</h2>
      <p>Não bộ con người xử lý hình ảnh tốt hơn văn bản. Khi học từ vựng mới, hãy liên kết từ đó với một hình ảnh cụ thể. Ví dụ, khi học từ "苹果" (píng guǒ - quả táo), hãy hình dung một quả táo đỏ trong tâm trí.</p>
      
      <h2>6. Viết chữ Hán thường xuyên</h2>
      <p>Viết tay chữ Hán giúp bạn ghi nhớ tốt hơn so với chỉ đọc hoặc gõ. Hãy dành thời gian mỗi ngày để viết các từ vựng mới bạn đã học.</p>
      
      <h2>7. Sử dụng ứng dụng học từ vựng</h2>
      <p>Có nhiều ứng dụng hỗ trợ học từ vựng tiếng Trung hiệu quả như HSK 365 Master. Các ứng dụng này thường có tính năng phát âm, giải thích nghĩa và ví dụ sử dụng từ vựng.</p>
      
      <h2>8. Học qua bài hát và phim</h2>
      <p>Học từ vựng qua bài hát và phim tiếng Trung là cách học thú vị và hiệu quả. Bạn có thể nghe và xem nhiều lần để quen với cách phát âm và sử dụng từ vựng trong ngữ cảnh thực tế.</p>
      
      <h2>9. Tạo câu chuyện liên kết</h2>
      <p>Tạo câu chuyện ngắn sử dụng các từ vựng mới bạn đã học. Điều này giúp bạn ghi nhớ từ vựng lâu hơn và hiểu cách sử dụng từ trong ngữ cảnh.</p>
      
      <h2>10. Học nhóm và thực hành giao tiếp</h2>
      <p>Học nhóm và thực hành giao tiếp với bạn bè hoặc người bản xứ giúp bạn sử dụng từ vựng trong tình huống thực tế và ghi nhớ lâu hơn.</p>
      
      <h2>Kết luận</h2>
      <p>Học từ vựng tiếng Trung đòi hỏi sự kiên nhẫn và phương pháp học tập hiệu quả. Bằng cách áp dụng các mẹo trên, bạn sẽ cải thiện đáng kể khả năng ghi nhớ và sử dụng từ vựng tiếng Trung.</p>
    `,
  },
  {
    id: "2",
    title: "Cách luyện phát âm chuẩn như người bản xứ",
    excerpt:
      "Hướng dẫn chi tiết cách luyện phát âm tiếng Trung chuẩn, từ âm thanh đến thanh điệu để nói như người bản xứ.",
    category: "Phát âm",
    date: "20/04/2023",
    author: "Trần Thị B",
    authorRole: "Chuyên gia phát âm",
    readTime: "7 phút",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Giới thiệu</h2>
      <p>Phát âm đúng là một trong những yếu tố quan trọng nhất khi học tiếng Trung. Phát âm chuẩn không chỉ giúp người khác dễ dàng hiểu bạn mà còn giúp bạn tự tin hơn khi giao tiếp.</p>
      
      <h2>Hiểu về hệ thống phát âm tiếng Trung</h2>
      <p>Tiếng Trung có hệ thống phát âm gồm âm đầu (initials), âm giữa (finals) và thanh điệu (tones). Mỗi âm tiết tiếng Trung đều có cấu trúc này.</p>
      
      <h2>1. Luyện tập âm đầu (Initials)</h2>
      <p>Âm đầu trong tiếng Trung gồm 21 phụ âm. Một số âm đầu như "zh", "ch", "sh" không có trong tiếng Việt, nên bạn cần dành thời gian luyện tập riêng cho những âm này.</p>
      
      <h2>2. Luyện tập âm giữa (Finals)</h2>
      <p>Âm giữa trong tiếng Trung gồm các nguyên âm đơn và nguyên âm kép. Một số âm giữa như "ü" cần được phát âm với môi tròn và lưỡi ở vị trí phát âm "i".</p>
      
      <h2>3. Luyện tập thanh điệu (Tones)</h2>
      <p>Tiếng Trung có 4 thanh điệu chính và 1 thanh nhẹ. Thanh điệu là yếu tố quan trọng nhất trong phát âm tiếng Trung, vì nó quyết định nghĩa của từ.</p>
      <p>- Thanh 1 (āi): Cao và bằng</p>
      <p>- Thanh 2 (ái): Đi lên</p>
      <p>- Thanh 3 (ǎi): Đi xuống rồi lên</p>
      <p>- Thanh 4 (ài): Đi xuống mạnh</p>
      <p>- Thanh nhẹ: Ngắn và nhẹ, không có dấu</p>
      
      <h2>4. Nghe và bắt chước</h2>
      <p>Nghe và bắt chước là cách hiệu quả nhất để cải thiện phát âm. Hãy nghe người bản xứ nói và cố gắng bắt chước cách họ phát âm.</p>
      
      <h2>5. Sử dụng công cụ ghi âm</h2>
      <p>Ghi âm giọng nói của bạn và so sánh với người bản xứ. Điều này giúp bạn nhận ra sự khác biệt và cải thiện phát âm của mình.</p>
      
      <h2>6. Luyện tập với người bản xứ</h2>
      <p>Nếu có thể, hãy luyện tập phát âm với người bản xứ. Họ có thể chỉ ra lỗi phát âm của bạn và hướng dẫn cách sửa.</p>
      
      <h2>7. Sử dụng ứng dụng nhận diện giọng nói</h2>
      <p>Các ứng dụng như HSK 365 Master có tính năng nhận diện giọng nói, giúp bạn kiểm tra phát âm của mình.</p>
      
      <h2>8. Luyện tập hàng ngày</h2>
      <p>Phát âm chuẩn đòi hỏi sự luyện tập thường xuyên. Hãy dành ít nhất 15 phút mỗi ngày để luyện phát âm.</p>
      
      <h2>Kết luận</h2>
      <p>Luyện phát âm tiếng Trung chuẩn đòi hỏi thời gian và sự kiên nhẫn. Bằng cách áp dụng các phương pháp trên và luyện tập thường xuyên, bạn sẽ cải thiện đáng kể phát âm của mình và nói tiếng Trung tự tin hơn.</p>
    `,
  },
  {
    id: "3",
    title: "Lộ trình học tiếng Trung từ cơ bản đến nâng cao",
    excerpt: "Lộ trình học tiếng Trung toàn diện từ cơ bản đến nâng cao, giúp bạn đạt được mục tiêu học tập của mình.",
    category: "Lộ trình",
    date: "25/04/2023",
    author: "Lê Văn C",
    authorRole: "Giám đốc học thuật",
    readTime: "10 phút",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Giới thiệu</h2>
      <p>Học tiếng Trung là một hành trình dài và đòi hỏi sự kiên nhẫn. Bài viết này sẽ giới thiệu lộ trình học tiếng Trung từ cơ bản đến nâng cao, giúp bạn đạt được mục tiêu học tập của mình.</p>
      
      <h2>Giai đoạn 1: Nền tảng cơ bản (HSK 1-2)</h2>
      <p><strong>Mục tiêu:</strong> Nắm vững phát âm, học 300-600 từ vựng cơ bản, hiểu và sử dụng các cấu trúc câu đơn giản.</p>
      
      <h3>Bước 1: Học phát âm</h3>
      <p>- Học hệ thống phiên âm Pinyin</p>
      <p>- Luyện tập phát âm các âm đầu, âm giữa</p>
      <p>- Luyện tập 4 thanh điệu cơ bản</p>
      
      <h3>Bước 2: Học từ vựng cơ bản</h3>
      <p>- Học 150 từ vựng HSK 1</p>
      <p>- Học 300 từ vựng HSK 2</p>
      <p>- Tập trung vào từ vựng giao tiếp hàng ngày</p>
      
      <h3>Bước 3: Học ngữ pháp cơ bản</h3>
      <p>- Cấu trúc câu cơ bản</p>
      <p>- Cách sử dụng từ chỉ thời gian, địa điểm</p>
      <p>- Cách đặt câu hỏi</p>
      
      <h2>Giai đoạn 2: Trung cấp (HSK 3-4)</h2>
      <p><strong>Mục tiêu:</strong> Mở rộng vốn từ vựng lên 1200-2500 từ, hiểu và sử dụng các cấu trúc câu phức tạp hơn, có thể giao tiếp trong nhiều tình huống.</p>
      
      <h3>Bước 1: Mở rộng từ vựng</h3>
      <p>- Học 600 từ vựng HSK 3</p>
      <p>- Học 1200 từ vựng HSK 4</p>
      <p>- Học từ vựng theo chủ đề</p>
      
      <h3>Bước 2: Nâng cao ngữ pháp</h3>
      <p>- Học các cấu trúc câu phức tạp</p>
      <p>- Học cách sử dụng các trợ từ ngữ pháp</p>
      <p>- Học cách diễn đạt ý kiến, quan điểm</p>
      
      <h3>Bước 3: Luyện kỹ năng giao tiếp</h3>
      <p>- Luyện nghe hiểu</p>
      <p>- Luyện nói trong các tình huống thực tế</p>
      <p>- Luyện đọc hiểu các văn bản ngắn</p>
      
      <h2>Giai đoạn 3: Nâng cao (HSK 5-6)</h2>
      <p><strong>Mục tiêu:</strong> Nắm vững 2500-5000 từ vựng, hiểu và sử dụng các cấu trúc ngữ pháp phức tạp, có thể giao tiếp trôi chảy trong hầu hết các tình huống.</p>
      
      <h3>Bước 1: Mở rộng từ vựng nâng cao</h3>
      <p>- Học 2500 từ vựng HSK 5</p>
      <p>- Học 5000 từ vựng HSK 6</p>
      <p>- Học từ vựng chuyên ngành</p>
      
      <h3>Bước 2: Nâng cao ngữ pháp</h3>
      <p>- Học các cấu trúc ngữ pháp phức tạp</p>
      <p>- Học cách sử dụng thành ngữ, tục ngữ</p>
      <p>- Học cách diễn đạt ý tưởng phức tạp</p>
      
      <h3>Bước 3: Luyện kỹ năng toàn diện</h3>
      <p>- Luyện nghe hiểu các bài giảng, tin tức</p>
      <p>- Luyện nói trôi chảy về các chủ đề phức tạp</p>
      <p>- Luyện đọc hiểu các văn bản dài</p>
      <p>- Luyện viết các bài luận, báo cáo</p>
      
      <h2>Lời khuyên cho hành trình học tiếng Trung</h2>
      <p>- Học từng bước, không vội vàng</p>
      <p>- Luyện tập đều đặn mỗi ngày</p>
      <p>- Tìm cơ hội thực hành với người bản xứ</p>
      <p>- Sử dụng các ứng dụng học tiếng Trung như HSK 365 Master</p>
      <p>- Đặt mục tiêu rõ ràng và theo dõi tiến độ</p>
      
      <h2>Kết luận</h2>
      <p>Học tiếng Trung là một hành trình dài, đòi hỏi sự kiên nhẫn và nỗ lực. Bằng cách tuân theo lộ trình học tập có hệ thống và luyện tập đều đặn, bạn sẽ đạt được mục tiêu học tiếng Trung của mình.</p>
    `,
  },
  {
    id: "4",
    title: "Kinh nghiệm thi HSK 5 đạt điểm cao",
    excerpt: "Chia sẻ kinh nghiệm và bí quyết giúp bạn chinh phục kỳ thi HSK 5 với số điểm cao nhất.",
    category: "Kỳ thi HSK",
    date: "30/04/2023",
    author: "Phạm Thị D",
    authorRole: "Giáo viên HSK",
    readTime: "8 phút",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Giới thiệu</h2>
      <p>HSK 5 là một trong những cấp độ khó của kỳ thi đánh giá năng lực tiếng Trung quốc tế. Bài viết này chia sẻ kinh nghiệm và bí quyết giúp bạn chinh phục kỳ thi HSK 5 với số điểm cao.</p>
      
      <h2>Tổng quan về kỳ thi HSK 5</h2>
      <p>HSK 5 yêu cầu thí sinh nắm vững khoảng 2500 từ vựng và các cấu trúc ngữ pháp phức tạp. Kỳ thi gồm 3 phần: Nghe hiểu (45 phút), Đọc hiểu (45 phút) và Viết (40 phút).</p>
      
      <h2>Chuẩn bị từ vựng và ngữ pháp</h2>
      <p>- Học và ôn tập 2500 từ vựng HSK 5</p>
      <p>- Nắm vững các cấu trúc ngữ pháp phức tạp</p>
      <p>- Học các từ đồng nghĩa, trái nghĩa</p>
      <p>- Học các thành ngữ, tục ngữ thông dụng</p>
      
      <h2>Luyện tập phần Nghe hiểu</h2>
      <p>- Nghe các bài nghe HSK 5 mẫu mỗi ngày</p>
      <p>- Tập trung vào việc nắm bắt ý chính của bài nghe</p>
      <p>- Luyện tập ghi chú nhanh khi nghe</p>
      <p>- Làm quen với các giọng đọc khác nhau</p>
      
      <h2>Luyện tập phần Đọc hiểu</h2>
      <p>- Đọc các bài đọc HSK 5 mẫu mỗi ngày</p>
      <p>- Luyện kỹ năng đọc lướt để nắm ý chính</p>
      <p>- Luyện kỹ năng đọc chi tiết để tìm thông tin cụ thể</p>
      <p>- Làm quen với các dạng câu hỏi thường gặp</p>
      
      <h2>Luyện tập phần Viết</h2>
      <p>- Luyện viết các bài luận ngắn theo chủ đề</p>
      <p>- Học cách sử dụng các từ nối câu, đoạn văn</p>
      <p>- Luyện viết theo cấu trúc: Mở đầu - Thân bài - Kết luận</p>
      <p>- Luyện viết trong thời gian giới hạn</p>
      
      <h2>Chiến lược làm bài thi</h2>
      <p>- Đọc kỹ hướng dẫn trước khi làm bài</p>
      <p>- Phân bổ thời gian hợp lý cho từng phần</p>
      <p>- Đối với phần nghe: Đọc trước câu hỏi, ghi chú nhanh khi nghe</p>
      <p>- Đối với phần đọc: Đọc lướt trước toàn bộ bài, sau đó đọc chi tiết từng phần</p>
      <p>- Đối với phần viết: Lập dàn ý trước khi viết, kiểm tra lỗi sau khi viết xong</p>
      
      <h2>Kinh nghiệm ôn thi</h2>
      <p>- Lập kế hoạch ôn thi chi tiết, chia nhỏ mục tiêu</p>
      <p>- Ôn tập đều đặn mỗi ngày, không học dồn</p>
      <p>- Làm nhiều đề thi thử để làm quen với cấu trúc đề thi</p>
      <p>- Tham gia các nhóm học tập để trao đổi kinh nghiệm</p>
      <p>- Sử dụng ứng dụng HSK 365 Master để ôn tập hiệu quả</p>
      
      <h2>Chuẩn bị tâm lý trước kỳ thi</h2>
      <p>- Giữ tinh thần thoải mái, tự tin</p>
      <p>- Ngủ đủ giấc trước ngày thi</p>
      <p>- Chuẩn bị đầy đủ giấy tờ, dụng cụ thi</p>
      <p>- Đến địa điểm thi sớm để làm quen với môi trường</p>
      
      <h2>Kết luận</h2>
      <p>Chinh phục kỳ thi HSK 5 đòi hỏi sự chuẩn bị kỹ lưỡng và luyện tập đều đặn. Bằng cách áp dụng các kinh nghiệm và bí quyết trên, bạn sẽ tự tin hơn và có khả năng đạt điểm cao trong kỳ thi HSK 5.</p>
    `,
  },
  {
    id: "5",
    title: "5 ứng dụng hỗ trợ học tiếng Trung hiệu quả",
    excerpt: "Giới thiệu 5 ứng dụng hỗ trợ học tiếng Trung hiệu quả, giúp bạn học mọi lúc, mọi nơi.",
    category: "Công nghệ",
    date: "05/05/2023",
    author: "Nguyễn Văn A",
    authorRole: "Chuyên gia công nghệ giáo dục",
    readTime: "6 phút",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Giới thiệu</h2>
      <p>Công nghệ đã mang đến nhiều tiện ích cho việc học ngôn ngữ. Bài viết này giới thiệu 5 ứng dụng hỗ trợ học tiếng Trung hiệu quả, giúp bạn học mọi lúc, mọi nơi.</p>
      
      <h2>1. HSK 365 Master</h2>
      <p>HSK 365 Master là ứng dụng học tiếng Trung toàn diện, được phát triển bởi đội ngũ giáo viên giàu kinh nghiệm. Ứng dụng cung cấp các khóa học từ cơ bản đến nâng cao, bài tập luyện tập và công cụ học từ vựng thông minh.</p>
      
      <p><strong>Tính năng nổi bật:</strong></p>
      <p>- Khóa học theo trình độ HSK 1-6</p>
      <p>- Thẻ ghi nhớ thông minh với công nghệ lặp lại ngắt quãng</p>
      <p>- Công cụ nhận diện giọng nói để luyện phát âm</p>
      <p>- Bài tập tương tác và trò chơi học tập</p>
      <p>- Theo dõi tiến độ học tập chi tiết</p>
      
      <h2>2. Pleco</h2>
      <p>Pleco là một trong những từ điển tiếng Trung tốt nhất trên điện thoại di động. Ứng dụng cung cấp nhiều tính năng hữu ích cho việc tra cứu và học từ vựng.</p>
      
      <p><strong>Tính năng nổi bật:</strong></p>
      <p>- Từ điển Trung-Việt, Trung-Anh đầy đủ</p>
      <p>- Nhận diện chữ Hán qua camera</p>
      <p>- Viết chữ Hán bằng tay để tra cứu</p>
      <p>- Phát âm chuẩn cho từng từ</p>
      <p>- Thẻ ghi nhớ từ vựng</p>
      
      <h2>3. HelloChinese</h2>
      <p>HelloChinese là ứng dụng học tiếng Trung dành cho người mới bắt đầu. Ứng dụng sử dụng phương pháp học tập thú vị và tương tác để giúp người học tiếp thu nhanh chóng.</p>
      
      <p><strong>Tính năng nổi bật:</strong></p>
      <p>- Bài học ngắn, dễ tiếp thu</p>
      <p>- Phát âm chuẩn và nhận diện giọng nói</p>
      <p>- Trò chơi học tập tương tác</p>
      <p>- Luyện viết chữ Hán</p>
      <p>- Theo dõi tiến độ học tập</p>
      
      <h2>4. ChineseSkill</h2>
      <p>ChineseSkill là ứng dụng học tiếng Trung thông qua trò chơi. Ứng dụng giúp người học tiếp thu từ vựng và ngữ pháp một cách thú vị và hiệu quả.</p>
      
      <p><strong>Tính năng nổi bật:</strong></p>
      <p>- Học qua trò chơi tương tác</p>
      <p>- Bài học theo chủ đề</p>
      <p>- Luyện phát âm với công nghệ nhận diện giọng nói</p>
      <p>- Luyện viết chữ Hán</p>
      <p>- Bài kiểm tra định kỳ</p>
      
      <h2>5. DuChinese</h2>
      <p>DuChinese là ứng dụng đọc hiểu tiếng Trung với các bài đọc phù hợp với nhiều trình độ. Ứng dụng giúp người học cải thiện kỹ năng đọc hiểu và mở rộng vốn từ vựng.</p>
      
      <p><strong>Tính năng nổi bật:</strong></p>
      <p>- Bài đọc theo nhiều cấp độ</p>
      <p>- Phiên âm pinyin và dịch nghĩa</p>
      <p>- Phát âm chuẩn cho từng câu</p>
      <p>- Giải thích từ vựng và ngữ pháp</p>
      <p>- Bài tập sau mỗi bài đọc</p>
      
      <h2>Lời khuyên khi sử dụng ứng dụng học tiếng Trung</h2>
      <p>- Sử dụng đều đặn mỗi ngày, dù chỉ 15-30 phút</p>
      <p>- Kết hợp nhiều ứng dụng để học toàn diện</p>
      <p>- Đặt mục tiêu học tập rõ ràng</p>
      <p>- Theo dõi tiến độ học tập</p>
      <p>- Kết hợp với các phương pháp học truyền thống</p>
      
      <h2>Kết luận</h2>
      <p>Các ứng dụng học tiếng Trung là công cụ hỗ trợ đắc lực cho việc học ngôn ngữ. Bằng cách sử dụng các ứng dụng trên một cách hiệu quả, bạn có thể cải thiện đáng kể kỹ năng tiếng Trung của mình.</p>
    `,
  },
  {
    id: "6",
    title: "Văn hóa Trung Quốc qua các thành ngữ",
    excerpt: "Khám phá văn hóa Trung Quốc thông qua các thành ngữ phổ biến và ý nghĩa sâu sắc đằng sau chúng.",
    category: "Văn hóa",
    date: "10/05/2023",
    author: "Trần Thị B",
    authorRole: "Chuyên gia văn hóa Trung Quốc",
    readTime: "9 phút",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Giới thiệu</h2>
      <p>Thành ngữ (成语, chéngyǔ) là những cụm từ cố định, thường gồm 4 chữ, chứa đựng những triết lý sâu sắc và phản ánh văn hóa, lịch sử Trung Quốc. Bài viết này giới thiệu một số thành ngữ phổ biến và ý nghĩa văn hóa đằng sau chúng.</p>
      
      <h2>1. 一石二鸟 (yī shí èr niǎo) - Một viên đá trúng hai con chim</h2>
      <p>Tương đương với thành ngữ "một công đôi việc" trong tiếng Việt. Thành ngữ này nói về việc đạt được hai mục tiêu chỉ với một hành động.</p>
      
      <p><strong>Nguồn gốc:</strong> Thành ngữ này có nguồn gốc từ việc săn bắn thời cổ đại, khi một người thợ săn may mắn bắn trúng hai con chim chỉ với một mũi tên.</p>
      
      <p><strong>Ý nghĩa văn hóa:</strong> Phản ánh tư duy thực tế và hiệu quả trong văn hóa Trung Quốc, đề cao việc tối ưu hóa nguồn lực.</p>
      
      <h2>2. 画蛇添足 (huà shé tiān zú) - Vẽ rắn thêm chân</h2>
      <p>Tương đương với thành ngữ "thừa thãi, rườm rà" trong tiếng Việt. Thành ngữ này nói về việc làm thêm những điều không cần thiết, khiến kết quả trở nên tệ hơn.</p>
      
      <p><strong>Nguồn gốc:</strong> Thành ngữ này xuất phát từ một câu chuyện cổ về một cuộc thi vẽ rắn. Người vẽ xong sớm nhất, tự tin mình sẽ thắng, nên đã thêm chân vào con rắn và kết quả là thua cuộc vì rắn không có chân.</p>
      
      <p><strong>Ý nghĩa văn hóa:</strong> Phản ánh quan điểm "biết đủ là đủ" trong văn hóa Trung Quốc, đề cao sự đơn giản và hiệu quả.</p>
      
      <h2>3. 守株待兔 (shǒu zhū dài tù) - Đứng canh gốc cây đợi thỏ</h2>
      <p>Tương đương với thành ngữ "ngồi chờ sung rụng" trong tiếng Việt. Thành ngữ này nói về việc chờ đợi may mắn mà không chịu nỗ lực.</p>
      
      <p><strong>Nguồn gốc:</strong> Thành ngữ này xuất phát từ một câu chuyện về một nông dân thấy một con thỏ chạy đâm vào gốc cây và chết. Từ đó, ông ta ngày ngày đứng canh gốc cây, hy vọng sẽ có thêm thỏ tự đâm vào cây.</p>
      
      <p><strong>Ý nghĩa văn hóa:</strong> Phản ánh quan điểm về sự siêng năng và chủ động trong văn hóa Trung Quốc, phê phán thái độ thụ động, ỷ lại vào may mắn.</p>
      
      <h2>4. 塞翁失马 (sài wēng shī mǎ) - Ông già mất ngựa</h2>
      <p>Tương đương với câu "Họa vô đơn chí, phúc bất trùng lai" trong tiếng Việt. Thành ngữ này nói về việc trong họa có phúc, trong phúc có họa, mọi việc đều có hai mặt.</p>
      
      <p><strong>Nguồn gốc:</strong> Thành ngữ này xuất phát từ câu chuyện về một ông già sống ở biên giới. Một ngày, con ngựa của ông bỏ trốn sang nước láng giềng (điều xấu), nhưng sau đó nó trở về cùng với một con ngựa tốt (điều tốt). Con trai ông cưỡi con ngựa mới, bị ngã gãy chân (điều xấu), nhưng nhờ vậy mà thoát được việc bị bắt đi lính và chết trận (điều tốt).</p>
      
      <p><strong>Ý nghĩa văn hóa:</strong> Phản ánh quan điểm biện chứng trong văn hóa Trung Quốc, đề cao việc nhìn nhận sự việc một cách toàn diện và lạc quan.</p>
      
      <h2>5. 井底之蛙 (jǐng dǐ zhī wā) - Con ếch dưới đáy giếng</h2>
      <p>Tương đương với thành ngữ "ếch ngồi đáy giếng" trong tiếng Việt. Thành ngữ này nói về người có tầm nhìn hạn hẹp, không biết thế giới bên ngoài rộng lớn như thế nào.</p>
      
      <p><strong>Nguồn gốc:</strong> Thành ngữ này xuất phát từ một câu chuyện về con ếch sống dưới đáy giếng, tưởng rằng bầu trời chỉ nhỏ bằng miệng giếng.</p>
      
      <p><strong>Ý nghĩa văn hóa:</strong> Phản ánh quan điểm về việc mở rộng tầm nhìn, học hỏi không ngừng trong văn hóa Trung Quốc, phê phán thái độ tự mãn, thiển cận.</p>
      
      <h2>6. 入乡随俗 (rù xiāng suí sú) - Vào làng theo thói làng</h2>
      <p>Tương đương với thành ngữ "nhập gia tùy tục" trong tiếng Việt. Thành ngữ này nói về việc tôn trọng và tuân theo phong tục, tập quán của địa phương khi đến nơi đó.</p>
      
      <p><strong>Nguồn gốc:</strong> Thành ngữ này có nguồn gốc từ quan điểm Nho giáo về việc tôn trọng phong tục tập quán.</p>
      
      <p><strong>Ý nghĩa văn hóa:</strong> Phản ánh tinh thần tôn trọng sự đa dạng văn hóa và khả năng thích nghi trong văn hóa Trung Quốc.</p>
      
      <h2>Kết luận</h2>
      <p>Thành ngữ Trung Quốc là kho tàng văn hóa phong phú, phản ánh lịch sử, triết lý và giá trị của người Trung Quốc. Học và hiểu các thành ngữ không chỉ giúp cải thiện kỹ năng ngôn ngữ mà còn giúp hiểu sâu hơn về văn hóa Trung Quốc.</p>
    `,
  },
]

// Related posts (excluding current post)
const getRelatedPosts = (currentId: string) => {
  return blogPosts.filter((post) => post.id !== currentId).slice(0, 3)
}

export default function BlogDetailPage() {
  const params = useParams()
  const postId = params.id as string
  const post = blogPosts.find((post) => post.id === postId)
  const relatedPosts = getRelatedPosts(postId)

  const [copied, setCopied] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const copyToClipboard = () => {
    if (typeof window !== "undefined" && post) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const toggleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  if (!post) {
    return (
      <div className="pt-24 pb-16 container-custom">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Bài viết không tồn tại</h1>
          <p className="mt-4 text-muted-foreground">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Button className="mt-6" asChild>
            <Link href="/blog">Quay lại Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-20">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4" />
              <span>Quay lại Blog</span>
            </Link>

            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">{post.author}</span>
                  <p className="text-xs">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom -mt-10 md:-mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="aspect-[2/1] relative rounded-xl overflow-hidden shadow-xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2" onClick={copyToClipboard}>
                  {copied ? <CheckCheck className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? "Đã sao chép" : "Chia sẻ"}</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" onClick={toggleBookmark}>
                  <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-primary text-primary" : ""}`} />
                  <span>{bookmarked ? "Đã lưu" : "Lưu bài viết"}</span>
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="border-t border-b py-6 my-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Theo dõi
                  </Button>
                  <Button size="sm">Xem tất cả bài viết</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Bài viết liên quan</h2>
            <p className="text-muted-foreground">Khám phá thêm các bài viết khác về chủ đề học tiếng Trung.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {relatedPosts.map((relatedPost) => (
              <motion.div key={relatedPost.id} variants={fadeIn} className="group">
                <Link href={`/blog/${relatedPost.id}`} className="block">
                  <div className="overflow-hidden rounded-xl border bg-background card-hover h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {relatedPost.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                      <Button variant="ghost" size="sm" className="gap-1 text-primary">
                        Đọc tiếp
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-primary/10 rounded-xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl font-bold">Bắt đầu hành trình học tiếng Trung ngay hôm nay</h2>
              <p className="text-muted-foreground">
                Đăng ký tài khoản HSK 365 Master để truy cập đầy đủ các bài học, từ vựng và tài liệu học tập.
              </p>
              <Button size="lg">Đăng ký ngay</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
