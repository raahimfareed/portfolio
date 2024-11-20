/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
