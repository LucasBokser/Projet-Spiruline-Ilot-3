
<template   >
  <div class="order-styles">
    <div class="orders">
      <h1>Order List</h1>


   <ul>
        <li><label for="id">Id:</label>
          <p><span id="id" >{{orderBis.id}}</span></p></li>
        <li><label for="number">Number :</label>
          <p><span id="number" >{{orderBis.number}}</span></p></li>
        <li><label for="date">Date:</label>
          <p><span id="date" >{{orderBis.date}}</span></p></li>
        <li><label for="price">Price:</label>
          <p><span id="price" >{{orderBis.price}}</span></p></li>
        <li><label for="customer_id">Customer id:</label>
          <p><span id="customer_id" >{{orderBis.customer_id}}</span></p></li>

      </ul>

    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Order",
      props:{
        order: Object

  },
  data() {
    return {
      orderBis: {},
    };
  },

  methods: {
    getdata() {

      axios //Création d'une promesse qui va contenir l'appel
          .get("https://heroku-campus-suppliers.herokuapp.com/api/orders/" + this.$route.params.id)
          .then((response) => { // Avec la méthode "then", on extrait les données
            console.log(response);
            console.log(response.data);
            this.orderBis = response.data; //  On retourne les données

          })
          .catch(function (error) {
            this.error = error;
          })

    },
  },
    mounted() {

      if (this.order === undefined) {
        console.log("order is empty");
        console.log(this.$route.params.id);
        this.getdata();


      } else {
        this.orderBis = this.order;
      }


    },

};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>