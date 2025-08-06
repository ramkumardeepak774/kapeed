import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepak Kumar - Personal Website",
  description: "Personal website and portfolio of Deepak Kumar",
  keywords: ["portfolio", "developer", "personal website", "blog"],
  authors: [{ name: "Deepak Kumar" }],
  creator: "Deepak Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Deepak Kumar - Personal Website",
    description: "Personal website and portfolio of Deepak Kumar",
    siteName: "Deepak Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar - Personal Website",
    description: "Personal website and portfolio of Deepak Kumar",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
