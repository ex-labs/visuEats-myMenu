<template>
  <div class="hello mw7 center">
    <h1 class="f1 f-headline-l ph5">Welcome to <span class="underline">{{ msg }}</span>.</h1>
    <!-- p>
      Are you a Restaurant owner?<br>
    </p -->
    <h3 class="mb2 f3 fw6">Available Soon</h3>
    <ul>
      <li class="w-25"><img class="pv2 w-100 animate__animated animate__bounce" alt="VE logo" src="../assets/badge-app-store.svg"></li>
      <li class="w-25"><img class="pv2 w-100 animate__animated animate__bounce" alt="VE logo" src="../assets/badge-google-play.png"></li>
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
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
