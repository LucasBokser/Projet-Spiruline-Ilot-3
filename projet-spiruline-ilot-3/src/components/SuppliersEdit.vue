<template>
  <div>
    <div>
      <h2><span>Modification d'un Supplier</span></h2>
      <router-link :to="{name:'SuppliersList',
      }"
      >
        <b-button variant="outline-primary">Back</b-button>
      </router-link>
    </div>
    <input type="text" v-model="form.name"/>
    <br>
    <input type="number" v-model="form.latitude"/>
    <br>
    <input type="number" v-model="form.longitude"/>
    <br>
    <input type="number" v-model="form.id"/>
    <br>
   
    
    <router-link :to="{name:'SuppliersList',
      }"
    >
      <button @click="updateSuppliers">Modifier</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SuppliersEdit",
  props: {
    supplier: Object
  },
  data() {
    return {
      form: {
        name: this.supplier.name,
        latitude: this.supplier.latitude,
        longitude: this.supplier.longitude,
        id: this.supplier.id
        
      }
    }
  },
  methods: {
    updateSuppliers() {
      axios.put('https://heroku-campus-suppliers.herokuapp.com/api/suppliers/' + this.supplier.id, {
        name: this.form.name,
        latitude: this.form.latitude,
        longitude: this.form.longitude,
        id: this.form.id
        
      })
    }
  }
}
</script>

<style scoped>
</style>