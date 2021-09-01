<template>
  <div>
<div>
      <h2><span>Edit Order</span></h2>

        <b-button variant="outline-primary">Back</b-button>
</div>

    <label for="id">Order id </label>
    <input id="id" type="number" v-model="form.id"/>
    <br>
    <label for="number">Order number </label>
    <input id="number" type="string" v-model="form.number"/>
    <br>
    <label for="number">Order number </label>
    <input id="date" type="date" v-model="form.date"/>
    <br>
    <label for="price">Price </label>

    <input id="price" type="string" v-model="form.price"/>
    <br>
    <label for="customer_id">Customer id </label>
    <input id="customer_id" type="integer" v-model="form.customer_id"/>

    <router-link :to="{name:'OrdersList' }">
      <b-button @click="updateOrder" variant="outline-info">Submit Changes </b-button>
    </router-link>
  </div>
</template>

<script>import axios from "axios";
export default {
  name: "OrderEdit",
  props: {
    order: Object,
  },
  data() {
    return {
      form: {
        id: this.order.id,
        number: this.order.number,
        date: this.order.date,
        price: this.order.price,
        customer_id: this.order.customer_id,

      },
    };
  },
  methods: {
    updateOrder() {
      axios.put('https://heroku-campus-suppliers.herokuapp.com/api/orders/' + this.order.id,
          {
        id: this.form.id,
        number: this.form.number,
        date: this.form.date,
        price: this.form.price,
        customer_id: this.form.customer_id,

      });
    },
  },
};
</script>


<style scoped>

</style>