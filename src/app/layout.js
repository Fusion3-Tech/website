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
  title: "Fusion3 — Advanced Infrastructure & Intelligence Consultancy",
  description:
    "Fusion3 designs and deploys high-performance digital systems for ambitious organizations. Infrastructure architecture, intelligent systems, and strategic advisory.",
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
      <body className={figtree.className}>
        <div id="app-scroll" className="app-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
