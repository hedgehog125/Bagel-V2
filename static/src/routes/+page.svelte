<script>
	import SpinningBagel from "$lib/SpinningBagel.svelte";
</script>

<main>
	<div class="center">
		<SpinningBagel></SpinningBagel>
	</div>
</main>

<style>
	.center {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>