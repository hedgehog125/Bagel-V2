<script>
	import { RegisterWorker } from "sveltekit-plugin-versioned-worker/components";
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

<RegisterWorker></RegisterWorker>
<slot></slot>