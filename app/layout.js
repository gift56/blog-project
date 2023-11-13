import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Blog",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-softbg text-dark">
          <div className="lg:max-w-[1536px] mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
