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
        path: '/customersList/:id',
        name: 'Customer',
        component: Customer,
        props: true
    }

]
const router = new VueRouter({
    routes
})

export default router