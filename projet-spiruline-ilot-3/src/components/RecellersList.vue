<template>
  <div>
    <h1>RecellersList</h1>
    
    <Receller v-for="receller in recellers" 
    :key="receller.id" 
    :name="receller.name" 
    :description="receller.description" 
    :latitude="receller.latitude" 
    :longitude="receller.longitude"/>

    <b-table striped hover :items= "recellers"  ></b-table>
   
  <!-- <b-button variant="outline-primary">Accéder</b-button>-->

  </div>
</template>

<script>

import Receller from './Receller.vue'
const axios = require("axios");

export default {
  name: "RecellersList",
  components:{
    Receller,
  },

   data() {
      return {
          loading: false,
          error: null,
          recellers: [],
      }
    },

     created() {
    this.loading = true
    axios
      .get("https://heroku-campus-suppliers.herokuapp.com/api/suppliers")
      .then((response) => {
        console.log(response);
        this.suppliers = response.data;
        this.loading =false
      })
      .catch(function (error) {
        this.error = error
      })
      .then(function () {
        console.log("la fonction");
      });
  },
}
</script>



<style scoped>

</style>