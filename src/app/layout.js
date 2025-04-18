import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import Navbar from "@/component/navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body className={`${playfair.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
