import  VueRouter  from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Customer from "../components/Customer";
import CustomersList from "../components/CustomersList";
import Order from "../components/Order";
import OrdersList from "../components/OrdersList";
import Receller from "../components/Receller";
import RecellersList from "../components/RecellersList";
import RecellersMap from "../components/RecellersMap";
import Supplier from "../components/Supplier";
import SuppliersList from "../components/SuppliersList";
import SuppliersMap from "../components/SuppliersMap";
import SuppliersEdit from "../components/SuppliersEdit";
import shop from "../components/shop";
import panier from "../components/panier";
import checkoutcard from  "../components/checkoutcard";
import merci from  "../components/merci";





//import App from "../App";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    /*{
        path: '/',
        name: 'App',
        component: App
    },*/
    {
        path: '/supplier',
        name: 'Supplier',
        component: Supplier,
    },
    {
        path: '/suppliersList/:id',
        name: 'SupplierFiche',
        component: Supplier,
        props:true
    },
    {
        path: '/SuppliersList',
        name: 'SuppliersList',
        component: SuppliersList,
    },
    {
        path: '/suppliersMap',
        name: 'SuppliersMap',
        component: SuppliersMap,
        props:true
    },
    {
        path: '/receller',
        name: 'Receller',
        component: Receller,
    },
    {
        path: '/recellersMap',
        name: 'RecellersMap',
        component: RecellersMap,
    },
    {
        path: '/recellersList',
        name: 'RecellersList',
        component: RecellersList,
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer,
    },
    {
        path: '/customersList',
        name: 'CustomersList',
        component: CustomersList,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    },
    {
        path: '/ordersList',
        name: 'OrdersList',
        component: OrdersList,
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: 'SuppliersEdit/:id',
        name: 'SuppliersEdit',
        component: SuppliersEdit,
        props: true
    },
    {
        path: '/shop',
        name: 'shop',
        component: shop,
        
    },
    {
        path: '/panier',
        name: 'panier',
        component: panier,
        
    },
    {
        path: '/checkoutcard',
        name: 'checkoutcard',
        component: checkoutcard,
        
    },
    {
        path: '/merci',
        name: 'merci',
        component: merci,
        
    },
 
    { path: '/suppliersMap', component: SuppliersMap, name: 'Map', props: true, }, //route qui affiche la map


]


const router = new VueRouter({
    routes
})

export default router