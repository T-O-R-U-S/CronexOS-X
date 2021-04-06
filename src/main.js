import App from './Desktop.svelte';

const app = new App({
	target: document.body,
	props:{
		runningApps:[]
	}
});

export default app;