<script>
	import { fade, scale } from 'svelte/transition';
	import Card from "./Card.svelte";
	import { Filtered } from "../stores/TypeStore";
</script>

<svelte:head>
	<title>Home: Projects</title>
	<meta name="description" content="Raccai/EJ Porfolio Version 1" />
</svelte:head>

<section>
	{#each $Filtered as image (image.id)}
		<div in:fade>
			<Card>
				<a href={image.link}>
					<img src={image.right} alt="right part of ticket for Alpas" class="right">
					<img src={image.bg} alt="background for Alpas" class="bg">
				</a>
			</Card>
		</div>
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
