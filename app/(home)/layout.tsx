import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FTFL Technology",
  description: "Build By FTFL Technology",
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
