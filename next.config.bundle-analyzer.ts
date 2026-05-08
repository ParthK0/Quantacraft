/**
 * Bundle Analyzer Configuration
 * Usage: ANALYZE=true npm run build
 * 
 * This configuration helps identify large dependencies and optimize bundle size
 */

import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const config: NextConfig = {
  // Existing config...
};

export default withBundleAnalyzer(config);
