import { ref, computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'

const getCities = () => {

  const route = useRoute();
  const router = useRouter();

  const cityId = computed(() => route.params.id)

  const state = ref({
    newAuthor: '',
    newCity: '',
    cities: {}
  })

  const GetAllCities = async () => {
    try {
       await fetch("http://localhost:3000/cities")
      .then(res => res.json())
      .then(data => {
        state.value.cities = data
         console.log("gradovi")
      })
    }
    catch(error) {
      console.log(error) 
    }
  }
  
  const newCity = () => { 
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify({
        author: state.value.newAuthor,
        city: state.value.newCity
      }) 
    }
      fetch("http://localhost:3000/cities/new", 
      requestOptions
    ).then(GetAllCities())
  }
  

  const deleteCity = (_id) => {
    fetch("http://localhost:3000/cities/delete/" + _id, { method: "DELETE"})
      .then(GetAllCities())
  }



  
  const editCity = () => { 
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
       
      },
      body: JSON.stringify({
        author: state.value.newAuthor,
        city: state.value.newCity
      }) 
    }
    fetch("http://localhost:3000/cities/update/" + cityId.value, 
    requestOptions)
     
      .then(res =>  res.body ) 
      .then(res => {console.log(res)}) 
      router.push('/cities')
  }




  const city = ref({})
  const GetSpecificCity = async () => {
    try {
      fetch("http://localhost:3000/cities")
        .then(res =>  res.json() ) 
        .then(data => {
            city.value = data.filter(t => t._id === cityId.value)
        })
    }
    catch(error) {
      console.log(error)
    }
  }


  return {
    city,
    cityId,
    GetSpecificCity,
    state,
    GetAllCities, 
    newCity,
    deleteCity,
    editCity
  }
}

export default getCities