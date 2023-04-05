import { Nunito } from "next/font/google";

import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import ToastProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
