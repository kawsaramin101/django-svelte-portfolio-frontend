<script>
    import IsDarkTheme from '../stores/IsDarkTheme.js';
    
    function handleToggle() {
        IsDarkTheme.update((prev) => !prev)
        window.document.body.classList.toggle('dark-mode')
    }
</script>


<input name="toggle-theme" type="checkbox" id="theme-switch" class="toggle is-small" on:change={handleToggle}/>

<style>
    input[type=checkbox] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
    }
    input[type=checkbox]:focus {
        outline: 0;
    }

    .toggle {
        height: 32px;
        width: 52px;
        border-radius: 16px;
        display: inline-block;
        position: relative;
        margin: 0;
        border: 2px solid #654FEC;
        background: #ffffffe6;
        background: linear-gradient(180deg, #2D2F39 0%, #1F2027 100%);
        transition: all 0.2s ease;
    }
    .toggle:after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: white;
        box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
        transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
    }
    .toggle:checked {
        border-color: #474755;
    }
    .toggle:checked:after {
        transform: translatex(20px);
    }
</style>