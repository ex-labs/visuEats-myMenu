<template>
  <div class="hello mw7 center">
    <h1 class="f1 f-headline-l ph5 white">Available <span class="underline">{{ txt }}</span>.</h1>
    <!-- p>
      Are you a Restaurant owner?<br>
    </p -->
    <!-- h3 class="mb2 f3 fw6">Download Now</h3 -->
    <ul>
      <li class="w-25">
        <a href="https://apps.apple.com/us/app/visueats/id1548810661" target="_blank">
          <img class="pv2 w-100 animate__animated animate__bounce" alt="VE logo" src="../assets/badge-app-store.svg">
        </a>
      </li>
      <li class="w-25">
        <a href="https://play.google.com/store/apps/details?id=com.visueats.visuEats" target="_blank">
          <img class="pv2 w-100 animate__animated animate__bounce" alt="VE logo" src="../assets/badge-google-play.png">
        </a>
      </li>
    </ul>
    <div class="dn dev-footer absolute w-100">
      <p style="font-size:12px">Admin resource: <a href="http://presenting.xyz/presenting/visueats/" target="_blank" rel="noopener">visuEats Platform documentation</a>. Remove for <span class="fw6">Production</span>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    txt: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  text-shadow: 5px 5px 50px #000;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.dev-footer {
  bottom:10px;
}

</style>
