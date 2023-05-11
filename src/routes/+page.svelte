<script>
	import Card from "./Card.svelte";
	import rightAlpas from "$lib/images/svg/alpas-right.svg"
	import bgAlpas from "$lib/images/png/alpas-bg.png"
	import rightSapphire from "$lib/images/svg/sapphire-right.svg"
	import bgSapphire from "$lib/images/png/sapphire-bg.png"
	import rightPinque from "$lib/images/svg/pinque-right.svg"
	import bgPinque from "$lib/images/png/pinque-bg.png"
	import rightSigla from "$lib/images/svg/sigla-right.svg"
	import bgSigla from "$lib/images/png/sigla-bg.png"

	let images = [
		{bg: bgAlpas, right: rightAlpas},
		{bg: bgSapphire, right: rightSapphire},
		{bg: bgPinque, right: rightPinque},
		{bg: bgSigla, right: rightSigla},
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
