/** @type {import('next').NextConfig} */

// Pages from the old agency template. Their URLs now point to the home page.
const retiredPages = [
  "/services",
  "/quote",
  "/existing-project",
  "/new-concept",
  "/augment-team",
  "/enterprise",
  "/advanced-tech",
  "/careers",
  "/contact",
  "/thank-you",
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      ...retiredPages.map((source) => ({
        source,
        destination: "/",
        permanent: true,
      })),
      // Old numeric project pages (agency-era projects were removed).
      { source: "/project/:id(\\d+)", destination: "/#projects", permanent: true },
      // The German locale was removed.
      { source: "/de", destination: "/", permanent: true },
      { source: "/de/:path*", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
