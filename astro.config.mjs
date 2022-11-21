import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // buildOptions: {
  //   site: 'https://shopify-astro.netlify.app/',
  // },
  renderers: [
  // ...
  '@astrojs/renderer-react'],
  integrations: [react()]
});