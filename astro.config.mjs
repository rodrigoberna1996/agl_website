// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/consts";

import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";

// WordPress domain extracted from the env var (e.g. "https://cms.tu-dominio.com").
// Add it to the CSP so the browser allows loading images from WordPress.
const wpOrigin = process.env.WORDPRESS_API_URL
  ? new URL(process.env.WORDPRESS_API_URL).origin
  : null;

// https://astro.build/config
export default defineConfig({
  site: SITE.CANONICAL_URL,
  output: "static",

  build: {
    // Evita que cada ruta inyecte <style> inline distintos, lo que
    // rompe con CSP al navegar con ClientRouter entre páginas.
    inlineStylesheets: "never",
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "DMSans",
      cssVariable: "--font-dm-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/DMSans.woff2"],
            weight: "normal",
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],

  integrations: [sitemap(), favicons()],

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "object-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        `img-src 'self' https://res.cloudinary.com/dellp9a4z/${wpOrigin ? ` ${wpOrigin}` : ""} data:`,
        `media-src 'self' https://res.cloudinary.com/dellp9a4z/${wpOrigin ? ` ${wpOrigin}` : ""}`,
        "font-src 'self' data:",
        "frame-src 'self' https://www.google.com https://maps.google.com",
        "worker-src 'self'",
        "manifest-src 'none'",
        "form-action 'self'",
      ],
      styleDirective: {
        resources: ["'self'", "'unsafe-hashes'"],
        hashes: [
          "sha256-WUDfWmQP7MHmJVPG87eP2N5ZE7RjDV9+6B/uKHMlSAE=",
          "sha256-P+wlFJoxzaX+ilJ24YqyBBK/sG4spb5yZWdYMQspG1I=",
          "sha256-UI6m4fBliGqfCKOZ9qe8Jk7vapco4kY9asvtzmDNHtI=",
          "sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
          "sha256-kdaXPEOwTw3zyiuCzGv1vpohcW9SqOWq8k6gy2OWgtI=",
        ],
      },
    },
  },
});
