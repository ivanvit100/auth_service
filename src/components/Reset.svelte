<script lang="ts">
    const reset: () => void = () => {
        console.log("Login");
    }
</script>

<input type="text" placeholder="Логин">
<button class="action" on:click={ reset }>Отправить код</button>

<style scoped>
</style>