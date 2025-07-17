import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyNextHire: Your Premier Platform For Hiring Solutions",
  description: "Build By MyNextHire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
