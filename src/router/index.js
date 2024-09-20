import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Review from '../views/Review.vue'
import Overview from '../views/Overview.vue'
import Notebook from '../views/Notebook.vue'
import AllData from '../views/AllData.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // 顯示首頁
  },
  {
    path: '/review',
    name: 'review',
    component: Review
  },
  {
    path: '/overview',
    name: 'overview',
    component: Overview
  },
  {
    path: '/notebook',
    name: 'notebook',
    component: Notebook
  },
  {
    path: '/alldata',
    name: 'alldata',
    component: AllData
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
