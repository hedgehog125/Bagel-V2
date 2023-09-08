const URL_PREFIX = "Bagel-V2"; // <-- Set this to the repository name if you're hosting on GitHub Pages (unless it's your homepage site), as all the URLs will need to be prefixed with it. If you don't want a prefix, set it to an empty string


import { adapter, standardGetLast } from "sveltekit-adapter-versioned-worker";

const dev = process.env.NODE_ENV !== "production";
const isTestBuild = process.env.IS_TEST_BUILD === "true";
const baseURL = (
	dev
	|| isTestBuild
	|| URL_PREFIX == ""
)? "" : `/${URL_PREFIX}`;

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		appDir: "app",
		paths: {
			base: baseURL
		},
		alias: {
			$util: "src/lib/util",
			$set: "src/lib/settings",
			$sub: "src/lib/util/subcomponents",
			$img: "src/lib/imgs",
			$snd: "src/lib/snds",
			$vid: "src/lib/vids"
		},

		adapter: adapter({
			isElevatedPatchUpdate: 0,
			isMajorUpdate: 0,
			isCriticalUpdate: 0,

			lastInfo: standardGetLast("https://hedgehog125.github.io/Bagel-V2/versionedWorker.json", isTestBuild)
		})
	}
};

export default config;