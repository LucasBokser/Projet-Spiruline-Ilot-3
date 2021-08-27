
<template>
  <div class="order-styles">
    <div class="orders">
      <h1>Order</h1>



    </div>
  </div>
</template>
<script>
export default {
  name: "Order",
      props:{
        id: Number,
        number: String,
        date: Date,
        price: Number,
        Customer_id: Number,


  }
}
</script>

<style scoped>

</style>