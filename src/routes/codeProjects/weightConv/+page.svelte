<script>
    import underConst from "$lib/images/svg/under-const.svg"
</script>

<article>
    <section>
        <img src={underConst} alt="under construction">
    </section>
    <section>
        <h1>In the meantime...</h1>
        <p>Check the project out on github by <a href="https://github.com/Raccai/Weight-Converter-R" target="_blank">clicking me.</a></p>
    </section>
</article>

<style>
    article {
        position: relative;
        margin-left: auto;
		display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: -225px 0 0 240px;
        color: white;
    }

    section {
        width: 900px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    section p {
        font-size: 20px;
    }
</style>