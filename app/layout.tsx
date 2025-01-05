import type { Metadata } from "next";
import { Space_Grotesk as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentify",
  description: "Analyze text sentiment with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
