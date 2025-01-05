import type { Metadata } from "next";
import { Space_Grotesk as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analyzo",
  description: "Analyze the sentiment of your text.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
