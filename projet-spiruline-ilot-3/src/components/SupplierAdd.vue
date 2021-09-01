<template>
  <div id="supplierAdd">
    <div v-show="userrAdd">
      <p>L'Utilisateur a bien été ajouté</p>
      <router-link to="/customersList">Retour à la liste des customers</router-link>
    </div>

    <div v-show="!userrAdd">
      <h2><span>Ajout d'un client</span></h2>
      <router-link :to="{name:'SuppliersList',
      }"
      >
        <b-button variant="outline-primary">Back</b-button>
      </router-link><br>
      <input type="text" v-model="formulaire.name" placeholder="Prénom"/>
      <br>
      <input type="text" v-model="formulaire.latitude" placeholder="Nom"/>
      <br>
      <input type="email" v-model="formulaire.longitude" placeholder="Email"/>
      <br>
      <input type="text" v-model="formulaire.id" placeholder="Code Postal"/>
      <br>
      <b-button pill variant="info" @click="addNewSupplier">Ajouter le nouveau fournisseur</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddNewSupplier",
  data() {
    return {
      formulaire: {
        name: '',
        latitude: '',
        longitude: '',
        id: '',
       
      },
      userAdd: false
    }
  },
  methods: {
    addNewSupplier() {
      axios.post('https://heroku-campus-suppliers.herokuapp.com/api/customers', {
        name: this.formulaire.name,
        latitude: this.formulaire.latitude,
        longitude: this.formulaire.longitude,
        id: this.formulaire.id,
        
      });
      this.userAdd = true
    }
  }
}
</script>

<style scoped>
#supplierAdd{
  background-color: #F6E6D1;
}
.btn.btn-info.rounded-pill {
  background-color: #728C69;
  cursor: pointer;
}
</style>