import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  dangerouslyAllowSVG: true,
	  contentDispositionType: 'attachment',
	  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
  }
  
  export default nextConfig;
