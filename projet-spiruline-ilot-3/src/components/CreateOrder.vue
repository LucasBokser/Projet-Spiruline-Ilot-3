<template>
  <div id="createOrder">
    <div v-show="addOrder">
      <p>Votre commande a été ajoutée</p>
      <router-link to="/OrdersList">Retour à la liste</router-link>
    </div>

    <div v-show="!addOrder">
      <h2><span>Ajouter une commande </span></h2>

      <input id="id" type="number" v-model="formulaire.id" placeholder="id de la commande"/>
      <br>

      <input id="number" type="number" v-model="formulaire.number" placeholder="Numéro de la commande"/>
      <br>

      <input id="date" type="date" v-model="formulaire.date" placeholder="Date de la commande"/>
      <br>

      <input id="price" type="number" v-model="formulaire.price" placeholder="Prix de la commande"/>
      <br>

      <input id="customer_id" type="number" v-model="formulaire.customer_id" placeholder="id du client"/>


    </div>
    <b-button pill variant="info" @click="addNewOrder">Ajouter une commande</b-button>
  </div>
</template>

<script>import axios from "axios";
export default {
  name: "addNewOrder",
  data() {
    return {
      formulaire: {
        id: '',
        number: '',
        date: '',
        price: '',
        customer_id: '',

      },
      addOrder: false
    }
  },
  methods: {
    addNewOrder() {
      axios.post('https://heroku-campus-suppliers.herokuapp.com/api/orders', {
        id: this.formulaire.id,
        number: this.formulaire.number,
        date: this.formulaire.date,
        price: this.formulaire.price,
        customer_id: this.formulaire.customer_id,

      });
      this.addOrder = true
    }
  }
}
</script>
<style scoped>
#createOrder{

  background-color: #F6E6D1;
}
.btn.btn-info.rounded-pill {
  background-color: #728C69;
  cursor: pointer;
}
</style>