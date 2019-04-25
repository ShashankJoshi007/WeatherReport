import React from 'react';
import '../App.css';


class SearchBar extends React.Component {
    render() {
        return (
                <form  onSubmit={this.props.getWeather}>
                    <div className="input-group add-on">
                        <input className="form-control" placeholder="Enter City..." name="city" type="text" />
                        <button>Search</button>
                    </div>
                </form>
        )
    }

}

export default SearchBar;