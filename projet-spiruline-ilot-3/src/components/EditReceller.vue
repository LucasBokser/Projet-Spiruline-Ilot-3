<template>
  <div>
    <h1>Edit Reseller</h1>

    <input type="text" v-model="form.name" />
    <br />
    <input type="email" v-model="form.description" />
    <br />
    <input type="number" v-model="form.latitude" />
    <br />
    <input type="number" v-model="form.longitude" />
    <br />
    <input type="text" v-model="form.supplier_id" />
    <br />

    <router-link :to="{ name: 'RecellersList' }">
      <b-button @click="updateReceller" variant="outline-info">Edit </b-button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditReceller",
  props: {
    receller: Object,
  },
  data() {
    return {
      form: {
        name: this.receller.name,
        description: this.receller.description,
        latitude: this.receller.latitude,
        longitude: this.receller.longitude,
        supplier_id: this.receller.supplier_id,
      },
    };
  },
  methods: {
    updateReceller() {
      axios.put(
        "https://heroku-campus-suppliers.herokuapp.com/api/resellers/" +
          this.receller.id,
        {
          name: this.form.name,
          description: this.form.description,
          latitude: this.form.latitude,
          longitude: this.form.longitude,
          supplier_id: this.form.supplier_id,
        }
      );
    },
  },

  mounted() {
    this.updateReceller();
  },
};
</script>

<style scoped></style>
