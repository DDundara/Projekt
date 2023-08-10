<template>
  <div class="login-container">
    <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="form-control"
          required
        />
       
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  }
 
};
</script>

<style>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 40px;
  border: 5px solid #ccc;
  border-radius: 5px;
  background-color: white ;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.btn-primary {
  background-color: blue;  
  color: white; 
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>