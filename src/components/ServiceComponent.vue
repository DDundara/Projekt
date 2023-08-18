<template>
  <div class="services">
    <h2>Our Services</h2>
    <ul class="service-list">
      <li v-for="service in services" :key="service.id">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent',
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Service 1',
          description: 'Description for Service 1...'
        },
        {
          id: 2,
          title: 'Service 2',
          description: 'Description for Service 2...'
        },
        // Add more services as needed
      ]
    };
  }
}
</script>

<style scoped>
.services {
  text-align: center;
  padding: 20px;
}

.service-list {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>