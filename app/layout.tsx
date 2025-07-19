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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  if (
                    theme === 'dark' ||
                    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
                  ) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-gradient-to-b from-white to-blue-500 dark:from-black">
        {children}
      </body>
    </html>
  );
}
