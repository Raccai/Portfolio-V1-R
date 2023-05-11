<footer>
    <p>Want to talk? <a href="https://kit.svelte.dev">Hit me up</a> and let's get to work</p>
</footer>

<style>
    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
        color: var(--color-text-1);
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>