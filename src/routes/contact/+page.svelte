<script>
    import underConst from "$lib/images/svg/under-const.svg"
</script>

<article>
    <section>
        <img src={underConst} alt="under construction">
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
    
    @media (max-width: 1300px) {
		section {
			width: 700px;
		}
	}

	@media (max-width: 760px){
        article {
            margin-left: auto;
            margin: 60px 0 0 0;
            color: white;
        }

		section {
			width: 500px;
            align-items: flex-start;
		}
	}

    @media (max-width: 600px) {
		section {
			width: 450px;
		}
	}
</style>