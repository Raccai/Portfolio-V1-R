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
		grid-template-columns: 1270px;
		padding: 0;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
	}

	@media (max-width: 1300px) {
		main {
			grid-template-columns: 740px;
		}
	}

	@media (max-width: 760px){
		main {
			grid-template-columns: 440px;
		}
	}

	@media (max-width: 600px) {
		.app {
			margin-left: 20px;
		}
	}
</style>
