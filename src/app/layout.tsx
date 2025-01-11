import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar";
import Header from "@/components/shared/header";
import { Toaster } from "@/components/ui/sonner";



const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meta Dream",
  description: "Meta Dream Task Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased `}>
        <div className="flex w-full min-h-screen">
          <Sidebar />
          <div className="w-full">
            <Header />
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
