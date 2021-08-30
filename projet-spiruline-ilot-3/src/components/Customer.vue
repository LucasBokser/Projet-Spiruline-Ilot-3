<template>

  <div>

    <!-- <b-table striped hover :items="customer">{{ customerBis.id }}</b-table> -->

    <ul>
      <li><label for="id">Id:</label>
        <p><span id="id">{{ customerBis.id }}</span></p></li>
      <li><label for="firstName">Name :</label>
        <p><span id="firstName">{{ customerBis.firstName }}</span></p></li>
      <li><label for="lastName">last name:</label>
        <p><span id="lastName">{{ customerBis.lastName }}</span></p></li>
      <li><label for="email">email:</label>
        <p><span id="email">{{ customerBis.email }}</span></p></li>
      <li><label for="codePostal">Code postal:</label>
        <p><span id="codePostal">{{ customerBis.codePostal }}</span></p></li>
      <li><label for="city">City:</label>
        <p><span id="city">{{ customerBis.city }}</span></p></li>
      <li><label for="address">address:</label>
        <p><span id="address">{{ customerBis.address }}</span></p></li>
      <li><label for="phoneNumber">Numero de telephone:</label>
        <p><span id="phoneNumber">{{ customerBis.phoneNumber }}</span></p></li>
    </ul>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Customer",
  props: {
    customer: Object
  },
  data() {
    return {
      customerBis: {},
    };
  },
  methods: {
    getdata() {
      this.loading = true
      axios
          .get("https://heroku-campus-suppliers.herokuapp.com/api/customers/" + this.$route.params.id)
          .then((response) => {
            //console.log(response);
            //console.log(response.data);
            this.customerBis = response.data;
            this.loading = false;
          })
          .catch(function (error) {
            this.error = error;
          })
          .then(function () {
          });
    },
  },
  mounted() {
    if (this.customer === undefined) {
      console.log("reseller is empty");
      console.log(this.$route.params.id);
      this.getdata();
    } else {
      this.customerBis = this.customer;
    }
  },

  /* computed: {
     displayAddress() {
       return this.address + "<br>" + this.codePostal + " " + this.city
     }
   }*/
}
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

