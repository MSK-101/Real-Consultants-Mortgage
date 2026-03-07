import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Crocker | Mortgage Advisor",
  description:
    "Get a clear mortgage plan, honest guidance, and a process that actually makes sense. Talk with a real expert, make confident decisions, and close with clarity.",
  keywords: ["mortgage", "home loan", "refinance", "mortgage advisor", "Chris Crocker", "home buying", "real estate financing"],
  authors: [{ name: "Chris Crocker" }],
  openGraph: {
    title: "Chris Crocker | Mortgage Advisor",
    description:
      "The mortgage system that helps you buy smarter — without confusion or pressure.",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Chris Crocker Mortgage Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Crocker | Mortgage Advisor",
    description: "The mortgage system that helps you buy smarter — without confusion or pressure.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
