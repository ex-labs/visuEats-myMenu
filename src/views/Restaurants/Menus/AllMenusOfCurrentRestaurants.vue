<template>
  <div>
    <v-container>
      <v-row v-if="!loading">
        <div class="w-100">
          <div style="max-width: 150px; margin: auto">
            <img :src="restaurant.logo" class="w-100" />
          </div>
        </div>
        <template v-for="(v, k) in restaurant.menus">
          <v-col sm="12" md="12" lg="12" v-if="!v.archived" :key="k">
            <router-link
              :to="
                '/restaurants/' + $route.params.restaurantSlug + '/' + v.slug
              "
              style="text-decoration: none"
            >
              <v-card
                class="menuCat_card"
                :style="{ 'background-image': 'url(' + v.image + ')' }"
                style="background-size: cover; background-position: center"
              >
                <v-card-text>
                  <!-- img
                  :src="v.image"
                  width="200"
                  height="200"
                  style="object-fit: cover; object-position: center"
                / -->
                  <v-card-title primary-title class="menuCat_title relative">
                    {{ v.name }}</v-card-title
                  >
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </template>
      </v-row>
      <v-row v-else>
        <v-col>
          <v-progress-circular
            indeterminate
            size="70"
            color="primary"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: null,
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      var slug = this.$route.params.restaurantSlug;
      // this will get only the first matching record in the database which matched with the slug
      this.$fb
        .database()
        .ref("restaurants")
        .orderByChild("slug")
        .equalTo(slug)
        .limitToFirst(1)
        .once("value", (snap) => {
          var restaurant = snap.val();
          if (restaurant) {
            //  record found
            // setting the first restaurant

            this.restaurant = restaurant[Object.keys(restaurant)[0]];
            this.loading = false;
          } else {
            // slug is expired OR undefined
            // go back to restaurants
            this.$router.push("/restaurants");
          }
        });
    });
  },
};
</script>

<style>
/** Facking retarded vuetify overrides  */
.col {
  flex: none;
}

.menuCat_card:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ef9f9f9e;
}

.menuCat_title {
  color: #fff;
  font-size: 2em;
  padding: 1.5em 0;
  text-align: center;
  display: block;
}
</style>