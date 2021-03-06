import { createRouter, createWebHistory } from "vue-router";

import Home from './components/home/Home.vue'
import HomeContent from './components/home/content/home/HomeContent.vue'
import Users from './components/home/content/users/Users.vue'
import Dasboard from './components/home/content/home/Dashboard.vue'
import IndexingContent from './components/home/content/home/IndexingContent.vue'

import NotFound from './NotFound.vue'

// autentikasi
import Login from './components/autentikasi/Login.vue'
import Register from './components/autentikasi/Register.vue'

// admin
// import Admin from './components/home/admin/Admin.vue'
import AllAdmin from './components/home/admin/AllAdmin.vue'
import Admintask from './components/home/admin/AdminTask.vue'

import About from './components/home/About.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:Home,children:[
            // content
            {path:'dashboard',component:Dasboard},
            {path:'content',component:HomeContent, props:true},
            {path:'content/:ctn',component:IndexingContent, props:true},
            {path:'users', component:Users},
            {path:'about', component:About},
            // admin
            // {path:'admin', component:Admin},
            {path:'all_admin', component:AllAdmin},
            {path:'admin_task', component:Admintask},
        ]},
        {path:'/login', component:Login},
        {path:'/register', component:Register},
        {path:'/:NotFound(.*)', component:NotFound},

    ]
})

export default router;