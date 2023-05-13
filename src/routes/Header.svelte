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
				<a href="/" class:active={$page.url.pathname==='/'}>Designs</a>
				<span class="dot"></span>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}>
				<a href="/">Codes</a>
				<span class="dot"></span>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">All Projects</a>
				<span class="dot"></span>
			</li>
		</ul>
		<ul>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class:active={$page.url.pathname==='/about'}>About</a>
				<span class="dot"></span>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/contact" class:active={$page.url.pathname==='/contact'}>Contact</a>
				<span class="dot"></span>
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
		object-fit: contain;
	}

	nav {
		display: grid;
		grid-template-columns: repeat(2, 200px);
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
		display: flex;
		align-items: center;
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

	.dot {
		transition: all 0.4s ease;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.active {
		color: var(--color-theme-1);
	}

	.active + .dot {
		height: 5px;
		width: 5px;
		display: inline-block;
		border-radius: 50%;
		background-color: var(--color-theme-1);
	}

	@media (max-width: 860px) {
		header {
			padding: 40px 30px 30px 0;
		}

		nav {
			grid-template-columns: repeat(2, 150px);
		}
	}

	@media (max-width: 700px) {
		nav {
			grid-template-columns: repeat(2, 100px);
		}
	}

	@media (max-width: 600px) {
		header {
			padding: 40px 30px 10px 0;
		}

		nav {
			grid-template-columns: repeat(2, 100px);
		}

		.all-gap {
			gap: 50px;
		}
	}
</style>
