import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Si vas a GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/",
});
