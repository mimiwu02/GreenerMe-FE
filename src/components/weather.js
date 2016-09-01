import React, {Component} from 'react';
import Helpers from '../utils/apiHelpers';
import { Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../styles/weather.css';

class WeatherForecast extends Component{
  constructor(props) {
    super(props);
    this.state ={
      city: "",
      state: "",
      response: []
    };
  }

handleClick(event) {
  Helpers.getForecast(this.state.city, this.state.state).then((res) => {
    this.setState({
      response:res.data
    })
    if (Object.keys(this.state.response).length){
      console.log("Return:", this.state.response.forecast.txt_forecast.forecastday);
    }
  })
}

handleChangeCity(event){
  this.setState({ city: event.target.value})
  console.log(this.state.city);
}

handleChangeState(event){
  this.setState({ state: event.target.value})
  console.log(this.state.state);
}

handleRender(weather,i){
  return(
    <div key={i}>{weather.title}</div>
  )
}
render() {
  const weatherData = this.state.response
  const i = 0;
  return(
    <div>
      <div>
        <p className="desc"> Find out when it is the most optimal time to grow your fruits and vegetables!</p>
        <FormControl className="citySearch" placeholder="city" onChange={this.handleChangeCity.bind(this)}/>
        <FormControl className="stateSearch" maxLength="2" placeholder="state- ex. NY, NJ, CA" onChange={this.handleChangeState.bind(this)}/>
        <Button className="searchButton" bsStyle="warning" bsSize="small" onClick={this.handleClick.bind(this)}>Look Up</Button>
      </div>
      <ListGroup>
      {weatherData.forecast ?
             weatherData.forecast.txt_forecast.forecastday.map(
         function(weather, i) {
             return <ListGroupItem className="weatherforecast" key={i}>
               <p>{weather.title}</p>
               <p><img src={weather.icon_url}/></p>
               <p>{weather.fcttext}</p>
              </ListGroupItem>

           })
             :
             null
           }
      </ListGroup>
    </div>
  )};
}
export default WeatherForecast;
