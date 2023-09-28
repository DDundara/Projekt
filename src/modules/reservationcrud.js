import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const getReservations = () => {

  const route = useRoute();
  

  const reservationId = computed(() => route.params.id)

  const reservationState = ref({
    dateStarts: Date(),
    dateEnds: Date,
    reservationActive: true,
    newCity: null,
    reservations: {}
  })

  const GetAllReservations = async () => {
    try {
       await fetch("http://localhost:3000/reservations")
      .then(res => res.json())
      .then(data => {
        reservationState.value.reservations = data
      })
    }
    catch(error) {
        console.log("llslslls")
      console.log(error) 
    }
  }
  
  const newReservation = async (dateStart, dateEnd, action, city) => {
      console.log("uslii", dateStart)
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newdateStart: dateStart,
        newDateEnd: dateEnd,
        newReservationAction: action,
        newCity: city,
      }),
    };

    try {
      const response = await fetch("http://localhost:3000/reservations/new", requestOptions);
      if (response.ok) {
        console.log(requestOptions.body)
        await GetAllReservations(); // Refresh the reservation list after adding a new one
        console.log("Reservation created successfully");
      } else {
        console.error("Failed to create a reservation");
      }
    } catch (error) {
      console.error("An error occurred while creating a reservation", error);
    }
  };
  

//   const deleteService = (_id) => {
//     fetch("http://localhost:3000/reservation/delete/" + _id, { method: "DELETE"})
//       .then(GetAllReservations())
//   }



  
//   const editCity = () => { 
//     const requestOptions = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//         // "auth-token": state.token
//       },
//       body: JSON.stringify({
//         author: state.value.newAuthor,
//         city: state.value.newCity
//       }) 
//     }
//     fetch("http://localhost:3000/cities/update/" + cityId.value, 
//     requestOptions)
//      // .then(GetAllTodos())
//       .then(res =>  res.body ) 
//       .then(res => {console.log(res)}) 
//       router.push('/cities')
//   }




  const reservation = ref({})
  const GetSpecificReservation = async () => {
    try {
      fetch("http://localhost:3000/reservations")
        .then(res =>  res.json() ) 
        .then(data => {
            reservation.value = data.filter(t => t._id === reservationId.value)
        })
    }
    catch(error) {
      console.log(error)
    }
  }


  return {
    reservation,
    reservationId,
    GetSpecificReservation,
    reservationState,
    GetAllReservations, 
    newReservation
    //deleteReservation
  }
}

export default getReservations