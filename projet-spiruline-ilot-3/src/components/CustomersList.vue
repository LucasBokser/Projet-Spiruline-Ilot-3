
<template>
  <div>
    <div id="lagrosse">
      <h1>CustomersList</h1>

      <p class="mt-3">Page Actuelle: {{ pageActuelle }}/{{ lastPage }}</p>
      <b-button @click="previousPage" v-show="pageActuelle-1>0" variant="outline-danger">Previous Page</b-button>
      <b-button @click="nextPage" v-show="pageActuelle+1 <= lastPage" variant="outline-primary">Next Page</b-button>

      <!-- v-for="customer in customers" :key="customer.id"-->
      <router-link :to="{name:'CustomerAdd',
     }"
      >
        <b-button variant="outline-success">Creer</b-button>
      </router-link>
    </div>
    <b-table striped hover :items="customers" :fields="fields" :per-page="perPage" :current-page="currentPage">
      <template #cell(action)="data">
        <router-link :to="{name:'Customer',
      params:{
        id:data.item.id,
        customer: data.item,
      }}"
        >
          <b-button variant="outline-primary">Accéder</b-button>
        </router-link>
        <router-link :to="{name:'CustomerEdit',
      params:{
        id:data.item.id,
        customer: data.item,
      }}"
        >
          <b-button variant="outline-warning">Modifier</b-button>
        </router-link>

        <b-button @click="deleteCustomer(data.item.id)" variant="outline-danger">Supprimer</b-button>

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
      perPage: 25,
      pageActuelle: 1,
      currentPage: 1,
      lastPage: 1,
      pageNumber: 1,
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
  methods: {
    getdata() {
      this.loading = true
      axios
          .get("https://heroku-campus-suppliers.herokuapp.com/api/customers?page=" + this.pageActuelle)
          .then((response) => {
            //   console.log("then")
            // console.log(response);
            this.customers = response.data.data;
            this.lastPage = response.data.last_page;
            this.loading = false;
          })
          .catch(function (error) {
            this.error = error
          })
          .then(function () {
            //  console.log("la fonction");
          });
      // console.log("getdata")
    },
    nextPage() {
      this.pageActuelle += 1;
      this.getdata();
    },
    previousPage() {
      this.pageActuelle -= 1;
      this.getdata();
    },
    deleteCustomer(customer_id) {
      console.log(customer_id)
      axios.delete("https://heroku-campus-suppliers.herokuapp.com/api/customers/" + customer_id).catch(error => alert(error));
      this.getdata();
    },
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

}


</script>

<style scoped>
#lagrosse {
  background-color: #2c3e50;
}
</style>


