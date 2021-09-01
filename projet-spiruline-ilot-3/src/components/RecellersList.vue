<template>
  <div>
  <div class="backG" id="resellerList">
    <h1>Liste des revendeurs</h1>


    <b-button
      @click="previousPage"
      v-show="currentPage - 1 > 0"
      variant="outline-primary"
      >Page précédente</b-button
    >
    <b-button
      @click="nextPage"
      v-show="currentPage + 1 <= lastPage"
      variant="outline-primary"
      >Page suivante</b-button
    >
    <router-link
        :to="{
        name: 'CreateReceller',
      }"
    >
      <b-button variant="outline-success">Créer</b-button>
    </router-link>

      <router-link to="/recellersMap"><b-button variant="outline-info">Map</b-button></router-link>
  </div>
    <div class="table">
      <b-table responsive striped hover :items="recellers" :fields="fields">
        <template #cell(action)="data">
          <router-link
            :to="{
              name: 'Receller',
              params: {
                id: data.item.id,
                receller: data.item,
              },
            }"
          >
            <b-button variant="outline-primary">Accéder</b-button>
          </router-link>

          <router-link
            :to="{
              name: 'EditReceller',
              params: {
                id: data.item.id,
                receller: data.item,
              },
            }"
          >
            <b-button variant="outline-warning">Modifier</b-button>
          </router-link>

          <router-link
            :to="{
              name: 'RecellersList',
              params: {
                id: data.item.id,
                receller: data.item,
              },
            }"
          >
            <b-button @click="deleteData(data.item.id)" variant="outline-danger"
              >Supprimer</b-button
            >
          </router-link>
        </template>
      </b-table>
    </div>

  </div>
</template>

<script>
//import Receller from './Receller.vue'
import axios from "axios";

export default {
  name: "RecellersList",
  components: {},

  data() {
    return {
      recellers: [],
      currentPage: 1,
      lastPage: 1,
      fields: [
        {
          key: "id",
          sortable: true,
          label: "Index",
        },
        {
          key: "name",
          sortable: true,
          label: "Nom",
        },
        {
          key: "description",
        },
        {
          key: "action",
          label: "Action",
        },
      ],
    };
  },

  methods: {
    getdata() {
      axios
        .get(
          "https://heroku-campus-suppliers.herokuapp.com/api/resellers?page=" +
            this.currentPage
        )
        .then((response) => {
          console.log(response);
          this.recellers = response.data.data;
          this.lastPage = response.data.last_page;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    previousPage() {
      this.currentPage -= 1;
      this.getdata();
    },
    nextPage() {
      this.currentPage += 1;
      this.getdata();
    },
    deleteData(receller_id) {
      axios
        .delete(
          "https://heroku-campus-suppliers.herokuapp.com/api/resellers/" +
            receller_id
        )
        .then((response) => {
          console.log(response);
          this.recellers = response.data.data;
          this.lastPage = response.data.last_page;
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
#resellerList{
 background-color: #F6E6D1;
}
</style>
