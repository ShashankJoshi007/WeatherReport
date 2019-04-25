import React, { Component } from 'react';
import '../App.css';


class WeatherDetails extends Component {
    render() {
        return (
            <div className="alignRight">
                {this.props.city && <p>City: {this.props.city}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature} </p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default WeatherDetails;