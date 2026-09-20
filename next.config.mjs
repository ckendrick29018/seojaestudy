/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The production project is also reachable at its default Vercel alias,
      // which serves the same pages with a 200. Send that host to the real
      // domain so crawlers see one site, not two. Matches only this exact
      // host, so per-deployment preview URLs (…-git-<branch>-….vercel.app)
      // keep working.
      {
        source: "/:path*",
        has: [{ type: "host", value: "seojaestudy.vercel.app" }],
        destination: "https://www.seojaestory.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
