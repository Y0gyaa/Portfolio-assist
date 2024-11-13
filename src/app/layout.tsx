import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
            href="https://fonts.googleapis.com/css2?family=Bangers&family=Bayon&display=swap"
            rel="stylesheet"
          />
            </head>
            <body
              className={`antialiased bg-image min-h-screen`}
            >
              {children}
            </body>
          </html>
  );
}
