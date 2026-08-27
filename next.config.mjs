/** @type {import('next').NextConfig} */
import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      ["rehype-pretty-code", { theme: "github-dark", keepBackground: false }],
    ]
  }
})

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "kly5z42upuokuzlf.public.blob.vercel-storage.com",
            port: ""
        },
        {
            protocol: "https",
            hostname: "api.microlink.io",
            port: ""
        }
    ],
  }
};

export default withMdx(nextConfig);
