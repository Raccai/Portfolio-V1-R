<script>
    import pinqueTitle from "$lib/images/svg/pinque-title.svg"
    import arianne from "$lib/images/jpg/pinque-arianne.jpg"
    import danielle from "$lib/images/jpg/pinque-danielle.jpg"
</script>

<article>
    <section class="header-img">
        <img src={pinqueTitle} alt="sapphire poster">
    </section>

    <section class="intro">
        <h1>About Series</h1>
        <p>
            This series was created by me and my good friend and talented photographer <span>Rixson Mercado</span> as a way to shine a light on
            our school's talented artists through interviews that revealed their interests, struggles, and dreams going forward. Given the academic-focused 
            nature of our school, we believed this series would provide a breath of fresh air for the artistic community on-campus and hopefully
            inspire them toe grow as artists, even if it wasn't going to be within the boundaries of the school campus.
        </p>
    </section>

    <h1>Short Study</h1>
    <p class="short-study-text">
        For each poster, we did our best to revisit the interview for each artist frequently to carefully plot the unique aspect of each design and truly communicate
        each artist's highlights as creatives. We actively communicated with the artists to get their feedback, and in the case of Danielle, worked side-by-side to
        achieve the final product.
    </p>

    <section class="arianne interview-container">
        <img src={arianne} alt="arianne's poster">
        <div class="text">
            <h1>Rey Arianne</h1>
            <p>Through Arianne's interview, we discovered her love for dancing and how she wished to push through with that despite the struggles of maintaining
                top grades in an academically-competitive school. To add, she lamented the pressure her parents had put on her to succeed academically while restating
                her love for them. <br><br> With this, Rixson opted to have her picture be sombre and tranquil, as if she were dwelling on her future as a dancer, or even
                letting life control her flow in the wind. To complement this, I stuck with the theme of pink for the series and made the poster as minimal as possible to capture 
                a dancer's moment of peace in a hectic life.
            </p>
            <a href="https://thefuturechronicles.wixsite.com/thefuturechronicles/post/the-dancer-who-never-gave-up" target="_blank">
                <button>
                    Check out Arianne's interview here
                </button>    
            </a>
        </div>
    </section>

    <section class="danielle interview-container">
        <img src={danielle} alt="danielle's poster">
        <div class="text">
            <h1>Danielle Baldono</h1>
            <p>Danielle is a bold, unafraid, and driven glory-seeking artist who was not afraid of voicing her thoughts. With her collection of canvas paintings and desire for 
                success, I thought it would be best if we actively collaborated with her. With this, she was a constant voice in the design process.<br><br> 
                Rixson opted to have her look busy in the photo, which is apt considering she was not only studying to become and Astrophysicist at the time, but she was also
                creating art and participating in galleries. Thus, I made the poster look busy, the text behind her the quotes from her interview—the thoughts running through
                her head. I also tried toning down the pink layer of color this time as I began regretting dousing Arianne in it.
                With Danielle's final input of adding a shattered effect to the edges around her, the final product was almost complete—we just needed a bit more pink.
            </p>
            <a href="https://thefuturechronicles.wixsite.com/thefuturechronicles/post/danielle-baldono-the-multimedia-astrophysicist" target="_blank">
                <button>
                    Check out Danielle's interview here
                </button>    
            </a>
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
        gap: 50px;
    }

    .intro p {
        margin-bottom: -40px;
    }

    .header-img img {
        width: 1000px;
    }

    .short-study-text {
        margin: -40px 0 0 0;
    }

    .interview-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

    .interview-container img {
        width: 500px;
    }

    .text {
        width: 550px;
    }

    p {
        font-size: 20px;
        line-height: 40px;
    }

    span {
        font-weight: bold;
        background: -webkit-linear-gradient(20deg, #FFAA33, #c04f26);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    button {
        background-color: var(--color-bg-0);
        color: var(--color-text-2);
        border: 2px solid var(--color-theme-1);
        border-radius: 5px;
        margin-top: 10px;
        font-size: 20px;
        padding: 20px 50px;
        transition: all 0.2s ease;
    }

    button:is(:focus, :hover) {
        background-image: var(--gradient);
        color: var(--color-bg-0);
        border: 2px solid var(--color-bg-0);
    }
</style>