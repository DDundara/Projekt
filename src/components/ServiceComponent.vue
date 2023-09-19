<template>
    <br/>
    <br/>
  <div class="services">
    <h2>Redomat</h2>
    <br/>
    
    <ul class="service-list">
      <li v-for="service in services" :key="service.id">
        <h3>{{ service.title }}</h3>
        <template v-if="service.id === 2">
          <vue-inline-calendar @update:selected-date="updateSelectedDate($event)"
            :specMinDate="specMinDate"
            :specMaxDate="specMaxDate"
            :endDate="specMaxDate"
            :selectedDate="selectedDate"
            :disableWeekends="true"/>
        </template>
        <p>{{ service.description }}</p>



        <template v-if="service.id === 1">
    <div class="select-container">
      <label for="underline_select" class="sr-only">Underline select</label>
      <select
        @change="updateSelectedValue"
        id="underline_select"
        class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="" selected>Odaberi poslovnicu</option>
        <option value="os">Osijek</option>
        <option value="ri">Rijeka</option>
        <option value="zg">Zagreb</option>
        <option value="st">Split</option>
      </select>
      <p>{{ selectedPlaceTime }}</p> <!-- Display the selected value in a <p> element -->
    </div>
  </template>



  <template v-if="service.id === 2">
    <div class="select-container">
      <label for="underline_select2" class="sr-only">Underline select</label>
      <select
        id="underline_select2"
        class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="" selected>Odaberi uslugu</option>
        <option value="usl1">usl1</option>
        <option value="usl2">usl2</option>
        <option value="usl3">usl3</option>
        <option value="usl4">usl4</option>
      </select>
    </div>
  </template>



  <template v-if="service.id === 3">
    <div class="select-container">
      <label for="underline_select3" class="sr-only">Underline select</label>
      <select
        id="underline_select3"
        class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="" selected>Odaberi termin</option>
        <option value="usl1">usl1</option>
        <option value="usl2">usl2</option>
        <option value="usl3">usl3</option>
        <option value="usl4">usl4</option>
      </select>



      <div class="mb-4"> 
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-48 h-12 px-4 py-2 inline-flex items-center space-x-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 7A2.5 2.5 0 0 1 19 4.5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.5a2.5 2.5 0 1 1 0 5V12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.5A2.5 2.5 0 0 1 16.5 7Z"/>
    </svg>
    <span class="flex items-center">Rezerviraj termin</span>
  </button>
</div>

<div class="mb-4"> 
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-48 h-12 px-4 py-2 inline-flex items-center space-x-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <span class="flex items-center">Provjeri status rednog broja</span>
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-2.359 10.707-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L7 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
  </button>
</div>


    </div>
  </template>


      </li>
    </ul>
  </div>
</template>

<script>

import VueInlineCalendar from 'vue-inline-calendar';
import "vue-inline-calendar/dist/style.css";

export default {
  name: 'ServicesComponent',
  components: {
    VueInlineCalendar
  },
  data() {
    const startt = new Date();
    const endd = new Date(startt);
    endd.setDate(startt.getDate() + 7);
    
    return {
      services: [
        {
          id: 1,
          title: 'Odabir lokacije',
          description: 'Molimo odaberite željenu poslovnicu'
        },
        {
          id: 2,
          title: 'Moj redni broj',
          description: 'Odaberite uslugu koju ste planirali obaviti'
        },
        {
          id: 3,
          title: 'Odabir termina',
          description: 'Odaberite termin koji vam odgovara'
        }
      ],
      selectedDate: null,
      disableWeekends: true,
      disablePastDays: true,
      specMinDate: startt, 
      specMaxDate: endd, 
      selectedPlaceTime: '', 
    };
  },
  methods: {
    updateSelectedDate(date) {
      console.log("ret")
      console.log(date)
      this.selectedDate = date;
    },
    updateSelectedValue(event) {
      this.selectedPlaceTime = event.target.value; 
    }
  },
}
</script>

<style scoped>
.select-container {
  text-align: center;
  margin: auto;
}

#underline_select {
  color: navy;
  text-align: center;
  margin: auto;
}

#underline_select2 {
  color: navy;
  text-align: center;
  margin: auto;
}

#underline_select3 {
  color: navy;
  text-align: center;
  margin: auto;
}
.services {
  text-align: center;
  padding: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.service-list {

  width: calc(50% - 20px);
  list-style: none;
  padding: 0;

  align-items: center; 
  text-align: center;
}

li {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>