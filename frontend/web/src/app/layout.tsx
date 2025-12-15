import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Siva Padmanaban | Portfolio",
  description: "Personal portfolio of Siva Padmanaban",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}