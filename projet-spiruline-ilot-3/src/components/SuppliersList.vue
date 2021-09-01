<template>
  <div>
 

    

    <p class="mt-3">Page Actuelle: {{ pageActuelle }}/{{ lastPage }}</p>
    <b-button @click="previousPage" v-show="pageActuelle-1>0" variant="outline-danger">Previous Precedante</b-button>
    <b-button @click="nextPage" v-show="pageActuelle+1 <= lastPage" variant="outline-primary">Page Suivante</b-button>

    <!-- v-for="customer in customers" :key="customer.id"-->
    <b-table striped hover :items="suppliers" :fields="fields" :per-page="perPage" :current-page="currentPage">
    
  
      <template #cell(action)="data">
        <router-link
          :to="{
            name: 'SupplierFiche',
            params: {
              id: data.item.id,
              supplier: data.item,
               
            
            },
          }"
        >
          <b-button variant="outline-primary">Fournis moi</b-button
          ></router-link
        >

         <router-link
          :to="{
            name: 'SuppliersEdit',
            params: {
              id: data.item.id,
              supplier: data.item,
            
            },
          }"
        >
          <b-button variant="success">Modifier</b-button
          ></router-link>
                  <b-button @click="deleteSupplier(data.item.id)" variant="danger">Supprimer</b-button>

        
           
           
      

        




      </template>
    </b-table>

       <b-button variant="outline-primary">
       <router-link class="carte" :to="{ name: 'Map', params:{ datas: suppliers} }">Voir carte</router-link>

       </b-button>

  </div>
  
</template>


<script>
import axios from "axios";

export default {
  name: "SuppliersList",
  components: {},

  data() {
    return {
      perPage: 25,
      pageActuelle: 1,
      currentPage: 1,
      lastPage: 1,
      pageNumber: 1,
      loading: false,
      error: null,
      suppliers: [],
      fields: [
        {
          key: "id",
          sortable: true,
          label: "Index",
        },
        {
          key: "name",
          label: "Nom",
        },
        {
          key: "status",
        },
        {
          key: "action",
          label: "Action",
        },
      ],
    };
  },

  methods: {
    getdata() {
      this.loading = true;
      axios
        .get("https://heroku-campus-suppliers.herokuapp.com/api/suppliers?page=" + this.pageActuelle)
        .then((response) => {
          console.log(response);
          this.suppliers = response.data.data;
          this.lastPage = response.data.last_page;

          this.loading = false;
        })
        .catch(function (error) {
          this.error = error;
        })
        .then(function () {});
    },
    nextPage() {
      this.pageActuelle += 1;
      this.getdata();
    },
    previousPage() {
      this.pageActuelle -= 1;
      this.getdata();
    },
  },

  deleteSupplier(supplier_id) {
      axios.delete("https://heroku-campus-suppliers.herokuapp.com/api/suppliers/" + supplier_id);
      this.getdata();
    },





  mounted() {
    this.getdata();
  },
};
</script>

<style scoped>
</style>