import { Poppins, Alata } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const alata = Alata({
  subsets: ['latin'],
  weight: [ "400" ]
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
        className={`${alata.className} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
