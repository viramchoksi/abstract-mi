import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { siteData } from "@/data/allApps";

const inter = Inter({ subsets: ["latin"] });
const kade = localFont({ src: "./Kade.ttf" });
const monaSans = localFont({ src: "./Mona-Sans.ttf" });

export const metadata = {
  title: siteData.header.titleMeta,
  description: siteData.header.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kade.className}>{children}</body>
    </html>
  );
}
