import { Poppins } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
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
  return (
    <html lang="en" data-theme={!!theme ? theme.value : "Mono"}>
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
