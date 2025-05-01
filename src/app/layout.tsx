import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/components/layouts";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzbek Women Rise",
  description:
    "An educational platform empowering Uzbek women through free courses, workshops, and resources in programming, marketing, design, SMM, and English.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
