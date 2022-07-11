import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditComponent from '../components/customer/EditComponent'
import CreateComponent from '../components/customer/CreateComponent'
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/create',
    name: 'Create',
    component: CreateComponent
  },

  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditComponent
  },

  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
