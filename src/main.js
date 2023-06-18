import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/a_esperanca_estilhacada', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')