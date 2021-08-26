<template>
  <div>
  <div >
    <h1>OrderList</h1>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    <Order v-for="order in orders" :key="order.id"
        :id="data.id"
        :number="data.number"
        :date="data.date"
        :price="data.price"
        :customer_id="data.customer_id"
    ></Order>

  </div>
  </div>
</template>

<script>
import Order from "./Order.vue";

export default {
  name: "OrdersList",
  components: {
    Order,
  },

  data() {
    return {
      loading: false,
      error: null,
      orders: [],


      /*fields: [
        {
          key: 'id',
          sortable: true
        },
        {
          key: 'number',
          sortable: true
        },
        {
          key: 'date',

          sortable: true,

        },
        {
          key: 'price',

          sortable: true,

        },
        {
          key: 'customer_id',

          sortable: true,

        }
      ],
      items: [
        { isActive: true, id: 1, number: '56108', date: '2012-11-06',price: '368', customer_id: 15  },
        { isActive: false, id: 2, number: '3515001', date: '1996-05-02',price: '276', customer_id: 36 },
        { isActive: false,id: 3, number: '3883971', date: '2016-11-07',price: '312', customer_id: 17   },
        { isActive: true, id: 4, number: '145508', date: '1984-02-25',price: '229', customer_id: 9  }
      ]*/
    }
  },
  created() {
    this.loading = true

        .get("https://heroku-campus-suppliers.herokuapp.com/api/orders")
        .then((response) => {
          console.log(response);
          this.orders = response.data;
          this.loading =false
        })
        .catch(function (error) {
          this.error = error
        })
        .then(function () {
          console.log("cc");
        });
  },

}
</script>

<style scoped>

</style>