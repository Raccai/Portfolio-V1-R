<script>
    import centerImg from "$lib/images/jpg/my-face-center.jpg"
    import rightImg from "$lib/images/jpg/my-face-right.jpg"
    import leftImg from "$lib/images/jpg/my-face-left.jpg"
</script>

<article>
    <section class="images">
        <img src={leftImg} alt="Cool duotone of me... I guess">
        <img src={centerImg} alt="Me standing with chad-like qualities">
        <img src={rightImg} alt="Me dabbing over Trumps star on walk of fame">
    </section>
    <section class="text">
        <h1>Hey, I'm EJ. Kumusta?</h1>
        <p>
            I’m a BS Computer Science Student from the Ateneo de Manila University, 
            interested in meshing the arts and technology to make lives better and to push people forward
            whether it be through film and television, or software and web development.
        </p>
        <p>
            I began my journey in high school in Riyadh when I volunteered to be the managing editor for our quiet 
            school publication <span>The Future Chronicles</span>. I then spearheaded in the creation of 
            two school publications that showcased school talent—both students and teachers alike—while dipping my toes into 
            the world of software through my internship at Al Jazirah Vehicles Agencies Co. Ltd. 
        </p>
        <p>
            As I continue to hone these skills and learn from peers in college by joining art-focused orgs and working on 
            web development projects outside of academe, being a designer at heart I enjoy working with people
            and enabling team and client satisfaction. Not only do I value <span>beautiful</span> designs backed by
            user accessibility, but I also desire <span>uniqueness</span> so everyone feels represented, even if it means
            doing the extra research.
        </p>
        <p>
            Outside of design and web development, I enjoy ring calisthenics despite the suffering. When I've completed
            my daily dose of exercise, I like to spend my time learning a new language (computer and human), and talking about
            how some day a Western team will win the League of Legends Worlds Tournament (any team will be fine... please).
        </p>
        <p>
            If you want to chat, check the footer or <a href="/contact">click me!</a>
        </p>
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

    /* images */
    .images {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 30%;
        border-radius: 10px;
        margin-bottom: -50px;
    }

    img:nth-child(2) {
        z-index: 5;
        box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
        margin: 0 -60px 50px -60px;
    }

    img:last-child {
        margin-bottom: 150px;
    }

    /* body/text */
    .text {
		display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: auto;
        width: 600px;
    }

    h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }

    h1,
    span {
        font-weight: bold;
        background: -webkit-linear-gradient(20deg, #FFAA33, #c04f26);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p,
    span {
        font-size: 20px;
        line-height: 40px;
    }
</style>