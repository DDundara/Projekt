<template>
  <div class="contact-container">
    <h2>Contact Us</h2>
    <p>Feel free to reach out to us...</p>
    <form @submit.prevent="submitForm" class="form-container">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" rows="4" required></textarea>
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.name, this.email, this.message);
      // Reset form fields
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.contact-container {
  text-align: center;
  padding: 20px;
  background-color: #f7f7f7; /* Add a light background color */
  border: 1px solid #e0e0e0; /* Add a border */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.form-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label, input, textarea, button {
  margin-bottom: 10px;
}

button {
  background-color: #3490dc;
  color: white;
  border: none;
  padding: 8px 20px;
  cursor: pointer;
}
</style>