import type { Metadata } from "next";

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
   <>
      {children}
   </> 
  );
}
