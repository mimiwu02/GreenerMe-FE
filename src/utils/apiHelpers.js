import axios from 'axios';

export default {

getForecast: function(city,state) {
  const method = 'POST';
  const url= 'http://localhost:3000/weather';
  const dataObj = {city: city, state: state}

  return axios({
    method: method,
    url: url,
    data: dataObj,

    })
  }
}
