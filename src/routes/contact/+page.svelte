<script>
    const copyLinkedin = () => {
		navigator.clipboard.writeText("https://www.linkedin.com/in/jose-emmanuel-laurel-98b132207/");
    }

    const copyEmail = () => {
		navigator.clipboard.writeText("jose.laurel@obf.ateneo.edu");
    }

    const copyNumber = () => {
		navigator.clipboard.writeText("+639279524927");
    }
</script>

<article>
    <section id="text">
        <div class="line">
            <p class="word">break</p>
            <p class="word">----------------------</p>
            <p class="word">the</p>
        </div>
        <div class="line">
            <p class="word">old</p>
            <p class="word">----------------</p>
            <p class="word">standard</p>
        </div>
        <div class="line">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <p class="word break" id="linkedinCopy" on:click={copyLinkedin}>
                <span class="letter">@</span> 
                <span class="letter">l</span> <span class="letter">i</span>
                <span class="letter">n</span> <span class="letter">k</span>
                <span class="letter">e</span> <span class="letter">d</span>
                <span class="letter">i</span> <span class="letter">n</span>
            </p>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <p class="word break" id="emailCopy" on:click={copyEmail}>
                <span class="letter">@</span> 
                <span class="letter">e</span> <span class="letter">m</span>
                <span class="letter">a</span> <span class="letter">i</span>
                <span class="letter">l</span>
            </p>
        </div>
        <div class="line">
            <p class="word">CALL</p>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <p class="word break" id="numberCopy" on:click={copyNumber}>
                <span class="letter">+</span> <span class="letter">6</span> <span class="letter">3</span>
                <span class="letter">9</span> <span class="letter">2</span> <span class="letter">7</span>
                <span class="letter">9</span> <span class="letter">5</span> <span class="letter">2</span>
                <span class="letter">4</span> <span class="letter">9</span> <span class="letter">2</span>
                <span class="letter">7</span>
            </p>
        </div>
    </section>
</article>

<style>
    article {
        position: relative;
        margin-left: auto;
        margin: -225px 0 0 240px;
        color: white;
    }
    
    .line {
        display: flex;
        justify-content: space-between;
    }

    p {
        font-size: 5rem;
        margin: 0;
        text-transform: uppercase;
    }

    /* animation for the text */
    @keyframes infiniteBG {
        from {
            background-position: 0% center;
        }

        to {
            background-position: -200% center;
        }
    }

    .break {
        cursor: pointer;
    }

    .break > .letter {
        display: inline-block;
        transition: all 0.2s ease;
    }

    .break:hover > .letter {
        background: var(--gradient);
        background-size: 200%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: infiniteBG 2s linear infinite;
        transition: all 0.2s ease;
    }

    .break:hover > .letter:nth-child(1) {
        transform: translate(-60%, 30%) rotate(8deg);
    }

    .break:hover > .letter:nth-child(2) {
        transform: translate(-100%, -10%) rotate(3deg);
    }

    .break:hover > .letter:nth-child(3) {
        transform: translate(-85%, 24%) rotate(-5deg);
    }

    .break:hover > .letter:nth-child(4) {
        transform: translate(-40%, 34%) rotate(8deg);
    }

    .break:hover > .letter:nth-child(5) {
        transform: translate(-20%, -20%) rotate(3deg);
    }

    .break:hover > .letter:nth-child(6) {
        transform: translate(-14%, 60%) rotate(3deg);
    }

    .break:hover > .letter:nth-child(7) {
        transform: translate(-35%, 23%) rotate(4deg);
    }

    .break:hover > .letter:nth-child(8) {
        transform: translate(-30%, 10%) rotate(2deg);
    }

    .break:hover > .letter:nth-child(9) {
        transform: translate(-20%, -16%) rotate(4deg);
    }

    .break:hover > .letter:nth-child(10) {
        transform: translate(-35%, 60%) rotate(6deg);
    }

    .break:hover > .letter:nth-child(11) {
        transform: translate(25%, 30%) rotate(7deg);
    }

    .break:hover > .letter:nth-child(12) {
        transform: translate(10%, -30%) rotate(4deg);
    }

    .break:hover > .letter:nth-child(13) {
        transform: translate(-20%, 30%) rotate(2deg);
    }

    section:has(.break:hover) .word:not(.break:hover) {
        transition: all 0.2s ease;
        opacity: 0.2;
    }

    @media (max-width: 1300px) {
        article {
            margin-left: 230px
        }

		section {
			width: 650px;
		}

        p {
            font-size: 3rem;
        }
	}

	@media (max-width: 760px){
        article {
            margin-left: auto;
            margin: 60px 0 0 0;
            color: white;
        }

        section {
            width: 440px;
        }

        p {
            font-size: 2rem;
        }
	}
</style>