import react from '@astrojs/react';

export default {
  buildOptions: {
    site: 'https://shopify-astro.netlify.app/',
  },
  renderers: ['@astrojs/renderer-react'],
  integrations: [
    react(),
  ]
};
