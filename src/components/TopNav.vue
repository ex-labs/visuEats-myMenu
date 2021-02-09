<template>
  <div id="nav">
    <nav class="flex justify-between bb b--white-10 ve_primary_bg">
      <a
        class="logo link white-70 hover-white no-underline flex items-center pa3"
        href=""
        @click="backHome"
      >
        <img src="../assets/ve_light.png" alt="VisuEats" />
      </a>
      <div class="flex-grow pa3 flex items-center">
        <router-link to="/" class="f6 link dib white dim mr3 mr4-ns"
          >Download the App</router-link
        >
        <router-link to="/restaurants" class="f6 link dib white dim mr3 mr4-ns"
          >Explore Menus</router-link
        >
        <!--router-link to="/register" class="f6 link dib white dim mr3 mr4-ns"
          >Register</router-link
        -->
        <!--router-link
          to="/login"
          v-if="!LoggedIn"
          class="f6 dib Uwhite bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
          >Sign In</router-link
        -->
        <!-- router-link
          to="/logout"
          v-else
          class="f6 dib Uwhite bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
          >Logout</router-link
        -->
        <!-- span
          class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
          >{{ LoginState }}</span
        -->
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  // created(){
  //     firebase.auth().onAuthStateChanged(user=>{
  //         if(user){
  //             this.LoggedIn = true;
  //             this.LoginState = "Logged In";
  //         } else {
  //             this.LoggedIn = false;
  //             this.LoginState = "Logged Out";
  //         }
  //     })
  // },
  data() {
    return {
      LoggedIn: false,
      LoginState: "Logged Out",
    };
  },
  watch: {
    getUser: {
      handler(user) {
        if (user) {
          this.LoggedIn = true;
          this.LoginState = "Logged In";
        } else {
          this.LoggedIn = false;
          this.LoginState = "Logged Out";
        }
      },
      immediate: true,
    },
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log("signoutdata ", data);
        this.$router.replace({ name: "Login" });
      } catch (err) {
        console.log(err);
      }
    },
    signIn() {
      this.$router.replace({ name: "Login" });
    },
    backHome() {
      this.$router.replace({ name: "Restaurants" });
    },
  }, //Methods
};
</script>

<style scoped>
.logo img {
  max-width: 100px;
}

.flex {
  flex:none;
}

.Uwhite {
  color:#fff!important;
}

.Uwhite:hover {
  color:rgb(212, 199, 199)!important;
}

</style>