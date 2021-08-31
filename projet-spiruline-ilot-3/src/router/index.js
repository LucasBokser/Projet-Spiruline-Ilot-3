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
import EditReceller from "../components/EditReceller";
import CreateReceller from "../components/CreateReceller";


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
        path: '/suppliersList',
        name: 'SuppliersList',
        component: SuppliersList,
    },
    {
        path: '/suppliersMap',
        name: 'SuppliersMap',
        component: SuppliersMap,
    },
    {
        path: '/recellersList/:id',
        name: 'Receller',
        component: Receller,
        props: true
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
        path: '/editReceller/:id',
        name: 'EditReceller',
        component: EditReceller,
        props: true
    },
    {
        path: '/createReceller/',
        name: 'CreateReceller',
        component: CreateReceller,
        props: true
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
    }

]
const router = new VueRouter({
    routes
})

export default router