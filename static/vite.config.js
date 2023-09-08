import { sveltekit } from "@sveltejs/kit/vite";
import { manifestGeneratorPlugin } from "sveltekit-adapter-versioned-worker";

const config = {
	plugins: [
		sveltekit(),
		manifestGeneratorPlugin()
	]
};

export default config;