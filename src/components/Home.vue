<template>
  <div id="home" fluid="sm">
    <div id="carousel" class="carousel" >
      <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1411"
          img-height="683"
      >
        <b-carousel-slide
            caption="Fournisseurs">
          <template #img>
            <b-img height="683" width="1411"
                 src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1cmZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                   fluid-grow alt="Fluid-grow image"
                   v-on:click="goToSuppliers"></b-img>
          </template>
        </b-carousel-slide>
        <b-carousel-slide
            caption="Revendeurs">

          <template #img>
             <b-img height="683" width="1411"
                 src="https://p4.wallpaperbetter.com/wallpaper/211/399/630/surf-wallpapers-free-backgrounds-picture-96552-wallpaper-preview.jpg"
                    fluid-grow alt="Fluid-grow image"
                    v-on:click="goToRecellers"></b-img>

          </template>

        </b-carousel-slide>
        <b-carousel-slide
            caption="Clients">
          <template #img>
            <b-img height="683" width="1411"
                 src="https://wi.wallpapertip.com/wsimgs/14-142414_surfing-wallpapers-data-src-wave-surf-wallpaper-hd.jpg"
                   fluid-grow alt="Fluid-grow image"
                   v-on:click="goToCustomers"></b-img>
          </template>
        </b-carousel-slide>
        <b-carousel-slide
            caption="Commandes">
          <template #img>
            <b-img height="683" width="1411"
                 src="https://images6.alphacoders.com/407/407732.jpg"
                   fluid-grow alt="Fluid-grow image"
                   v-on:click="goToOrders"></b-img>
          </template>
        </b-carousel-slide>
        <b-carousel-slide
            caption="Magasin">
          <template #img>
            <b-img height="683" width="1411"
                 src="https://c0.wallpaperflare.com/preview/648/197/145/blue-beach-surf-travel.jpg"
                 fluid-grow alt="Fluid-grow image"
                   v-on:click="goToShop"></b-img>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods:{
    goToSuppliers(){
      window.location.href="#/suppliersList"
    },
    goToRecellers(){
      window.location.href="#/recellersList"
    },
    goToCustomers(){
      window.location.href="#/customersList"
    },
    goToOrders(){
      window.location.href="#/ordersList"
    },
    goToShop(){
      window.location.href="#/shop"
    },

  }
  /* methods: {
     onSlideStart(slide) {
       this.sliding = true
     },
     onSlideEnd(slide) {
       this.sliding = false
     }
   }*/
}
</script>
<style scoped>
#home {
  background-color: #2c3e50;

}

#carousel {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  align-content: center;
  margin: 0 auto;

}

</style>