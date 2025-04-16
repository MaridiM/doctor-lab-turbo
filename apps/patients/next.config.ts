import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import path from 'path';

const withNextIntl = createNextIntlPlugin('./src/shared/libs/i18n/request.ts')

const nextConfig: NextConfig = {
    reactStrictMode: true,
      webpack: (config) => {
        config.resolve.alias["@ui"] = path.resolve(__dirname, "../../packages/ui/src");
        config.resolve.alias["@config"] = path.resolve(__dirname, "../../packages/config/src");
        return config;
      },
}

export default withNextIntl(nextConfig)
