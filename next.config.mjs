import { withContentlayer } from "next-contentlayer"

import "./env.mjs"
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ["cdn.builder.io", "pbs.twimg.com"],
      },
}

export default withContentlayer(nextConfig)
