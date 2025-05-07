### HSK 365 Master

HSK 365 Master là nền tảng học tiếng Trung toàn diện, giúp người học chinh phục kỳ thi HSK và giao tiếp tiếng Trung tự tin trong mọi tình huống. Dự án được xây dựng với Next.js và Tailwind CSS, cung cấp trải nghiệm học tập tương tác và hiệu quả.

## 📚 Tính năng chính

- **Học từ vựng hiệu quả**: Thẻ ghi nhớ thông minh với phương pháp lặp lại ngắt quãng
- **Luyện phát âm chuẩn**: Công nghệ nhận diện giọng nói giúp phát âm chuẩn như người bản xứ
- **Lộ trình học tập cá nhân hóa**: Lộ trình học tập phù hợp với mục tiêu và trình độ của người học
- **Bài tập luyện hàng ngày**: Bài tập được thiết kế để cải thiện kỹ năng nghe, nói, đọc, viết
- **Từ vựng theo chủ đề**: Học từ vựng theo chủ đề giúp ghi nhớ và sử dụng trong tình huống thực tế
- **Ngữ pháp cơ bản**: Học các cấu trúc ngữ pháp cơ bản để xây dựng nền tảng vững chắc
- **Tài liệu học tập phong phú**: Sách giáo trình, ứng dụng, tài liệu nghe, đọc, viết và văn hóa
- **Mẹo học tiếng Trung hiệu quả**: Mẹo và phương pháp học từ các chuyên gia ngôn ngữ

## 🛠️ Công nghệ sử dụng

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Animation**: Framer Motion
- **State Management**: React Hooks
- **Deployment**: Vercel

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống

- Node.js 18.x hoặc cao hơn
- npm 9.x hoặc cao hơn

### Cài đặt

1. Clone repository:

```shellscript
git clone https://github.com/trantuankiet11884/hsk-365-master.git
cd hsk-365-master
```

2. Cài đặt dependencies:

```shellscript
npm install
```

3. Chạy dự án ở môi trường development:

```shellscript
npm run dev
```

4. Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

### Build cho production

```shellscript
npm run build
npm run start
```

## 📂 Cấu trúc dự án

```plaintext
hsk-365-master/
├── app/                    # Next.js App Router
│   ├── about/              # Trang Về chúng tôi
│   ├── blog/               # Trang Blog và chi tiết bài viết
│   ├── learn/              # Trang Học tập
│   ├── globals.css         # Global CSS
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Trang chủ
├── components/             # React components
│   ├── ui/                 # Shadcn UI components
│   ├── footer.tsx          # Footer component
│   ├── navbar.tsx          # Navigation bar component
│   └── theme-provider.tsx  # Theme provider
├── public/                 # Static assets
│   └── images/             # Images
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
├── .gitignore              # Git ignore file
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── README.md               # Project documentation
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```
