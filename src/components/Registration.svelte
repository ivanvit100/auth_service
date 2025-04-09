<script lang="ts">
    const registration: () => void = () => {
        console.log("Login");
    }
</script>

<input type="text" placeholder="Имя">
<input type="text" placeholder="Логин">
<input type="password" placeholder="Пароль">
<input type="password" placeholder="Повторите пароль">
<button class="action" on:click={ registration }>Зарегистрироваться</button>

<style scoped>
</style>