<script>
  export let apps;
</script>

<style>
  h3 {
    position: absolute;
    bottom: 0;
    padding: 5px;
    width: 100%;
    background-color: rgb(177, 189, 255);
  }
  button {
    margin-right: 5px;
    background-color: rgb(178, 177, 255);
  }
</style>

<h3>
  {#each apps as app}
    <button on:click={undefined}><img src={app.icon} alt="App icon" style="height: 32px"></button>
  {/each}
</h3>