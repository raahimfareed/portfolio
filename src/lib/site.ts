export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.raahimfareed.com").replace(/\/$/, ""),
  name: "Raahim Fareed",
  title: "Raahim Fareed",
  description: "Principal software engineer working on backends, APIs and anything worth self hosting.",
  locale: "en_US",
  author: {
    name: "Raahim Fareed",
    url: "https://www.raahimfareed.com",
    twitter: "@raahimfareed",
    sameAs: [
      "https://github.com/raahimfareed",
      "https://linkedin.com/in/raahimfareed",
    ],
  },
}

export const absoluteUrl = (path: string) => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
