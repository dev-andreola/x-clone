import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import FollowBar from "./components/FollowBar";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X",
  description: "Faça posts, faça amigos e se conecte com o mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <LoginModal />
        <RegisterModal />
        <div className="bg-black h-full">
          <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Sidebar />
              <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
                {children}
              </div>
              <FollowBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
