<template>
  <div class="help_center">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <div class="mw8 center tl mb3">
        <h1>Help Center</h1>
        <p>Function/Components <span class="fw6">Undefined</span>. Basic Authentication Required.</p>
      </div>
      <div class="inner-content mw8 center pt4">
        <div class="w-100 pv5 ph5 bg-white tl">
          <p>The <span class="fw6">content</span> for this view is pending.</p>
          <ul class="mv3">
            <li><a class="blue underline">Admin FAQ</a></li>
            <li><a class="blue underline">Support Information</a></li>
            <li><a class="blue underline">Documentation</a></li>
            <li><a class="blue underline">Tutorials</a></li>
          </ul>
          <p>*<a href="visueats.com/support" target="_blank">visueats.com/support</a></p>
          <p>Dev Documentation <a href="http://presenting.xyz/presenting/visueats/" target="_blank">Open in new tab</a></p>
        </div><!-- /col -->
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