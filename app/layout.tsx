import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Since Arial Rounded MT Bold isn't available in Google Fonts,
// we'll use Inter as a fallback and rely on the system font for Arial Rounded MT Bold
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TwinCoreTech - Digital Transformation & Operational Design",
  description: "Specialist support for digital transformation, operational design, and programme delivery—helping organisations streamline processes, unlock efficiencies, and prepare for the future.",
  keywords: ["Digital Transformation", "Operational Design", "Programme Delivery", "Omadeas", "Financial Services", "Insurance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
        {/* Custom font stylesheets - these will be loaded from your public folder */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
