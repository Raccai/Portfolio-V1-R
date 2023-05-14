<script>
    import sigla from "$lib/images/jpg/sigla.jpg"
    import siglaTitle from "$lib/images/svg/sigla-title.svg"
</script>

<article>
    <section class="header-img">
        <img src={siglaTitle} alt="sigla title">
    </section>

    <section class="intro">
        <h1>About Series</h1>
        <p>
            Rixson and I believed teachers weren't machines; they had interests, too. Thus, we decided to have a similar series to Pinque where 
            we would interview teachers with creative interests and endeavors aside from teaching. COVID-19 derailed our plans, but it was worth
            the effort considering the increase in respect that we already had for teachers on and off campus.
        </p>
    </section>

    <section class="short-study">
        <img src={sigla} alt="gennica hugo poster">
        <div class="text">
            <h1>Gennica Hugo</h1>
            <p>
                Ma'am Gennica was unique. She had a dynamic, spontaneous teaching style that made everyone like her; she wasn't rigid or too strict,
                and she was a dreaming film director. As interviewed her, we learned about her big dreams and the sacrifices she made along the way to try
                and achieve that. <br><br> Thus, for the poster we decided to have her sit down, eyeing the viewer like a director would eye their actors
                on the set—with the desire to get the best out of them. With added yellow from a "light source" behind her, the final poster looked like
                it could have been taken on set, which is what we wanted given our limited resources.
            </p>
        </div>
    </section>

    <a href="https://thefuturechronicles.wixsite.com/thefuturechronicles/post/gennica-hugo-the-million-dollar-film-enthusiast" target="_blank">
        <button>
            Check out Gennica's interview here
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
        display: grid;
        margin-left: auto;
        grid-template-columns: repeat(2, 550px);
        gap: 60px;
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