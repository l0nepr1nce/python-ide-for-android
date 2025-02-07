import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeVortex",
  description: "A powerful universal IDE to increase your productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.variable} antialiased`}
      >
        <div className="container p-6 w-full h-full max-w-full flex flex-col gap-2">
          {children}
        </div>
      </body>
    </html>
  );
}
