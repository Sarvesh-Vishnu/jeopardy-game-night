import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeopardy! — Game Night Edition",
  description:
    "Play Jeopardy with friends using curated topic packs or generate your own game with any AI. Open resource, no account needed.",
  openGraph: {
    title: "Jeopardy! — Game Night Edition",
    description: "Play Jeopardy for game night. Generate custom games with any LLM.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a1a] text-white">
        {children}
      </body>
    </html>
  );
}
