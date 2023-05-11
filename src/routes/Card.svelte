<script>
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="main-div" tabindex="0">
    <div class="img">
        <slot name="right" />
        <slot name="bg"/>
    </div>
</div>

<style>
    .main-div {
        background-color: var(--color-bg-0);
        height: 200px;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease;
        background: white;
    }

    .main-div:is(:focus,:hover) {
        transform: scale(1.03);
    }
</style>