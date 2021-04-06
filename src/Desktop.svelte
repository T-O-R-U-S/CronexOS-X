<script>
  import HelloWorld from "./apps/helloWorld.svelte";

  import AppLaunch from "./desktopComponent/appLaunch.svelte";
  import TopBar from "./desktopComponent/topBar.svelte";

  console.log(typeof TopBar);

  export let runningApps;

  console.log(runningApps);

  class app {
    constructor(icon, module, alt = "An app icon") {
      this.icon = icon;
      this.module = module;
      this.alt = alt;
    }
    launch() {}
  }

	

  let apps = [new app("/favicon.png")];
</script>

<main>
  <TopBar />
  <HelloWorld />
  <AppLaunch {apps} />
</main>
