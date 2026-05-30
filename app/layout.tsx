import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ViewportBorder from "@/components/ViewportBorder";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Rohan Sharma | Full Stack Developer",
  description:
    "Full Stack Developer & Software Engineer specializing in scalable web applications, microservices, and modern frontend experiences.",
  openGraph: {
    title: "Rohan Sharma | Full Stack Developer",
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
    <html lang="en">
      <body>
        <ViewportBorder />
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
