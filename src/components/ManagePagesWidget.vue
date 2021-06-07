<template>
    <div>
        <h4 class="f3 mb2">QR Code Generator</h4>
        <!-- p class="animate__animated animate__headShake animate__infinite red">Pending...</p -->
        <div class="pt3 mw6 center">
            <p class="f4">Use this widget to generate a specific QR code for any Restaurant in the database. Currently you can target only <span class="fw5 underline">WEB</span> based menus/users.</p>
            <div class="mt3 tl">
                <label class="fw7">Select a Restaurant</label>
                <select v-model="restoselected" class="bg-black-05 mt2 pa2 black w-100">
                    <!-- option value="" selected>Select a resto</option -->
                    <option v-for="resto in restaurants" 
                            v-bind:key="resto.id"
                            :value="resto.slug">
                            {{ resto.name }}
                    </option>
                </select>
                <!--v-select //issue loading data
                    v-model="restoselected"
                    :items="restaurants.name"
                    label="Label"
                ></v-select -->
            </div>
            <div class="mt3 tl">
                <div class="mv2 f6"><span class="fw5">You Selected:</span> https://mymenu.visueats.com/restaurants/{{ restoselected }}</div>
                <div class="db">
                    <button class="ph3 pv2 bg-gold" @click="getqr">Generate</button>
                </div>
                <div class="mt3 w-100">
                    <img id="myImage">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            data() {
                return {
                    restaurants: [],
                    loading: true,
                    restoselected: null,
                    items: []

                };
            },
            mounted() {
                this.getlist();
            },
            created() {
                console.log("created");
                //this.getlist();
            },
            methods: {
                getlist() {
                    this.$nextTick(() => {
                    this.$fb
                        .database()
                        .ref("/restaurants")
                        .once("value", (snap) => {
                        console.log(snap.val());
                        var tempArr = [];
                        let restaurants = snap.val();
                        //console.log("Restos ", restaurants);
                        for (var restaurant in restaurants) {
                            var o = {};
                            o = restaurants[restaurant];
                            // o.id = restaurant                     uncommit it if you need id with the payload
                            tempArr.push(o);
                        }
                        this.restaurants = tempArr;
                        this.loading = false;
                        console.log("Restos ", this.restaurants);
                        });
                    });
                },
                getqr() {
                    var requestOptions = {
                        method: 'GET',
                        //redirect: 'follow'
                    };

                    var url = new URL("https://api.qrserver.com/v1/create-qr-code/?");
                    var s_params = url.searchParams;

                    var spath = 'https://mymenu.visueats.com/restaurants/'+this.restoselected;

                    s_params.append('data', spath);
                    s_params.append('size', '300x300');

                    url.search = s_params.toString();

                    var new_url = url.toString();

                    console.log(new_url)
                
                    fetch(new_url, requestOptions)
                    .then(response => {
                        return response.blob()
                    })
                    .then(result => {
                        console.log(result)
                        //this.raw = result;
                        this.processimg(result)//
                    })
                    .catch(error => console.log('error', error));
                },
                processimg(data) {
                    
                    this.raw = data;
                    // convert to Base64
                    const urlCreator = window.URL || window.webkitURL;
                    document.getElementById('myImage').src = urlCreator.createObjectURL(data);

                }
                
            }, //methods
            
    }
</script>

<style scoped>  
    select {
        -moz-appearance: auto;
        -webkit-appearance: auto;
    }

</style>