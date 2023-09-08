<template>
    <div class="home">
    <div class="hero">
      <h1>Welcome to Our Website</h1>
      <p>Your go-to destination for amazing experiences.</p>
      <router-link to="/learn-more">
        <button class="cta-button">Learn More</button>
      </router-link>
    </div>
    
    <div class="features">
      <div class="feature">
        <i class="bi bi-heart"></i>
        <h3>Quality Services</h3>
        <p>Discover our top-notch services designed just for you.</p>
      </div>
      <div class="feature">
        <i class="bi bi-globe"></i>
        <h3>Global Reach</h3>
        <p>Explore our offerings from around the world.</p>
      </div>
      <div class="feature">
      {{test}}
        <i class="bi bi-clock"></i>
        <h3>24/7 Support</h3>
        <p>Our dedicated team is here to assist you anytime.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HomeComponent',
  data(){
    return{
      test:null
    }
  },
  mounted(){

     this.fetchTest();

  },
methods:{
  async fetchTest() {
      try {
        const response = await axios.get("/");

        const data = response.data;
        this.test = data;
      } catch (error) {
        console.error("Error fetching: ", error);
      }
    },
}
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.hero {
  background-color: #f8f8f8;
  padding: 60px 0;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #3490dc;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.feature {
  flex: 1;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  text-align: center;
}

.feature i {
  font-size: 2rem;
  color: #3490dc;
  margin-bottom: 10px;
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature p {
  font-size: 1rem;
  color: #777;
}
</style>