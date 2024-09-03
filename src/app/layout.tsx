import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VaultKey",
  description: "App gerenciador de senhas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
