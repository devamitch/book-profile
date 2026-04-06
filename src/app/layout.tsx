import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Amit Chakraborty — Principal Architect & Founding Engineer",
  description:
    "A cinematic 3D book portfolio of Amit Chakraborty, featuring 8+ years of expertise in Mobile, AI, and Web3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&family=Cinzel:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
