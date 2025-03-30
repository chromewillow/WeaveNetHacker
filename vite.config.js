import { defineConfig } from 'vite';

export default defineConfig({
  // Optional: configure or plugins here
  // Example:
  // plugins: [],
  server: {
    // Optional: configure server options
    // port: 8080
  },
  build: {
    // Optional: configure build options
    chunkSizeWarningLimit: 1000, // Suppress warning for large vendor chunks like Phaser
  }
});
