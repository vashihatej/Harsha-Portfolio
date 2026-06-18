import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "./components/navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300","400","500","600","700","800","900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300","400","500","600"],
});

export const metadata = {
  title: "Harsha Masandrapalya Vanarajaiah",
  description: "Senior Software Engineer — Cloud-native architect building enterprise Kubernetes platforms and AI systems at scale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${dmSans.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
