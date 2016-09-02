import axios from 'axios';

export default {

getForecast: function(city,state) {
  const method = 'POST';
  const url= 'https://stark-coast-47883.herokuapp.com/weather';
  const dataObj = {city: city, state: state}

  return axios({
    method: method,
    url: url,
    data: dataObj,

    })
  }
}
