import react from '@astrojs/react';
integrations: [
  react(),
]
export default {
  buildOptions: {
    site: 'https://shopify-astro.netlify.app/',
  },
  renderers: ['@astrojs/renderer-react'],
};
