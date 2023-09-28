import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const getServices = () => {

  const route = useRoute();


  const serviceId = computed(() => route.params.id)

  const serviceState = ref({
    newServiceName: '',
    newDurationMins: '',
    services: {}
  })

  const GetAllServices = async () => {
    try {
       await fetch("http://localhost:3000/services")
      .then(res => res.json())
      .then(data => {
        serviceState.value.services = data
        console.log("uspjeh")
      })
    }
    catch(error) {
        console.log("llslslls")
      console.log(error) 
    }
  }
  
  const newService = () => { 
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify({
        serviceName: serviceState.value.newServiceName,
        durationMins: serviceState.value.newDurationMins
      }) 
    }
      fetch("http://localhost:3000/services/new", 
      requestOptions
    ).then(GetAllServices())
  }
  

  const deleteService = (_id) => {
    fetch("http://localhost:3000/services/delete/" + _id, { method: "DELETE"})
      .then(GetAllServices())
  }



  const service = ref({})
  const GetSpecificService = async () => {
    try {
      fetch("http://localhost:3000/cities")
        .then(res =>  res.json() ) 
        .then(data => {
            service.value = data.filter(t => t._id === serviceId.value)
        })
    }
    catch(error) {
      console.log(error)
    }
  }


  return {
    service,
    serviceId,
    GetSpecificService,
    serviceState,
    GetAllServices, 
    newService,
    deleteService
  }
}

export default getServices