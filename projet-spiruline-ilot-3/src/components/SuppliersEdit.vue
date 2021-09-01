<template>
  <div id="editSupplier">
    <div>
      <h2><span>Modification d'un fournisseur</span></h2>
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
      <b-button pill variant="info" @click="updateSuppliers">Modifier</b-button>
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

div{
  background-color: #F6E6D1;
}

.btn.btn-info.rounded-pill {
  background-color: #728C69;
  cursor: pointer;
}

</style>