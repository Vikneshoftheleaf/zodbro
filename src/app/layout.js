import { Inter} from "next/font/google";
import FeedbackForm from "@/component/feedback-form";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/component/navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body className={`${inter.className} bg-zinc-900 text-zinc-100`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
