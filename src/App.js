import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Title from './Components/Title';
import { Container } from 'react-bootstrap';
import WeatherDetails from './Components/WeatherDetails';


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b736c3f3244458aa238af801d6d4798`);
    const data = await api_call.json();
    if (city) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        error: ""
      })
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        error: "Please enter city"
      })
    }
  }
  render() {
    return (
      <Container className="App">
        <Title />
        <SearchBar getWeather={this.getWeather} />
        <WeatherDetails
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          error={this.state.error}
        />
      </Container>
    );
  }

}

export default App;
