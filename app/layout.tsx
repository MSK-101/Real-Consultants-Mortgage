import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Consultants Mortgage | Chris Crocker - Buy Smarter Without Confusion",
  description: "Get a clear mortgage plan, honest guidance, and a process that actually makes sense. Talk with a real expert, make confident decisions, and close with clarity.",
  openGraph: {
    title: "Real Consultants Mortgage | Buy Smarter Without Confusion",
    description: "The mortgage system that helps you buy smarter — without confusion or pressure.",
    type: "website",
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
