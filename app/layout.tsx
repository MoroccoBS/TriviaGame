import Upper from "@/components/MainPage/Upper";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trivia App",
  description: "By Chouaib Bentalba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex h-full flex-col items-center justify-between w-full max-w-lg overflow-hidden bg-white m-auto relative">
          <Upper />
          {children}
        </main>
      </body>
    </html>
  );
}
