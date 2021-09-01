<template>
  <div id="createReceller">
    <div v-show="createRecellerDone">
      <p>Votre revendeur a été ajouté</p>
    </div>

    <div v-show="!createRecellerDone">
      <h2>Créer votre revendeur</h2>
      <router-link :to="{name:'RecellersList',
      }"
      >
        <b-button variant="outline-primary">Back</b-button>
      </router-link><br>
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

      <b-button pill variant="info" @click="createReceller" >Créer</b-button>
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

<style scoped>
#createReceller{

  background-color: #F6E6D1;

}
.btn.btn-info.rounded-pill {
  background-color: #728C69;
  cursor: pointer;
}
</style>
