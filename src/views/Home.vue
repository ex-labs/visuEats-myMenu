<template>
  <div class="home pt5">
    <img class="dn pv4 w-25 animate__animated animate__bounce" alt="VE logo" src="../assets/ve_color.png">
    <Welcome txt="now"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>

<style scoped>
  
  .home {
    background-image: url('https://www.visueats.com/wp-content/uploads/2020/04/breakslow-iGEivm-lkdQ-unsplash@2x.png');
    background-size: 100%;
    background-position: bottom;
    height: 100vh;
  }

</style>
