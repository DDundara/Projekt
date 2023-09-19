<template>
  <div class="bg-white-400 h-screen">
    <NavBar/>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
      <router-link to="/service"></router-link>
      <router-link to="/contact"></router-link>
      <router-link to="/login"></router-link>
      <ejs-calendar/>
    </p>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeComponent.vue';
import About from './components/AboutComponent.vue';
import Service from './components/ServiceComponent.vue';
import Contact from './components/ContactComponent.vue';
import Login from './components/LoginComponent.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/service', component: Service },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default {
  name: 'App',
  components: {
    NavBar
  },
  router // Attach the router instance to the component
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>