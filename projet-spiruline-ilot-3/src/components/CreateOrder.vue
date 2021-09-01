<template>
  <div>
    <div v-show="addOrder">
      <p>The Order is successfully added</p>
      <router-link to="/OrdersList">Back to orders list</router-link>
    </div>

    <div v-show="!addOrder">
      <h2><span>Add an order </span></h2>
      <label for="id">Order id </label>
      <input id="id" type="number" v-model="formulaire.id"/>
      <br>
      <label for="number">Order number </label>
      <input id="number" type="number" v-model="formulaire.number"/>
      <br>
      <label for="date">Order date </label>
      <input id="date" type="date" v-model="formulaire.date"/>
      <br>
      <label for="price">Price </label>

      <input id="price" type="number" v-model="formulaire.price"/>
      <br>
      <label for="customer_id">Customer id </label>
      <input id="customer_id" type="number" v-model="formulaire.customer_id"/>

      <button @click="addNewOrder">Add an order</button>
    </div>
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

</style>