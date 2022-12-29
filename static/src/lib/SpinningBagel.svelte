<script>
	import bagelImg from "$img/bagel.png";
</script>

<img src={bagelImg} alt="A spinning bagel">

<style>
	img {
		display: block;
		animation: 6s spin linear infinite;

		width: 50vmin;
		height: 50vmin;

		image-rendering: -moz-crisp-edges;
		image-rendering: optimize-contrast;
		image-rendering: -webkit-optimize-contrast;
    	image-rendering: pixelated;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>