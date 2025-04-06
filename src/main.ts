import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        logoPath: "/images/logo.png",
        primaryColor: "#E23127",
        AppName: "Lorem Ipsum",
    }
});

export default app;