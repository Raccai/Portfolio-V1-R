<script>
    const submitHandler = () => {
        // do something
    }
</script>

<form on:submit|preventDefault = {submitHandler}>
    <div class="input-container">
        <div class="form-input">
            <label for="Name">Name*</label>
            <input type="text">
        </div>
        <div class="form-input">
            <label for="email">Email*</label>
            <input type="email">
        </div>
        <div class="form-input">
            <label for="subject">Subject*</label>
            <input type="text">
        </div>
        <div class="form-input">
            <label for="message">Message*</label>
            <textarea name="message" class="message" cols="30" rows="10"></textarea>
        </div>
    </div>

    <button>Submit</button>
</form>

<style>
    form {
        position: relative;
        margin-left: auto;
		display: flex;
        flex-direction: column;
        align-items: center;
        margin: -225px 0 0 240px;
        color: white;
    }

    .input-container {
        width: 800px;
    }

    label {
        font-family: var(--font-body);
        font-weight: bold;
        font-size: 20px;
        line-height: 40px;
    }

    input, 
    textarea {
        font-size: 18px;
        border: none;
        border-radius: 10px 10px 0 0;
        border-bottom: 2px solid var(--color-theme-1);
        background-color: var(--color-bg-1);
        color: var(--color-text-2);
    }

    input {
        height: 30px;
    }

    .message {
        resize: none;
    }

    .form-input {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form-input:not(:first-child) {
        margin: 25px 0 0 0;
    }

    button {
        background-color: var(--color-bg-0);
        color: var(--color-text-2);
        border: 2px solid var(--color-theme-1);
        border-radius: 5px;
        margin-top: 30px;
        font-size: 20px;
        padding: 10px 30px;
        transition: all 0.2s ease;
    }

    button:is(:focus, :hover) {
        background-image: var(--gradient);
        color: var(--color-text-2);
        border: 2px solid var(--color-bg-0);
    }
</style>