import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./provider";
import HeaderNavBar from "@/components/HeaderNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <HeaderNavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
