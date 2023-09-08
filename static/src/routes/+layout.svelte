<script>
	import { ServiceWorker } from "sveltekit-adapter-versioned-worker/svelte";
</script>

<style>
	::global(*) {
		font-family: sans-serif;
	}
	:global(button) {
		cursor: pointer;
	}
	:global(body) {
		background-color: #202020;
	}
</style>

<ServiceWorker></ServiceWorker>
<slot></slot>