<script>
	import Card from "./Card.svelte";
	import rightAlpas from "$lib/images/alpas-right.svg"
	import bgAlpas from "$lib/images/alpas-bg.png"
	import rightSapphire from "$lib/images/sapphire-right.svg"
	import bgSapphire from "$lib/images/sapphire-bg.png"
	import rightPinque from "$lib/images/pinque-right.svg"
	import bgPinque from "$lib/images/pinque-bg.png"

	let images = [
		{bg: bgAlpas, right: rightAlpas},
		{bg: bgSapphire, right: rightSapphire},
		{bg: bgPinque, right: rightPinque},
	]
</script>

<svelte:head>
	<title>Home: Projects</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#each images as image}
		<Card>
			<img src={image.right} alt="right part of ticket for Alpas" slot="right" class="right">
			<img src={image.bg} alt="background for Alpas" slot="bg" class="bg">
		</Card>
	{/each}
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
