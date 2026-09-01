// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Space Grotesk",
    cssVariable: "--font-space"
  },
  {
    provider: fontProviders.fontsource(),
    name: "Inter",
    cssVariable: "--font-inter"
  }],

  integrations: [react()]
});