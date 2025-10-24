import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],

	root: "./src",
	build: {
		outDir: "../dist",
	},

	server: {
		port: 8080,
		host: true,
		open: true,
	},
});
