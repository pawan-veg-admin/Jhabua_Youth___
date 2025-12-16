import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arpit Library | Gen Z book ecommerce",
  description: "A modern ecommerce experience for curated books with Razorpay checkout and JWT auth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-midnight text-foam">
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-6 pb-16 pt-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
