import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import MyAbout from '../view/About.vue'
import MyDonate from '../view/Donate.vue'
import MyMain from '../view/Main.vue'
import MyPodcast from '../view/Podcast.vue'
import MySubscribe from '../view/Subscribe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: MyAbout
    },
    {
      path: '/donate',
      name: 'Donate',
      component: MyDonate
    },
    {
      path: '/main',
      name: 'Main',
      component: MyMain
    },
    {
      path: '/podcast',
      name: 'Podcast',
      component: MyPodcast
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: MySubscribe
    }
  ]
})
