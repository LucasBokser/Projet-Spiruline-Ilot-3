<template>
  <div>
    <h1>ResellersList</h1>
    <b-button
      @click="previousPage"
      v-show="currentPage - 1 > 0"
      variant="outline-primary"
      >Previous</b-button
    >
    <b-button
      @click="nextPage"
      v-show="currentPage + 1 <= lastPage"
      variant="outline-primary"
      >Next</b-button
    >

    <b-table striped hover :items="recellers" :fields="fields">
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
          <b-button variant="outline-primary">Accéder</b-button></router-link
        >
      </template>
    </b-table>

    <b-button variant="outline-primary">
      <router-link to="/recellersMap">Map</router-link></b-button
    >
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
      error: null,
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
  },

  mounted() {
    this.getdata();
  },
};
</script>

<style scoped></style>
