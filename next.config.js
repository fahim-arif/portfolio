/** @type {import('next').NextConfig} */
const nextConfig = () => {
  if (!process.env.NEXT_PUBLIC_SENGRID_API_KEY) {
    console.error(
      "Error: Missing NEXT_PUBLIC_SENGRID_API_KEY environment variable"
    );
    process.exit(1);
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: false,
    },
    i18n: {
      locales: ["de", "en"],
      defaultLocale: "en",
      localeDetection: false,
    },
  };
};

module.exports = nextConfig;
