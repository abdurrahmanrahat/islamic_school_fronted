import Providers from "@/lib/Providers/Providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
// import { Toaster } from "react-hot-toast";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
// const poppins = Poppins({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Islamic School",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Providers>
          {children}
          {/* <Toaster /> */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
