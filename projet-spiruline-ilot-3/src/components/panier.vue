<template>
<div id="back">
 
 

<head>
...
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
 

<div class="container py-5">
  
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <div class="bg-white rounded-lg shadow-sm p-5">
          <!-- Credit card form tabs -->
          <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
            <li class="nav-item">
              <a data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill">
                                  <i class="fa fa-credit-card"></i>
                                  Credit Card
                              </a>
            </li>
            <li class="nav-item">
              <a data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill">
                                  <i class="fa fa-paypal"></i>
                                  Paypal
                              </a>
            </li>
            <li class="nav-item">
              <a data-toggle="pill" href="#nav-tab-bank" class="nav-link rounded-pill">
                                  <i class="fa fa-university"></i>
                                   Bank Transfer
                               </a>
            </li>
            
          </ul>
          <!-- End -->
  
  
          <!-- Credit card form content -->
          <div class="tab-content">
  
            <!-- credit card info-->
            <div id="nav-tab-card" class="tab-pane fade show active">
              
              <form role="form">
                <div class="form-group">
                     <label for="username">Nom - Prenom</label>
                  <input type="text" name="username" placeholder="Jul" required class="form-control">
                   <label for="username">Adresse Postale</label>
                  <input type="text" name="username" placeholder="En Y" required class="form-control">
                   <label for="username">Code Postal</label>
                  <input type="text" name="username" placeholder="38000" required class="form-control">
                   <label for="username">Adresse Mail</label>
                  <input type="text" name="username" placeholder="Jassa" required class="form-control">
                  
                </div>
                
                
                <div id="example-3">
                <router-link to="/checkoutcard" tag="button" ACHETER target="_blank" type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm</router-link>
                <br>
                  <b-spinner class="m-5" label="Busy"></b-spinner>
                </div>
                 

              </form>
            </div>
            <!-- End -->
  
            <!-- Paypal info -->
            <div id="nav-tab-paypal" class="tab-pane fade">
              <p>Paypal is easiest way to pay online</p>
              <p>
                <button v-on: click="say('salut')"><type="button" class="btn btn-primary rounded-pill"><i class="fa fa-paypal mr-2"></i> Log into my Paypal</button>
              </p>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <!-- End -->
  
            <!-- bank transfer info -->
            
            <!-- End -->
          </div>
          <!-- End -->
  
        </div>
      </div>
    </div>
  </div>

  


</div>




    

</template>

<style scoped>
body {
  background-color: #f6f9fb!important;
}
.text-small {
  font-size: 0.9rem;
}
.rounded {
  border-radius: 1rem;
}
#back{
    background-color: #2c3e50
;
}
</style>
