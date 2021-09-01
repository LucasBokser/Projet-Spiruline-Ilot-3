<template>
  <div id="app">


    <div id="nav">

      <div>

        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="/">Accueil</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>


              <b-nav-item>
                <router-link to="/customersList" tag="li">Espace clients</router-link>

              </b-nav-item>
              <b-nav-item>
                <router-link to="/ordersList" tag="li">Les commandes</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/recellersList" tag="li">Nos revendeurs</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/suppliersList" tag="li">Nos fournisseurs</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/shop" tag="li">Magasin</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/merci" tag="li">Nous contacter</router-link>
              </b-nav-item>


            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="Rechercher"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Rechercher
                </b-button
                >
              </b-nav-form>


              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>Utilisateur</em>
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
.navbar.navbar-dark.bg-dark{
  background-color: #728C69!important;
}
</style>
