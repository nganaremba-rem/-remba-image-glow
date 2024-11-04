import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), cssInjectedByJsPlugin()],
	build: {
		lib: {
			entry: "src/index.ts", // Adjust the path to your component
			name: "ImageGlow",
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
