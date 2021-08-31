<template>
  <div>
    <div>
      <h2><span>Modification d'un customer</span></h2>
      <router-link :to="{name:'CustomersList',
      }"
      >
        <b-button variant="outline-primary">Back</b-button>
      </router-link>
    </div>
    <div class="formulaire">
      <label for="firstName">First Name : </label>
      <input type="text" v-model="form.firstName"/>
      <br>
      <label for="lastName">Last Name : </label>
      <input type="text" v-model="form.lastName"/>
      <br>
      <label for="email">E-mail : </label>
      <input type="email" v-model="form.email"/>
      <br>
      <label for="codepostal">Code postal : </label>
      <input type="text" v-model="form.codepostal"/>
      <br>
      <label for="city">Ville : </label>
      <input type="text" v-model="form.city"/>
      <br>
      <label for="address">Adresse : </label>
      <input type="text" v-model="form.address"/>
      <br>
      <label for="phoneNumber">Numéro de téléphone : </label>
      <input type="text" v-model="form.phoneNumber"/>
      <br>
      <label for="reseller_id">Id du receller:</label>
      <input type="text" v-model="form.reseller_id"/>
      <br>
    </div>
    <router-link :to="{name:'CustomersList',
      }"
    >
      <button @click="updateCustomer">Modifier</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CustomerEdit",
  props: {
    customer: Object
  },
  data() {
    return {
      form: {
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        email: this.customer.email,
        codepostal: this.customer.codePostal,
        city: this.customer.city,
        address: this.customer.address,
        phoneNumber: this.customer.phoneNumber,
        reseller_id: this.customer.reseller_id
      }
    }
  },
  methods: {
    updateCustomer() {
      axios.put('https://heroku-campus-suppliers.herokuapp.com/api/customers/' + this.customer.id, {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        codePostal: this.form.codepostal,
        city: this.form.city,
        address: this.form.address,
        phoneNumber: this.form.phoneNumber,
        reseller_id: this.form.reseller_id
      })
    }
  }
}
</script>

<style scoped>
.formulaire {
  text-align: center;
}
</style>
