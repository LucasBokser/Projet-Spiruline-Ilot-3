<template>

  <div style="height: 80vh">
    <h1>Localisation des revendeurs</h1>

    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker
        v-for="dataMap in datasMap"
        :key="dataMap.id"
        :lat-lng="[dataMap.latitude, dataMap.longitude]"
      ></LMarker>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import axios from "axios";

export default {
  name: "RecellersMap",

  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      datasMap: [],
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [46.5322, 2.9482],
      bounds: null,
    };
  },
  methods: {
    getdata() {
      axios
        .get("https://heroku-campus-suppliers.herokuapp.com/api/resellers")
        .then((response) => {
          console.log(response);
          this.datasMap = response.data.data;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },

  mounted() {
    this.getdata();
  },
};
</script>

<style scoped>
div{

  background-color: #F6E6D1;
}
</style>
