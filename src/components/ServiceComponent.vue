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

  @change="updateSelectedCity($event,state.cities)"

  class="cursoruser-pointer p-2 w-full rounded-full"

  v-model="selectedCity"

  id="underline_select">

>

  <option :value="null">Odaberi poslovnicu</option>

  <option

    v-for="(city, index) in state.cities"

    :key="index"

    :value="city.city"

  >

    {{ city.city }}

  </option>

</select>





    <p>{{ selectedPlaceTime }}</p> <!-- Display the selected value in a <p> element -->

  </div>

</template>







<template v-if="service.id === 2">

  <div class="select-container">

    <label for="underline_select2" class="sr-only">Underline select</label>

    

    <select

  @change="updateSelectedService"

  class="cursoruser-pointer p-2 w-full rounded-full"

  v-model="selectedService"

  id="underline_select"

>

  <option :value="null">Odaberi uslugu</option>

  <template v-for="(ser, index) in serviceState.services" :key="index">

    <option :value="ser.serviceName" v-if="ser.serviceName && selectedCityServicesIDs.includes(ser._id)">

      {{ ser.serviceName }}

    </option>

  </template>

</select>







  </div>

</template>







<template v-if="service.id === 3">

  <div class="select-container">

    <label for="underline_select3" class="sr-only">Underline select</label>

    <input type="text" v-model="timeInput" @input="updateSelectedDate2" placeholder="Enter time (hh:mm)">

    <div v-if="inputError" class="error-message" style="color: red;">{{ inputError }}</div>

    <br/>

    <br/>



    <div class="mb-4"> 

<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-48 h-12 px-4 py-2 inline-flex items-center space-x-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">

    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 7A2.5 2.5 0 0 1 19 4.5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.5a2.5 2.5 0 1 1 0 5V12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.5A2.5 2.5 0 0 1 16.5 7Z"/>

  </svg>

  <span class="flex items-center">Rezerviraj termin</span>

</button>

</div>



<div class="mb-4"> 

<button @click="createNewReservation" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-48 h-12 px-4 py-2 inline-flex items-center space-x-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

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

import citycrud from '../modules/citycrud'

import servicecrud from '../modules/servicecrud'

import reservationcrud from '../modules/reservationcrud'

import { onMounted } from 'vue'



export default {

name: 'ServicesComponent',

components: {

  VueInlineCalendar

},

setup() {

    const { state, GetAllCities, newCity, } = citycrud();

    const { serviceState, GetAllServices} = servicecrud();

    const { reservationState, GetAllReservations, newReservation } = reservationcrud();



    const createNewReservation = () => {

      // Pass the necessary variables to the newReservation function

      const dateStart = new Date(); // Replace with your date value

      const dateEnd = new Date(); // Replace with your date value

      const action = true; // Replace with your action value

      console.log("create");

      newReservation(dateStart, dateEnd, action, "klk");

    };



    onMounted(() => {

      GetAllCities();

      GetAllServices();

      GetAllReservations();

    });



    return { state, GetAllCities, newCity, serviceState, GetAllServices, reservationState, GetAllReservations, createNewReservation };

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

    selectedCity: null,

    selectedService: null,

    selectedCityServicesIDs: [],

    timeInput: '',

    inputError: ''

  };

},

methods: {

  updateSelectedDate(date) {

    this.selectedDate = date;

    console.log(date)

  },

  updateSelectedDate2() {

    if (this.selectedDate == null) {

      return

    }

      const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

      if (this.timeInput.match(timePattern)) {

        const [hours, minutes] = this.timeInput.split(':');

        this.selectedDate.setHours(parseInt(hours), parseInt(minutes));

        console.log(this.selectedDate)

        this.inputError = null

      } else {

        this.inputError = 'Invalid time format. Please use "hh:mm" format.';

      }

    },

  updateSelectedValue(event) {

    this.selectedPlaceTime = event.target.value; 

  },

  updateSelectedCity(event,services) {

    this.selectedCityy = event.target.value; 

    this.selectedService = null

    this.selectedCityServicesIDs = []

    services.forEach(item => {

      if (item.city == this.selectedCity) {

        this.extractObjectIds(item.services)

      }

    });

  },

  updateSelectedService(event) {

    this.selectedService = event.target.value; 

  },

 extractObjectIds(input) {

  const objectIdPattern = /ObjectId\("([a-fA-F0-9]+)"\)/g;

  const matches = input.match(objectIdPattern);

  if (matches) {

    this.selectedCityServicesIDs = matches.map(match => match.replace(/ObjectId\("([a-fA-F0-9]+)"\)/, '$1'))

    return matches.map(match => match.replace(/ObjectId\("([a-fA-F0-9]+)"\)/, '$1'));

  } else {

    return [];

  }

  

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
  color: #2c3e50;
  margin-top: 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>