import "./globals.css";
import "./index.css";
import { Figtree, Funnel_Display } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree", // creates a CSS variable
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Fusion3",
  description:
    "Fusion3 works on projects that push Web3 forward and help drive adoption.",
  openGraph: {
    images: [
      {
        url: "https://i.ibb.co/RG98Cqzg/fusion3-seo.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${funnel.variable}`}>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
