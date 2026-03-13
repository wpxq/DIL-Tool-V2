import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Inv Lookup",
  description: "Made by github.com/wpxq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="antialiased font-mono bg-black text-white">
        {children}
      </body>
    </html>
  );
}