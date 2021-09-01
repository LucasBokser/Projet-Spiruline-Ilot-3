<template>
  <div>
    <h1>Fiche Revendeur</h1>
    <router-link :to="{name:'RecellersList',
      }"
    >
      <b-button variant="outline-primary">Back</b-button>
    </router-link><br>
    <ul>
      <label for="id">Id:</label>
      <p>
        <span id="id">{{ recellerBis.id }}</span>
      </p>

      <label for="name">name:</label>
      <p>
        <span id="name">{{ recellerBis.name }}</span>
      </p>

      <label for="description">description:</label>
      <p>
        <span id="description">{{ recellerBis.description }}</span>
      </p>

      <label for="latitude">latitude:</label>
      <p>
        <span id="latitude">{{ recellerBis.latitude }}</span>
      </p>

      <label for="longitude">longitude:</label>
      <p>
        <span id="longitude">{{ recellerBis.longitude }}</span>
      </p>

      <label for="supplier_id">supplier_id</label>
      <p>
        <span id="supplier_id">{{ recellerBis.supplier_id }}</span>
      </p>
    </ul>

    <!--<b-table striped hover :items="recellers"></b-table>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Receller",
  props: {
    receller: Object,
  },

  data() {
    return {
      recellerBis: {},
    };
  },

  methods: {
    getdata() {
      axios
        .get(
          "https://heroku-campus-suppliers.herokuapp.com/api/resellers/" +
            this.$route.params.id
        )
        .then((response) => {
          this.recellerBis = response.data;
          //console.log(response.data);
        })
        .catch(function(error) {
          this.error = error;
        });
    },
  },
  mounted() {
    if (this.receller === undefined) {
      console.log("reseller is empty");
      console.log(this.$route.params.id);
      this.getdata();
    } else {
      this.recellerBis = this.receller;
    }
  },
};
</script>

<style scoped>
div{
  background-color: #F6E6D1;
}
</style>
