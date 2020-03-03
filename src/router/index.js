import Vue from 'vue'
import Router from 'vue-router'

import Home from './../pages/Home/home.vue'
import Recommend from './../pages/Recommend/recommend.vue'
import Search from './../pages/Search/search.vue'
import Chat from './../pages/Chat/chat.vue'
import Me from './../pages/Me/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/chat',
      component:Chat
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
