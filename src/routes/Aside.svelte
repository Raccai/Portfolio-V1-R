<script>
    import behance from '$lib/images/behance.svg';
    import linkedin from '$lib/images/linkedin-logo.svg'
    import github from '$lib/images/github.svg'
</script>

<aside>
    <a href="https://github.com/Raccai" target="_blank">
        <img src={behance} alt="Behance" class="set-width-opacity">    
    </a>
    <a href="https://www.behance.net/raccai" target="_blank">
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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
        margin-top: 30px;
        width: 190px;
        position: relative;
        left: 0;
    }

    a img:is(:focus, :hover) {
        opacity: 1;
    }
</style>