<template>
  <div>
  <div id="orderList">

    <h1>Liste des commandes</h1>
    <p class="mt-3">Page Actuelle: {{ pageActuelle }}/{{ lastPage }}</p>
    <b-button @click="previousPage" v-show="pageActuelle-1>0" variant="outline-danger">Page précédente</b-button>
    <b-button @click="nextPage" v-show="pageActuelle+1 <= lastPage" variant="outline-primary">Page suivante</b-button>


    <router-link :to="{name:'CreateOrder',
     }"
    >
      <b-button variant="outline-success">Créer</b-button>
    </router-link>

  </div>

    <b-table responsive striped hover :items="orders" :fields="fields"  :current-page="currentPage">

      <template #cell(action)="data">
        <router-link
            :to="{
             name: 'Order',
            params: {
            id: data.item.id,
             order: data.item,
            },
          }"
        >
          <b-button variant="outline-primary">Accéder </b-button>

        </router-link><router-link :to="{name:'OrderEdit',
      params:{
        id:data.item.id,
        order: data.item,
      }}"
      >
        <b-button variant="outline-warning">Modifier</b-button>
      </router-link>


        <b-button @click="deleteOrder(data.item.id)" variant="outline-danger">Supprimer</b-button>

      </template>
    </b-table>


  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "OrdersList",
  components: {},

  data() {
    return {


      pageActuelle: 1,
      currentPage: 1,
      lastPage: 1,
      pageNumber: 1,
      loading: false,
      error: null,
      orders: [],

      fields: [
        {
          key: 'id',
          sortable: true,
          label: "Id commande ",
        },
        {
          key: 'number',
          sortable: true,
          label: "Nombre commmande",
        },
        {
          key: 'date',

          sortable: true,
          label: "Date",
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

      axios // Création d'une promesse qui va contenir l'appel
          .get("https://heroku-campus-suppliers.herokuapp.com/api/orders?page=" + this.pageActuelle)
          .then((response) => {  // Avec la méthode "then", on extrait les données
            this.orders = response.data.data;   //  On retourne les données
            this.lastPage = response.data.last_page;
            console.log("success");
            console.log(response.data);
          })
          .catch(function (error) {
            this.error = error;
          })

    },

    nextPage() {
      this.pageActuelle += 1;
      this.getdata();
    },
    previousPage() {
      this.pageActuelle -= 1;
      this.getdata();
    },
    deleteOrder(order_id) {
      console.log(order_id);
      axios.delete("https://heroku-campus-suppliers.herokuapp.com/api/orders/" + order_id)
          .then((response) => {
        console.log(response);
        this.orders = response.data.data;
        this.lastPage = response.data.last_page;
      })
          .catch((error) => {
            this.error = error;
          });
    },
  },
  mounted() {
    // Set the initial number of items
    this.getdata();

  },

}

</script>

<style scoped>
#orderList{
  background-color: #F6E6D1;
}
</style>