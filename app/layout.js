
import "./globals.css";
import { Footer, Navbar,ToastContainer } from "@/components";
import AuthProvider from "@/providers/AuthProvider";
import Theme from "@/providers/Theme";
import { Inter } from "next/font/google";
// import { Head } from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Blog",
  description: "The best blog app!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <AuthProvider>
            <main className="min-h-screen bg-white text-darkText dark:bg-darkBg dark:text-white">
              <div className="w-[90%] lg:w-[85%] mx-auto">
                <Navbar />
                {children}
                <Footer />
              </div>
            </main>
          </AuthProvider>
          <ToastContainer />
        </Theme>
      </body>
    </html>
  );
}
