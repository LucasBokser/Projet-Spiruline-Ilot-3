<template>
  <div id="app">


    <div id="nav">

    <div>

      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>


              <router-link to="/customersList" tag="li">Go to Customer</router-link>

              <router-link to="/customersList"
                >Go to Customer</router-link
              ></b-nav-item
            >
            <b-nav-item>
              <router-link to="/ordersList"
                >Go to Order</router-link
              ></b-nav-item
            >
            <b-nav-item>
              <router-link to="/recellersList"
                >Go to Receller</router-link
              ></b-nav-item
            >
            <b-nav-item>
              <router-link to="/suppliersList"
                >Go to Supplier</router-link
              ></b-nav-item
            >


            <b-nav-item>
              <router-link to="/customersList" tag="cx-button">Go to Customer</router-link>

            </b-nav-item>
            <b-nav-item>
              <router-link to="/ordersList" tag="li">Go to Order</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/recellersList" tag="li">Go to Receller</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/suppliersList" tag="li">Go to Supplier</router-link>
            </b-nav-item>


          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>



            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div id="ontente">

    </div>
    <!--<HelloWorld msg="Ca Wax pour moi"/>-->


    <router-view></router-view>
  </div>
</template>

<script>

//import Home from "./components/Home";
//import HelloWorld from './components/HelloWorld.vue'



export default {
  name: "App",
  components: {
    //HelloWorld,
    //Home,

  },


  },
};

  }

}

</script>

<style>
#nav {
  align-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;



}

#carousel {
  width: 1024px;
  height: 700px;
  border-radius: 100%;
  align-content: center;
  margin: 0 auto;

}

#ontente {
  background-color: #2c3e50;

}
</style>
