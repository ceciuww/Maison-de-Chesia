/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Assets in /public use folder & file names with spaces (as originally
    // supplied), so built-in optimization is disabled to keep paths simple.
    unoptimized: true,
  },
};

module.exports = nextConfig;
