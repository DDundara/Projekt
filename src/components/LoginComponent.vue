<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-96">
      <h2 class="text-3xl font-semibold mb-4">Log in</h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium">Username</label>
          <input v-model="username" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" />
        </div>
        <div>
          <label class="block text-sm font-medium">Password</label>
          <input v-model="password" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="password" />
        </div>
        <div>
          <label class="block text-sm font-medium">Confirm Password</label>
          <input v-model="confirmPassword" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="password" />
        </div>
        <button class="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    login() {
      console.log(this.username);
    },
  },
};
</script>

<style scoped>
</style>