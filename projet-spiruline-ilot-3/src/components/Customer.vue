<template>
  <div>

    <ul>
      <li><label for="id">Id:</label>
        <p><span id="id" >{{customer.id}}</span></p></li>
      <li><label for="firstName">Name :</label>
        <p><span id="firstName" >{{customer.firstName}}</span></p></li>
      <li><label for="lastName">last name:</label>
        <p><span id="lastName" >{{customer.lastName}}</span></p></li>
      <li><label for="email">email:</label>
        <p><span id="email" >{{customer.email}}</span></p></li>
      <li><label for="codePostal">Code postal:</label>
        <p><span id="codePostal" >{{customer.codePostal}}</span></p></li>
      <li><label for="city">City:</label>
        <p><span id="city" >{{customer.city}}</span></p></li>
      <li><label for="address">address:</label>
        <p><span id="address" >{{customer.address}}</span></p></li>
      <li><label for="phoneNumber">Numero de telephone:</label>
        <p><span id="phoneNumber" >{{customer.phoneNumber}}</span></p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Customer",
  props: {
    customer: Object
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

