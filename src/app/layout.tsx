import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "1Life Network | Talent Discovery & Creative Production",
  description: "1Life Network is an Accra-based culture and talent engine building globally competitive African creative output through systems, standards, and execution. Discover artists, sessions, and live performances.",
  keywords: [
    "1Life",
    "1Life Network",
    "1Life Sessions",
    "African creative output",
    "talent discovery",
    "music production",
    "Accra",
    "Ghana",
    "African entertainment",
    "artist management",
    "creative agency"
  ],
  authors: [{ name: "1Life Network" }],
  openGraph: {
    title: "1Life Network | African Excellence",
    description: "Building globally competitive African creative output through systems, standards, and execution.",
    siteName: "1Life Network",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1Life Network",
    description: "Accra-based culture and talent engine.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
