<template>
  <div style="height: 80vh">
    
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
     <!-- <LMarker :lat-lng="[47.413220, -1.219482]"></LMarker>
      <LMarker :lat-lng="[46.193220, 4.82]"></LMarker>
      <LMarker :lat-lng="[45.193220, 6.82]"></LMarker>
      <LMarker :lat-lng="[47.03220, -0.9482]"></LMarker>
      <LMarker :lat-lng="[46.03220, 2.9482]"></LMarker>
      <LMarker :lat-lng="[50.03220, 2.9482]"></LMarker> -->
      <LMarker v-for="data in datas" :key="data.id" :lat-lng="[data.latitude, data.longitude]"></LMarker>

      
    </LMap>
  </div>
</template>


<script>


import axios from "axios";

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
    
  },
  data() {
    return {
     

    datas: [],
 
     
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [46.5322, 2.9482],
      bounds: null
    };
  },

methods: {
    getdata() {
      this.loading = true;
      axios
        .get("https://heroku-campus-suppliers.herokuapp.com/api/suppliers")
        .then((response) => {
          console.log(response.data.data)
          this.datas = response.data.data;
          this.loading = false;
        })
        .catch(function (error) {
          this.error = error;
        })
        .then(function () {});
    },
  },

  mounted() {
    this.getdata();
   // if (this.datas === undefined) {
     // this.$router.push('/');
  //  }
  }
};



</script>
<style scoped>

</style>