<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    const reset: () => void = () => {
        dispatch('resetPassword');
    }

    const login: () => void = () => {
        console.log("Login");
    }
</script>

<input type="text" placeholder="Логин">
<input type="password" placeholder="Пароль">
<button class="action" on:click={ login }>Войти</button>
<span class="sub_href">Забыли пароль?<button on:click={ reset }>Восстановить</button></span>

<style scoped>
    .sub_href {
        margin-top: calc(var(--padding-lg) * -1);
    }

    .sub_href:hover, .sub_href:focus {
        filter: brightness(1);
    }

    .sub_href button {
        background-color: transparent;
        color: var(--primary-color);
        border: none;
        cursor: pointer;
    }

    .sub_href button:hover {
        text-decoration: underline;
    }
</style>