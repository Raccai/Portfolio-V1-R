<script>
	import Aside from './Aside.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<Aside />
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 10px 0 0 100px;
	}

	main {
		display: grid;
		grid-template-columns: 190px 1080px;
		padding: 0;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
	}
</style>
