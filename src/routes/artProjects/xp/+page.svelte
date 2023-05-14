<script>
    import xpPoster from "$lib/images/png/xp-poster.png"
    import xpTitle from "$lib/images/svg/xp-title.svg"
    import xpframe from "$lib/images/png/xp-frame.png"
    import xpSched1 from "$lib/images/png/xp-sched1.png"
    import xpSched2 from "$lib/images/png/xp-sched2.png"
    import xpSched3 from "$lib/images/png/xp-sched3.png"
    import xpSched4 from "$lib/images/png/xp-sched4.png"
    import xpSched5 from "$lib/images/png/xp-sched5.png"
    import xpSched6V1 from "$lib/images/png/xp-sched6-v1.png"
    import xpSched6V2 from "$lib/images/png/xp-sched6-v2.png"
</script>

<article>
    <section class="header-img">
        <img src={xpTitle} alt="xp week title">
    </section>

    <section class="intro">
        <h1>About XP Week</h1>
        <p>
            XP Week is one of the premier events of the Computer Society of the Ateneo (CompSAt).
            It is here where new members get to meet their moderator, officers, fellow CompSAt members, and learn more about the different departments and projects in CompSAt.
        </p>
    </section>

    <section class="main-poster">
        <img src={xpPoster} alt="main xp week poster">
        <div class="text">
            <h1>XPERIENCE 2021 Main Poster</h1>
            <p>
                For the main poster, we decided to go a different route than what was expected. 
                Instead of just a futuristic approach to the theme, we opted to add game-like aspects inspired by Pokémon and other JRPG games.
                <br><br> The colors used were inspired by vaporwave, which we thought best communicated the game-like and futuristic themes
                of the event. Finally, we brought everything together—the characters we created, the vaporwave-inspired background, and the corgi
                mascot of CompSAt  "Corgear"—to finalize the main poster.
            </p>
        </div>
    </section>

    <section class="sched-posters">
        <div class="text">
            <h1>Short Study of Other Posters</h1>
            <p>For the remaining publication materials, I focused on creating "boss characters" that had their own unique characteristics
                related to computer science (i.e. Algorhythm being a play on the word algorithm)
                with game-like aspects—like a text-box for the announcement publications—
                to truly hammer home the theme of that year's XP week.</p>
        </div>
        <img src={xpSched1} alt="xp wee schedule poster 1">
        <img src={xpSched2} alt="xp wee schedule poster 2">
        <img src={xpSched3} alt="xp wee schedule poster 3">
        <img src={xpSched4} alt="xp wee schedule poster 4">
        <img src={xpSched5} alt="xp wee schedule poster 5">
        <img src={xpSched6V1} alt="xp wee schedule poster 6 Version 1">
        <img src={xpSched6V2} alt="xp wee schedule poster 6 Version 2">
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
        align-items: center;
    }

    .header-img img {
        width: 800px;
    }

    .main-poster img {
        width: 550px;
        border-radius: 20px;
        box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .main-poster{
        display: grid;
        margin-left: auto;
        grid-template-columns: repeat(2, 550px);
        gap: 60px;
    }

    .sched-posters img {
        width: 500px;
        border-radius: 20px;
        box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .sched-posters {
        margin-left: auto;
        display: grid;
        grid-template-columns: repeat(2, 500px);
        gap: 60px;
    }

    .text {
        width: 450px;
    }

    p {
        font-size: 20px;
        line-height: 40px;
    }

    @media (max-width: 1300px) {
        article {
            margin-left: 400px
        }

		section {
			width: 600px;
		}

        .main-poster {
            margin-left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 0px;
        }

        .sched-posters img {
            margin-left: -45px;
            width: 550px;
        }

        .sched-posters {
            margin-top: -50px;
            margin-left: 145px;
            grid-template-columns: 100px;
            gap: 40px;
        }

        .header-img img {
            width: 550px;
        }
	}

	@media (max-width: 760px){
        article {
            margin-left: auto;
            margin: 60px 0 0 0;
            color: white;
        }

        .header-img img {
            width: 450px;
        }
	}

    @media (max-width: 600px) {
		section {
			width: 350px;
		}

        .header-img {
            margin-left: 50px;
        }

        .intro {
            text-align: center;
            margin-left: 0px;
        }

        .intro p, h1 {
            margin-left: 5px;
        }

        .main-poster {
            text-align: center;
            margin-left: 0px;
        }

        .main-poster .text,
        .main-poster img {
            width: 400px;
        } 

        .main-poster img {
            margin-left: 10px;
        }

        .sched-posters img {
            margin-left: 0;
            width: 450px;
        }

        .sched-posters {
            margin: -100px 0 0 -100px;
            text-align: center;
            grid-template-columns: 400px;
            gap: 40px;
        }

        .header-img img {
            margin-left: -70px;
            margin-bottom: -70px;
        }
	}
</style>