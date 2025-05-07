import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HSK 365 Master - Learn Chinese",
    short_name: "HSK 365 Master",
    description: "Học tiếng Trung hiệu quả với HSK 365 Master",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4CB9E7",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
