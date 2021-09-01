<template>
  <div id="fournisseur">
    
    
    <br />
  
    <ul>
      <label for="nom">Name:</label>
      <p>
        <span id="id">{{ supplierBis.name }}</span>
      </p>
      <label for="id">Id:</label>
      <p>
        <span id="id">{{ supplierBis.id }}</span>

        <label for="latitude">latitude:</label>
      </p>

      <p>
        <span id="latitude">{{ supplierBis.latitude }}</span>
      </p>
      <label for="longitude">longitude:</label>
      <p>
        <span id="longitude">{{ supplierBis.longitude }}</span>
      </p>
    </ul>




  </div>



</template>






<script>
import axios from "axios";
export default {
  name: "Supplier",
  props: {
    supplier: Object,
  },

  data() {
    return {
      supplierBis: {},
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
        console.log(response)

        //si requete : 200 ça va m'afficher mon tableau d'objet
        // catch : si ya une erreur , il affiche l'erreur

          this.supplierBis = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          this.error = error;
        })
    },
  },
  mounted() {
    if (this.supplier === undefined) {
      console.log("reseller is empty");
      console.log(this.$route.params.id);
      this.getdata();
    } else {
      this.supplierBis = this.supplier;
    }
  },
};
</script>





<style scoped>
.red {
  color: red;
}
.green {
  color: #42b983;
}
#displayTrue {
  border: 1px black solid;
  margin: 10px;
}
#displayFalse {
  border: 1px black solid;
  margin: 10px;
}
</style>