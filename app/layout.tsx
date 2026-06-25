import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ViewportBorder from "@/components/ViewportBorder";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Rohan Kumrawat | Full Stack Developer",
  description:
    "Full Stack Developer & Software Engineer specializing in scalable web applications, microservices, and modern frontend experiences.",
  openGraph: {
    title: "Rohan Kumrawat | Full Stack Developer",
    description:
      "Full Stack Developer & Software Engineer building production-grade systems.",
    type: "website",
  },
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
              (function() {
                try {
                  var localDark = localStorage.getItem('darkMode');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (localDark === 'true' || (localDark === null && systemDark)) {
                    document.documentElement.classList.add('night');
                  } else {
                    document.documentElement.classList.add('day');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ViewportBorder />
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
