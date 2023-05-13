<script>
	import Card from "./Card.svelte";
	import welcome from "$lib/images/svg/welcome.svg"

	import bgAlpas from "$lib/images/png/alpas-bg.png"
	import bgSapphire from "$lib/images/png/sapphire-bg.png"
	import bgPinque from "$lib/images/png/pinque-bg.png"
	import bgSigla from "$lib/images/png/sigla-bg.png"
	import bgXP from "$lib/images/png/xp-bg.png"
	import bgGuidon from "$lib/images/png/guidon-bg.png"
	import bgPsw from "$lib/images/png/psw-bg.png"
	import bgWeight from "$lib/images/png/weight-bg.png"
	import bgCalc from "$lib/images/png/calc-bg.png"
	import bgDict from "$lib/images/png/dict-bg.png"
	import bgGradgen from "$lib/images/png/gradgen-bg.png"
	import bgQR from "$lib/images/png/qr-bg.png"
	import bgNotes from "$lib/images/png/notes-bg.png"
	import bgVisual from "$lib/images/png/visual-bg.png"

	import rightAlpas from "$lib/images/svg/alpas-right.svg"
	import rightSapphire from "$lib/images/svg/sapphire-right.svg"
	import rightPinque from "$lib/images/svg/pinque-right.svg"
	import rightSigla from "$lib/images/svg/sigla-right.svg"
	import rightXP from "$lib/images/svg/xp-right.svg"
	import rightGuidon from "$lib/images/png/guidon-right.png"
	import rightPsw from "$lib/images/svg/psw-right.svg"
	import rightWeight from "$lib/images/svg/weight-right.svg"
	import rightCalc from "$lib/images/svg/calc-right.svg"
	import rightDict from "$lib/images/svg/dict-right.svg"
	import rightGradgen from "$lib/images/svg/gradgen-right.svg"
	import rightQR from "$lib/images/svg/qr-right.svg"
	import rightNotes from "$lib/images/svg/notes-right.svg"
	import rightVisual from "$lib/images/svg/visual-right.svg"

	let images = [
		{bg: welcome, right: welcome, link: "/"},
		{bg: bgAlpas, right: rightAlpas, link: "/artProjects/alpas"},
		{bg: bgSapphire, right: rightSapphire, link: "/artProjects/sapphire"},
		{bg: bgPinque, right: rightPinque, link: "/artProjects/pinque"},
		{bg: bgSigla, right: rightSigla, link: "/artProjects/sigla"},
		{bg: bgXP, right: rightXP, link: "/artProjects/xp"},
		{bg: bgGuidon, right: rightGuidon, link: "/artProjects/guidon"},
		{bg: bgPsw, right: rightPsw, link: "/"},
		{bg: bgWeight, right: rightWeight, link: "/"},
		{bg: bgCalc, right: rightCalc, link: "/"},
		{bg: bgDict, right: rightDict, link: "/"},
		{bg: bgGradgen, right: rightGradgen, link: "/"},
		{bg: bgQR, right: rightQR, link: "/"},
		{bg: bgNotes, right: rightNotes, link: "/"},
		{bg: bgVisual, right: rightVisual, link: "/"},
	]
</script>

<svelte:head>
	<title>Home: Projects</title>
	<meta name="description" content="Raccai/EJ Porfolio Version 1" />
</svelte:head>

<section>
	{#each images as image}
		<Card>
			<a href={image.link}>
				<img src={image.right} alt="right part of ticket for Alpas" class="right">
				<img src={image.bg} alt="background for Alpas" class="bg">
			</a>
		</Card>
	{/each}
</section>

<style>
	section {
		margin-left: auto;
		display: grid;
		grid-template-columns: repeat(2, 500px);
		gap: 30px;
		margin-top: -215px;
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

	@media (max-width: 1300px) {
		section {
			grid-template-columns: 500px;
		}
	}

	@media (max-width: 760px){
		section {
			margin-top: 30px;
		}
	}

</style>
