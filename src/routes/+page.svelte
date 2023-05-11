<script>
// @ts-nocheck
	import Card from "./Card.svelte";
	import rightAlpas from "$lib/images/alpas-right.svg"
	import bgAlpas from "$lib/images/alpas-bg.png"
</script>

<svelte:head>
	<title>Home: Projects</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Card>
		<img src={rightAlpas} alt="right part of ticket for Alpas" slot="right" class="right">
		<img src={bgAlpas} alt="background for Alpas" slot="bg" class="bg">
	</Card>
</section>

<style>
	section {
		margin-left: auto;
		display: grid;
		grid-template-columns: repeat(2, 500px);
		gap: 30px;
		margin-top: 30px;
	}

	.bg, 
	.right {
		position: absolute;
	}

	.bg {
		z-index: 1;
		width: 99% ;
		height: 100%;
	}

	.right {
		z-index: 2;
	}
</style>
