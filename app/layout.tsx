import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Isipathana College Old Boys' Association",
  description: "The Old Boys Association (OBA) of Isipathana College, established in 1992, plays a crucial role in the school's growth and development.",
  keywords: "Isipathana College, OBA, Old Boys Association, Sri Lanka, Education, Sports",
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen" style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
