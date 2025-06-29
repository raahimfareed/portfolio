import { Poppins } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Raahim Fareed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme');
  const style = cookies().get('style');
  return (
    <html lang="en" data-theme={!!theme ? theme.value : "Mono"} data-style={!!style ? style.value : "Minimal"}>
      <body
        className={`${poppins.className} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
