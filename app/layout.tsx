import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CanvasCraft - Share pfps with ease.",
  description: "Share pfps with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}