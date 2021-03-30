<template>
  <div class="managepages">
    <sidebar></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <div class="inner-content mw8 center pt4 shadow-1 ve_accent_bg">
        <div class="tl mb3 ph3">
          <h1 class="mb1">Manage Pages</h1>
          <p class="mv0"><span class="fw6">DEMO ONLY</span>. Manage Pages and specific <span class="fw6">Menu customization options</span>. Authentication Required.</p>
        </div>
        <div class="w-100">
            <div class="w-100 bg-light-gray b--black-05 bt pv4 ph4 flex">
              <div class="w-80 tl">Language Page</div>
              <div class="w-20 pointer" @click="clickalert"><i class="material-icons">list</i></div>
            </div>
            <div class="w-100 bg-light-gray b--black-05 bt pv4 ph4 flex">
              <div class="w-80 tl">Audio Feature</div>
              <div class="w-20 pointer" @click="clickalert"><i class="material-icons">link</i></div>
            </div>
            <div class="w-100 bg-light-gray b--black-05 bt pv4 ph4 flex">
              <div class="w-80 tl">Display Restaurant Logo</div>
              <div class="w-20 pointer" @click="clickalert"><i class="material-icons">link</i></div>
            </div>
            <div class="w-100 bg-light-gray b--black-05 bt pv4 ph4 flex">
              <div class="w-80 tl">Display Background Image</div>
              <div class="w-20 pointer" @click="clickalert"><i class="material-icons">link</i></div>
            </div>
            <div class="w-100 bg-light-gray b--black-05 bt pv4 ph4 flex">
              <div class="w-80 tl">Upload Background Image</div>
              <div class="w-20 pointer" @click="clickalert"><i class="material-icons">upload</i></div>
            </div>
            <div class="w-100 bg-light-gray b--black-05 bt pv4 ph4 flex">
              <div class="w-80 tl">Display Sponsor Logo</div>
              <div class="w-20 pointer" @click="clickalert"><i class="material-icons">check</i></div>
            </div>
            <div class="w-100 bg-light-gray b--black-05 bt pv4 ph4 flex">
              <div class="w-80 tl">Upload Sponsor Logo</div>
              <div class="w-20 pointer" @click="clickalert"><i class="material-icons">upload</i></div>
            </div>
        </div>
        <div class="w-100">
            <div class="w-100 bg-white bt b--black-05 pv4 ph4 flex">
              <div class="w-80 tl">
                <label>Keep Default</label>
              </div>
              <div class="w-20"><input type="checkbox" class="w-80 pa3" checked></div>
            </div>
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
      },
  data(){
      return {
        categories: [ 
          { Name: "Language"}, 
          { Name: "Entree" }, 
          { Name: "Dessert" }, 
          { Name: "Beverage" }, 
          { Name: "Crowd Pleaser"}]
      }
    }, //data
    methods: {
      clickalert () {
        alert("This feature is for DEMO purposes only")
      }
    }
  }
</script>
<style scoped>

  .main-content {
    overflow: scroll;
  }

</style>