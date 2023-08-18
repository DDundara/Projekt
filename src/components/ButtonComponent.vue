<template>
  <router-link :to="to" class="bg-green-400 hover:bg-green-500 duration-300 font-sm text-white rounded py-1.5 px-4">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String, // Prop for specifying the route to navigate to
  },
};
</script>