<script>
    import behance from '$lib/images/svg/behance.svg';
    import linkedin from '$lib/images/svg/linkedin-logo.svg'
    import github from '$lib/images/svg/github.svg'
</script>

<aside>
    <a href="https://www.behance.net/raccai" target="_blank">
        <img src={behance} alt="Behance" class="set-width-opacity">    
    </a>
    <a href="https://github.com/Raccai" target="_blank">
        <img src={github} alt="Github" class="set-width-opacity">    
    </a>
    <a href="https://www.linkedin.com/in/jose-emmanuel-laurel-98b132207/" target="_blank">
        <img src={linkedin} alt="Linkedin" class="set-width-opacity">    
    </a>
</aside>

<style>
    .set-width-opacity {
        width: 40px;
        opacity: 0.7;
        transition: all 0.4s ease;
    }

    aside {
        position: sticky;
        top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        margin: 30px 0 0 0;
        width: 190px;
    }

    a img:is(:focus, :hover) {
        opacity: 1;
    }

    @media (max-width: 760px) {
		aside {
			display: none;
		}
	}
</style>