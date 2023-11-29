import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer, Navbar } from "@/components";
import "./global.css";
import Script from "next/script";

const inter = Raleway({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kitchen Quest",
  description: "Embark on a Culinary Adventure.",
  openGraph: {
    images: [
      {
        url: "https://chemarbraithwaite.s3.amazonaws.com/kitchen-quest.png",
        width: 1500,
        height: 575,
        alt: "Kitchen Quest",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navbar />
        {children}
        <Footer />
        <Script src="https://developer.edamam.com/attribution/badge.js" />
      </body>
    </html>
  );
}
