<script>
  let time = new Date();
  setInterval(()=>time = new Date(), 1000)
</script>

<h5 id="time">{time}</h5>

<style>
  #time {
    padding: 2px;
    float: left;
    width: 100%;
    background-color: rgb(177, 189, 255);
    text-shadow: 4px 2px rgb(175, 175, 175);
  }
</style>