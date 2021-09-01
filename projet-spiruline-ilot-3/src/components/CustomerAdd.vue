<template>
  <div id="createCustomer">
    <div v-show="userAdd">
      <p>L'Utilisateur a bien été ajouté</p>

      <router-link to="/customersList">Retour à la liste des customers</router-link>
    </div>

    <div v-show="!userAdd">
      <router-link :to="{name:'CustomersList',
      }"
      >
        <b-button variant="outline-primary">Back</b-button>
      </router-link>
      <h2><span>Ajout d'un client</span></h2>

      <input type="text" v-model="formulaire.firstName" placeholder="First Name"/>
      <br>
      <input type="text" v-model="formulaire.lastName" placeholder="Last Name"/>
      <br>
      <input type="email" v-model="formulaire.email" placeholder="Email"/>
      <br>
      <input type="text" v-model="formulaire.codepostal" placeholder="Code Postal"/>
      <br>
      <input type="text" v-model="formulaire.city" placeholder="City"/>
      <br>
      <input type="text" v-model="formulaire.address" placeholder="Adress"/>
      <br>
      <input type="text" v-model="formulaire.phoneNumber" placeholder="Phone Number"/>
      <br>
      <input type="text" v-model="formulaire.reseller_id" placeholder="Reseller id"/>
      <br>
      <b-button pill variant="info" @click="addNewCustomer">Ajouter le nouveau customer</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddNewCustomer",
  data() {
    return {
      formulaire: {
        firstName: '',
        lastName: '',
        email: '',
        codepostal: '',
        city: '',
        address: '',
        phoneNumber: '',
        reseller_id: ''
      },
      userAdd: false
    }
  },
  methods: {
    addNewCustomer() {
      axios.post('https://heroku-campus-suppliers.herokuapp.com/api/customers', {
        firstName: this.formulaire.firstName,
        lastName: this.formulaire.lastName,
        email: this.formulaire.email,
        codePostal: this.formulaire.codepostal,
        city: this.formulaire.city,
        address: this.formulaire.address,
        phoneNumber: this.formulaire.phoneNumber,
        reseller_id: this.formulaire.reseller_id
      });
      this.userAdd = true
    }
  }
}
</script>

<style scoped>
#createCustomer{
  background-color: #F6E6D1 ;
}
.btn.btn-info.rounded-pill {
  background-color: #728C69;
  cursor: pointer;
}
</style>