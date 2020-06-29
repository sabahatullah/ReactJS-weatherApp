import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Result from './components/Result';


const App = () =>{
  
  const [location, setLocation] = useState('');
  const [locationList, setLocationList] = useState([
    {
      id: '',
      value: '',
      country: '',
      temp: '',
      weather: '',
      icon: ''
    }
  ])

  const handleChange = (e) => {
    // console.log(e.target.value)
    
    setLocation(e.target.value)
  }

  const handleSubmit= (e) => {
    console.log(locationList.id)

    if(locationList.id === "") {
      console.log('jhj')
    }

    e.preventDefault();
    
    const apikey = '241f8e06820f595de04bcf24188662ed';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`;

    const fetchDailyData = async() =>{
      const data = await axios.get(url)
      console.log(data.data.visibility);
    }


    axios.get(url).then((data) => {
      // console.log(data.status);
      // console.log(!data.ok);
     

      let idApi = data.data.id;
      let locationApi = data.data.name;
      let countryApi = data.data.sys.country;
      let tempApi = parseInt(data.data.main.temp);
      let weatherApi = data.data.weather[0].main.toLowerCase();
      let iconApi = '../images/'+weatherApi+'-icon.png';

      // console.log(tempApi)

      setLocationList([
        // ...locationList,
        {
          id: idApi,
          value: locationApi,
          country: countryApi,
          temp: tempApi,
          weather: weatherApi,
          icon: iconApi
        }
      ]);

      
      imagesDisplay(weatherApi);

    })

    const imagesDisplay = (weatherApi) => {
      // document.body.className = ""
      // document.body.classList.add(weatherApi);


      let images={
        'haze': 'show haze',
        'Clouds':'show Clouds',
        'Clear':'show Clear',
        'Rain': 'show Rain'
      }

      const bgImage = document.querySelector('.App')
      bgImage.className = "App"
      bgImage.classList.add(weatherApi);

      console.log('new func')

      

      console.log(locationList);



      
      
    }


    setLocation('');
  }
  
  
  return (
      <div className='App'> 
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        <Result locationList={locationList} />
      </div>
  )
}

export default App

