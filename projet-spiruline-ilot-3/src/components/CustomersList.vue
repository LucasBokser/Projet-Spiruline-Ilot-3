<template>
  <div>
    <h1>CustomersList</h1>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        <router-link :to="{name:'Customer',
      params:{
        id:customer.id,
        customer: customer
      }}"
        >{{ displayName(customer) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

//import Customer from "./Customer.vue";

export default {
  name: "CustomersList",
  components: {},


  data() {
    return {
      customers: [
        {
          id: 1,
          firstName: "John",
          lastName: "Rambo",
          email: "petetagueule@america.com",
          codePostal: "85666",
          city: "Dallas",
          address: "rue de moncul",
          phoneNumber: "5645644649",
        },
        {
          id: 2,
          firstName: "Karine",
          lastName: "La megère",
          email: "petetagueule@america.com",
          codePostal: "85666",
          city: "Dallas",
          address: "rue de moncul",
          phoneNumber: "5645644649",
        }
      ]
    }
  },
  methods: {
    displayName(customer) {
      return customer.firstName + " " + customer.lastName
    }
  }
}


</script>

<style scoped>

</style>

