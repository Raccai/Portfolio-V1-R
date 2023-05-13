<script>
    import alpasCredits from "$lib/images/jpg/alpas-credits.jpg"
    import alpasAll1 from "$lib/images/jpg/alpas-all1.jpg"
    import alpasAll2 from "$lib/images/jpg/alpas-all2.jpg"

    let characters = [
        {img: "", h2: "Angelica", p: "", alt: ""},
        {img: "", h2: "Isko", p: "", alt: ""},
        {img: "", h2: "Malaya", p: "", alt: ""},
        {img: "", h2: "Maria", p: "", alt: ""},
        {img: "", h2: "Nimuel", p: "", alt: ""},
    ]
</script>

<article>
    <section class="header-img">
        
    </section>

    <section class="intro">
        <img src="" alt="">
        <p></p>
    </section>

    {#each characters as character}
        <section class="character">
            <img src={character.img} alt={character.alt}>
            <div class="text">
                <h2>{character.h2}</h2>
                <p>{character.p}</p>
            </div>
        </section>
    {/each}

    <section class="end">
        <div class="showcase-all">
            <img src={alpasAll1} alt="all alpas posters part 1">
            <img src={alpasAll2} alt="all alpas posters part 2">
        </div>
        <div class="credits">
            <img src={alpasCredits} alt="alpas credits">
        </div>
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

    .end {
        display: flex;
        flex-direction: column;
        gap: 100px;
    }

    .end img {
        width: 1150px;
        border-radius: 30px;
        box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.2);
    }

    .end .showcase-all {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .end .showcase-all img {
        border-radius: 0;
    }

    .end .showcase-all img:first-child {
        border-radius: 30px 30px 0 0;
    }

    .end .showcase-all img:last-child {
        border-radius: 0 0 30px 30px;
    }
</style>