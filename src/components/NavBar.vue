<template>
  <div>
    <!-- Your navigation bar component -->
    <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center fixed w-full top-0">
      <div class="flex items-center cursor-pointer">
        <span class="text-green-500 text-xl mr-1">
          <i class="bi bi-messenger"></i>
        </span>
        <h1 class="text-xl"> Redomat</h1>
      </div>
      <span class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <i class="[open ? 'bi bi-x':'bi bi-filter-left']"></i>
      </span>
      <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left[-100%]']">
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
          <!-- Use router-link instead of <a> -->
          <router-link :to="link.link" class="text-xl hover:text-green-500">{{ link.name }}</router-link>
        </li>
        <ButtonComponent to="/login">
            Login
          </ButtonComponent>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    ButtonComponent,
  },

  setup() {
    const open = ref(false);
    const Links = [
      { name: 'Home', link: '/' }, // 
      { name: 'Service', link: '/service' }, 
      { name: 'About', link: '/about' }, 
      { name: 'Contact', link: '/contact' },
    ];

    return { Links, open };
  },
};
</script>

<style>
/* Your styles here */
</style>