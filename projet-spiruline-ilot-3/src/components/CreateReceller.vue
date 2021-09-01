<template>
  <div>
    <div v-show="createRecellerDone">
      <p>The reseller is successfully added</p>
    </div>

    <div v-show="!createRecellerDone">
      <h2>Create your reseller</h2>

      <input type="text" v-model="forms.name" placeholder="Name" />
      <br />
      <input
        type="text"
        v-model="forms.description"
        placeholder="Description"
      />
      <br />
      <input type="text" v-model="forms.latitude" placeholder="Latitude" />
      <br />
      <input type="text" v-model="forms.longitude" placeholder="Longitude" />
      <br />
      <input
        type="number"
        v-model="forms.supplier_id"
        placeholder="supplier_id"
      />
      <br />

      <b-button @click="createReceller" variant="outline-info">Create</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "createReceller",

  data() {
    return {
      forms: {
        name: "",
        description: "",
        latitude: "",
        longitude: "",
        supplier_id: "",
      },
      createRecellerDone: false,
    };
  },
  methods: {
    createReceller() {
      axios.post(
        "https://heroku-campus-suppliers.herokuapp.com/api/resellers",
        {
          name: this.forms.name,
          description: this.forms.description,
          supplier_id: this.forms.supplier_id,
          latitude: this.forms.latitude,
          longitude: this.forms.longitude,
        }
      );
      this.createRecellerDone = true;
    },
  },
};
</script>

<style scoped></style>
