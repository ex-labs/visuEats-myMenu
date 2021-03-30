<template>
  <div class="settings">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <div class="mw8 center tl mb3">
        <h1>Profile Settings</h1>
        <p><span class="fw6">Admin</span> Authentication Required.</p>
      </div>
      <div class="inner-content mw8 center pt4">
        <div class="w-100 tc pv6 bg-white">
          <p class="f2">Admin Profile CRUD Components</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  components: { 
        Sidebar,
      }
    }
</script>
<style scoped>

</style>