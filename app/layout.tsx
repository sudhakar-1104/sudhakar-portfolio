
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudhakar K S | Software Engineer",
  description:
    "Personal portfolio of Sudhakar K S - Software Developer, AI enthusiast and technology explorer.",
  keywords: [
    "Sudhakar K S",
    "Software Developer",
    "AI Engineer",
    "Full Stack Developer",
    "RAG",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Sudhakar K S" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
