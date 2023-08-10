<template>
  <div>
    <login-component />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
     Button
</button>
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue'; // Corrected the import name

export default {
  name: 'App',
  components: {
    'login-component': LoginComponent // Corrected the component name
  }
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
