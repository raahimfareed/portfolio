import { Alata } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { site } from "@/lib/site";

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// });

const alata = Alata({
  subsets: ['latin'],
  weight: [ "400" ]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} // Software Engineer`,
    template: `%s // ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author.name, url: site.author.url }],
  creator: site.author.name,
  publisher: site.author.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} // Software Engineer`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    creator: site.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
