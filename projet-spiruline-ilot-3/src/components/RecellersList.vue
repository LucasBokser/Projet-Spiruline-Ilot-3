<template>
  <div>
    <h1>ResellersList</h1>

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
      loading: false,
      error: null,
      recellers: [],
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
      this.loading = true;
      axios
        .get("https://heroku-campus-suppliers.herokuapp.com/api/resellers")
        .then((response) => {
          this.recellers = response.data.data;
          this.loading = false;
        })
        .catch(function(error) {
          this.error = error;
        })
        .then(function() {});
    },
  },

  mounted() {
    this.getdata();
  },
};
</script>

<style scoped></style>
