<script>
    import alpasCredits from "$lib/images/jpg/alpas-credits.jpg"
    import alpasHeaderIntro from "$lib/images/jpg/alpas-header-img.jpg"
    import alpasAngelica from "$lib/images/jpg/alpas-angelica.jpg"
    import alpasIsko from "$lib/images/jpg/alpas-isko.jpg"
    import alpasMalaya from "$lib/images/jpg/alpas-malaya.jpg"
    import alpasMaria from "$lib/images/jpg/alpas-maria.jpg"
    import alpasNimuel from "$lib/images/jpg/alpas-nimuel.jpg"

    let characters = [
        {src: alpasAngelica, 
            h1: "Angelica", 
            p: "Angelica was described by Driector Pauline as \"Peaceful and soft-spoken given her past of abuse, yet is sympathetic and youthful\". " +
            "With that in mind, we opted to have her feel worried—a soft-expression, if you will, with her hand over her chest as a form of defense against the cruel world around her. " + 
            "It's as if she's unable to trust you, the viewer, too easily lest she regret it. " +
            "We coupled this with a simple shawl to exude simplicity in the character's life, all while ensuring her aura of caged trauma.", 
            alt: "angelica poster", 
            imgPos: "left"},
        {src: alpasIsko, 
            h1: "Isko", 
            p: "Isko is the bold, business-savvy college undergrad that some might loathe—as he was described. He's patronizing and sees himself as better than others simply" +
            "because of his wealth of business knowledge. Given this information, we made it so that Michael did not face the camera directly—as if saying \"you're not worth my time\". " +
            "With the poster, I decided to darken his already dark suit jacket and turtleneck to really hammer home is dark intentions and cunning intellect—and of course, his charisma" + 
            "you can't help but get mad over.", 
            alt: "isko poster", 
            imgPos: "right"},
        {src: alpasMalaya, 
            h1: "Malaya", 
            p: "Aggressive and patriotic with a pinch of irascibility—that is Malaya. She's not afraid to hurt you if you get in the way of what she believes is right—the means matter less " +
            "to her than the ends. She's a good person with overflowing lover for her country and desire to serve those in need despite her quick temper. Thus, to capture this, we had " + 
            "Paola wear something akin to the Barong Tagalog in design while holding the Philippine flag. A tad heavy-handed, but we believed that was the point with her character. " +
            "As icing on the cake, her stone-cold face shows not only her strength but her hard-headed approach to solving problems in front of her.", 
            alt: "malaya poster", 
            imgPos: "left"},
        {src: alpasMaria, 
            h1: "Maria", 
            p: "Maria is as simple as you can get—religious and righteous with thin-skin and a soft-heart. If you offend her once, she'll never forget it; and if you dare to question her " +
            "her family in any capacity, be ready for a stern sermon. To capture this, we decided to have Marycris stand simply, hand on her satchel strap. She faces the camera straight " +
            "as if saying she has nothing to hide. Add in her choice of clothing—showing as little skin as possible to stay true to her faith—and we feel like we did her character poster justice.", 
            alt: "maria poster", 
            imgPos: "right"},
        {src: alpasNimuel, 
            h1: "Nimuel", 
            p: "Nimuel is the kind of guy to go to parties at night despite the midnight deadline for his thesis. He's bold and careless most of the times, and he likes to flaunt " +
            "his masculinity with blatant machismo. His poster has him holding his necklace as if inspecting its quality and how it adds to his image, while his top is dark with very" +
            " short sleeves—after all, why wouldn't a man show off his hard work in the best color a man could wear? To top it all off, we had Myles sit sternly with a touch of smugness " +
            " to capture the entirety of Nimuel.", 
            alt: "nimuel poster", 
            imgPos: "left"},
    ]
</script>

<article>
    <section class="header-img">
        <img src={alpasHeaderIntro} alt="Alpas header">
    </section>

    <section class="intro">
        <h1>Synopsis</h1>
        <p>
            In a city of problems, four friends hustle through the college life of Manila.
            However, when one of the friends, Malaya, decides to finally help her orphaned friend, Angelica,
            Isko calls it stupid and irresponsible to help those that don't deserve it. As the group falls into pieces over provided aid without proper reason, Isko's
            reasons and methods to stop them from helping become clearer and clearer—and darker.
        </p>
    </section>
    
    <h1 class="short-study">Short Study</h1>
    <p>
        With the poster, I decided to go with a Filipino twist by adding Baybayin across the canvas considering the Filipino-centric nature of the short.
        The color orange was used as it fit the warm nature of the short—that is, when the sunlight hits the faces of the characters (as was planned) as they
        went through tragic circumstances in the short. Thus, to ensure consistency with this unique design, I opted to make the design the same for all characters with minor differences.
        Unfortunately, COVID-19 hit and derailed the entire short. However, we did plan as far as the posters and 
        screenplay. Here is a short study of each poster and how we approached each one.
    </p>
    {#each characters as character}
        {#if character.imgPos === "left"}
            <section class="character">
                <img src={character.src} alt={character.alt}>
                <div class="text">
                    <h1>{character.h1}</h1>
                    <p>{character.p}</p>
                </div>
            </section>
        {:else}
            <section class="character">
                <div class="text">
                    <h1>{character.h1}</h1>
                    <p>{character.p}</p>
                </div>
                <img src={character.src} alt={character.alt}>
            </section>
        {/if}
    {/each}

    <section class="credits">
        <img src={alpasCredits} alt="alpas credits">
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

    .short-study,
    .intro p {
        margin-bottom: -50px;
    }

    p {
        font-size: 20px;
        line-height: 40px;
    }

    .character {
        display: grid;
        grid-template-columns: repeat(2, 500px);
        align-items: center;
        gap: 60px;
    }

    .character img {
        width: 450px;
        border-radius: 20px;
        box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .credits {
        display: flex;
        flex-direction: column;
    }

    .header-img img,
    .credits img {
        width: 950px;
        border-radius: 30px;
        box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 1300px) {
		section {
			width: 700px;
		}

        .character {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 0px;
        }

        .header-img img,
        .credits img {
            width: 650px;
        }
	}

	@media (max-width: 760px){
        article {
            margin-left: auto;
            margin: 60px 0 0 0;
            color: white;
        }

        .header-img img,
        .credits img {
            width: 450px;
        }
	}

    @media (max-width: 600px) {
        article {
            text-align: center;
            margin-left: 45px;
        }

		section {
			width: 350px;
		}

        .character .text {
            width: 400px;
        } 

        .short-study + p {
            margin-left: -35px;
        }

        .header-img img,
        .credits img {
            margin-left: -50px;
            margin-bottom: -70px;
        }
	}
</style>