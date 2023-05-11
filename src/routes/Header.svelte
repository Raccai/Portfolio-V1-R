<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svg/Tao-logo.svg'
</script>

<header class="all-gap">
	<div class="logo">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="all-gap">
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Designs</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}>
				<a href="/">Codes</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">All Projects</a>
			</li>
		</ul>
		<ul>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.all-gap {
		gap: 100px;
	}

	header {
		display: flex;
		justify-content: left;
		padding: 40px 30px 30px 60px;
	}

	.logo {
		width: 5em;
		height: 5em;
	}

	.logo img {
		width: 5em;
		height: 5em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		height: 3em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		padding: 5.7px 0px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text-1);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
