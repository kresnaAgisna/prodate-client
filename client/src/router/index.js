import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/register',
    name: 'register',
    component: RegisterView
   },
   {
    path: '/login',
    name: 'login',
    component: LoginView
   },
   {
    path: '/profile',
    name: 'profile',
    component: ProfileView
   }
  ]
})

export default router
