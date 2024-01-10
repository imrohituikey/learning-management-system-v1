/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['media.graphassets.com','img.clerk.com']
    },
    eslint : {
        ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig
