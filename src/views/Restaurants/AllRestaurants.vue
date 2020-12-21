<template>
  <div>
    <v-container>
      <v-row v-if="!loading">
        <v-col md="4" v-for="(v, k) in restaurants" :key="k">
          <router-link
            :to="'/restaurants/' + v.slug"
            style="text-decoration: none"
          >
            <!-- v-card
              :style="{ 'background-image': 'url(' + v.uri + ')' }"
              style="background-size: cover; background-position: center"
            -->
            <v-card class="mx-auto my-12">
              <v-img height="250" :src="v.uri"></v-img>
              <v-card-title primary-title class="restoTitle">{{ v.name }}</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="parseInt(v.rating)"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="dn grey--text ml-4"><!-- we'll use when we have more data -->
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 subtitle-1">
                  {{ v.price }} • {{ v.tagline }}
                </div>

                <!-- div>Short Description</div -->
              </v-card-text>

            </v-card>
          </router-link>
        </v-col>
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
      restaurants: [],
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$fb
        .database()
        .ref("/restaurants")
        .once("value", (snap) => {
          console.log(snap.val());
          var tempArr = [];
          let restaurants = snap.val();
          for (var restaurant in restaurants) {
            var o = {};
            o = restaurants[restaurant];
            // o.id = restaurant                     uncommit it if you need id with the payload
            tempArr.push(o);
          }
          this.restaurants = tempArr;
          this.loading = false;
        });
    });
  },
};
</script>

<style>

  .restoTitle {
    color:#00a8ac;
    font-weight:700!important;
    padding-bottom:0px!important;
    display:block!important;
  }

  .v-rating {
    max-width: 300px;
    margin: auto;
  }

  .v-icon {
    color:rgb(228, 193, 129)!important;
  }

</style>