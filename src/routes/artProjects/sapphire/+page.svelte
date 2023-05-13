<script>
    import sapphire from "$lib/images/jpg/sapphire.jpg"
    import sapphireTitle from "$lib/images/svg/sapphire-updated-title.svg"
</script>

<article>
    <section class="header-img">
        <img src={sapphireTitle} alt="sapphire poster">
    </section>

    <section class="intro">
        <h1>Synopsis</h1>
        <p>
            In a world where everyone's looking for the "5 mil" to feel like they're part of something bigger, some people continue to live their fantasies of pure ecstasy. 
            When Billie and Sapphi, her close and eccentric friend, are forced to choose between that "5 mil" of fitting in and their exotic, fantastical paradise, 
            their friendship is put on the line. After all, what can "5 mil" do to a soul?
        </p>
    </section>

    <section class="short-study">
        <img src={sapphire} alt="">
        <div class="text">
            <h1>Short Study</h1>
            <p>The story is all about sacrificing youthful innocence to fit in with greater society. The story is mostly told through flashbacks as two detectives
                trying to solve the disappearance of a girl named "Billie". As they do, they find a diary detailing Billie's experience with losing a friend "Sapphi"
                by choosing this "5 mil" over her. <br><br> With mystery as the main theme coupled with tragedy and a bit of magic, I decided to make the poster feel rough 
                around the edges to capture that "mysterious" feel, while I made the contrast high for all images used to create a sense of dread for the characters.
                The ball, being significant in the story as the main point of contention, is colored to signify just that. <br><br> Lastly, the text is slanted to 
                communicate the disorienting feel of the short, and the color of the detective and the other characters are complementary to signify the importance
                of the main detective "Jayy" and how he relates to the other characters, which is revealed in the end of the short.
            </p>
        </div>
    </section>

    <a href="https://youtu.be/lkW87FZIUJg" target="_blank">
        <button>
            Click me to go and see "Sapphire" on Youtube
        </button>    
    </a>
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

    .short-study img {
        width: 550px;
        border-radius: 20px;
        box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .short-study{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 70px;
        margin-left: 40px;
    }

    .text {
        width: 450px;
    }

    p {
        font-size: 20px;
        line-height: 40px;
    }

    button {
        background-color: var(--color-bg-0);
        color: var(--color-text-2);
        border: 2px solid var(--color-theme-1);
        border-radius: 5px;
        margin: 10px 0 0 -150px;
        font-size: 25px;
        padding: 30px 50px;
        transition: all 0.2s ease;
    }

    button:is(:focus, :hover) {
        background-image: var(--gradient);
        color: var(--color-bg-0);
        border: 2px solid var(--color-bg-0);
    }

    @media (max-width: 1300px) {
        article {
            margin-left: 400px
        }

        button {
            margin-left: 50px;
        }

		section {
			width: 700px;
		}

        .short-study {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 0px;
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

        .short-study {
            text-align: center;
            margin-left: 0px;
        }

        .short-study .text,
        .short-study img {
            width: 400px;
        } 

        .short-study img {
            margin-left: 10px;
        }

        .header-img img {
            margin-left: -70px;
            margin-bottom: -70px;
        }

        button {
            margin-left: auto;
        }
	}
</style>