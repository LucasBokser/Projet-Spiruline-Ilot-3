<template>
  <div>
    <h1>CustomersList</h1>
    <!-- v-for="customer in customers" :key="customer.id"-->
    <b-table striped hover :items="customers" :fields="fields">
      <template #cell(action)="data">
        <router-link :to="{name:'Customer',
      params:{
        id:data.item.id,
        customer: data.item,
      }}"
        >
          <b-button variant="outline-primary">Accéder</b-button>
        </router-link>
      </template>
    </b-table>
  </div>
</template>


<script>

//import Customer from "./Customer.vue";

import axios from "axios";


export default {
  name: "CustomersList",
  components: {},
  data() {
    return {
      loading: false,
      error: null,
      customers: [],
      fields: [
        {
          key: "id",
          sortable: true,
          label: "index",
        },
        {
          key: "firstName",
          label: "Prenom",
        },
        {
          key: "lastName",
          label: "Nom",
        },
        {
          key: "action",
          label: "Action",
        },
      ],
    }
  },

  created() {
    this.loading = true
    axios
        .get("https://heroku-campus-suppliers.herokuapp.com/api/customers")
        .then((response) => {
          console.log(response);
          this.customers = response.data.data;
          this.loading = false
        })
        .catch(function (error) {
          this.error = error
        })
        .then(function () {
          console.log("la fonction");
        });
  },
  mounted() {
    // Set the initial number of items
    this.getdata();
  },

  /*
  export default {
    name: "CustomersList",
    components: {},


    data() {
      return {
        customers: [
          {
            id: 1,
            firstName: "John",
            lastName: "Rambo",
            email: "petetagueule@america.com",
            codePostal: "85666",
            city: "Dallas",
            address: "rue de moncul",
            phoneNumber: "5645644649",
          },
          {
            id: 2,
            firstName: "Karine",
            lastName: "La megère",
            email: "petetagueule@america.com",
            codePostal: "85666",
            city: "Dallas",
            address: "rue de moncul",
            phoneNumber: "5645644649",
          }
        ]
      }
    },*/
  methods: {
    displayName(customer) {
      return customer.firstName + " " + customer.lastName
    }
  }
}


</script>

<style scoped>

</style>

