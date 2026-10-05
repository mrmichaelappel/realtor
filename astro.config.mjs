// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://michaelappelrealtor.com",
  integrations: [mdx(), sitemap({ filter: (page) => page === "https://michaelappelrealtor.com/" })],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
