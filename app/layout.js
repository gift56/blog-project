import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Blog",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="min-h-screen bg-softbg text-black">
            <div className="w-[90%] lg:w-[85%] mx-auto">
              <Navbar />
              {children}
              <Footer />
            </div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
