import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gam3r.Story",
  description: "Simplismente a melhor loja de gamers do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
