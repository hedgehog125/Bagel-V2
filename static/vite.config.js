import { sveltekit } from "@sveltejs/kit/vite";
import { versionedWorker, fetchLast, readLast } from "sveltekit-plugin-versioned-worker";

const config = {
	plugins: [
		sveltekit(),
		versionedWorker({
			lastInfo: process.env.DISABLE_BASE_URL === "true"?
				readLast("build/versionedWorker.json")
				: fetchLast("https://hedgehog125.github.io/Bagel-V2/versionedWorker.json")
		})
	]
};

export default config;