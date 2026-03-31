import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chenuka Sarathchandra - Full Stack Developer & Cybersecurity",
  description:
    "Portfolio of Chenuka Sarathchandra - Full Stack Developer and Information Security Intern specializing in secure web applications and cybersecurity.",
  keywords:
    "developer, full stack, cybersecurity, web development, portfolio, Chenuka Sarathchandra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="bg-primary text-primary">
        {children}
      </body>
    </html>
  );
}
