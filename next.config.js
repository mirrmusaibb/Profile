/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (repo ? `/${repo}` : '');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: configuredBasePath,
  assetPrefix: configuredBasePath
};

module.exports = nextConfig;
