import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Customer from "../components/Customer";
import CustomersList from "../components/CustomersList";
import Order from "../components/Order";
import OrdersList from "../components/OrdersList";
import Receller from "../components/Receller";
import RecellersList from "../components/RecellersList";
import RecellersMap from "../components/RecellersMap";

import EditReceller from "../components/EditReceller";
import CreateReceller from "../components/CreateReceller";
import Supplier from "../components/Supplier";
import SuppliersList from "../components/SuppliersList";
import SuppliersMap from "../components/SuppliersMap";
import SuppliersEdit from "../components/SuppliersEdit";
import shop from "../components/shop";
import panier from "../components/panier";
import checkoutcard from  "../components/checkoutcard";
import merci from  "../components/merci";
import SupplierAdd from "../components/SupplierAdd"
import OrderEdit from "../components/OrderEdit";

import CustomerEdit from "../components/CustomerEdit";
import Home from "../components/Home";


import CreateOrder from "../components/CreateOrder";
//import App from "../App";
import Vue from "vue";
import CustomerAdd from "../components/CustomerAdd";

Vue.use(VueRouter)

const routes = [
    /*{
        path: '/',
        name: 'App',
        component: App
    },*/
    {
        path: '/supplier',
        name: 'SupplierFiche',
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
        path: '/ordersList/:id',
        name: 'Order',
        component: Order,
        props: true
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
    },
    {

        path: '/orders/edit/:id',
        name: 'OrderEdit',
        component: OrderEdit,
        props: true
    },
    {
        path: '/orders/add',
        name: 'CreateOrder',
        component: CreateOrder,
        props: true
    },
        {
        path: '/customers/edit/:id',
        name: 'CustomerEdit',
        component: CustomerEdit,
        props: true
    },
    {
        path: '/customers/add',
        name: 'CustomerAdd',
        component: CustomerAdd,
        props: true
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
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
    {
        path: '/SupplierAdd',
        name: 'SupplierAdd',
        component: SupplierAdd,

    },


]
const router = new VueRouter({
    routes
})

export default router