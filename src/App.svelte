<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    import Auth from "./pages/Auth.svelte";
    import NotFound from "./pages/404.svelte";

    export let logoPath: string = "/logo.png";
    export let primaryColor: string = "#007bff";
    export let AppName: string = "Authenticator";

    onMount(() => {
        document.documentElement.style.setProperty('--primary-color', primaryColor);
    });

    $: {
        typeof document !== 'undefined' && document.documentElement.style.setProperty('--primary-color', primaryColor);
    }

    export const theme = writable("light");
    export const currentPage = writable("home");

    const routes: Record<string, any> = {
        "auth": Auth,
    };

    const updatePage = () => {
        const page = window.location.hash.slice(1) || "login";
        currentPage.set(page);
    };

    onMount(() => {
        updatePage();
        window.addEventListener("hashchange", updatePage);
        return () => {
            window.removeEventListener("hashchange", updatePage);
        };
    });

    $: pageComponent = routes[$currentPage.toLowerCase().slice(1)] || NotFound;
</script>

<svelte:head>
    <title>{AppName}</title>
</svelte:head>

<div class="app" class:dark={$theme === "dark"}>
    <header>
        <img src={logoPath} alt="Logo" class="logo" />
    </header>

    <main>
        <div class="modal">
            <svelte:component this={pageComponent} AppName={AppName}/>
        </div>
    </main>
</div>

<style>
    :global(:root) {
        --primary-color: #007bff;
    }
</style>