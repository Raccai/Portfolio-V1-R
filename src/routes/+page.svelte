<script>
	import Card from "./Card.svelte";

</script>

<svelte:head>
	<title>Home: Projects</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
</section>

<style>
	section {
		margin-left: auto;
		display: grid;
		grid-template-columns: repeat(2, 500px);
		gap: 30px;
		margin-top: 30px;
	}
</style>
