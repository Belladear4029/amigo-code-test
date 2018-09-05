import React from 'react';
import axios from 'axios';

class Show extends React.Component {

  state = {
    country: {}
  };

  componentWillMount() {
    axios({
      url: 'https://restcountries.eu/rest/v2/all',
      method: 'GET'
    })
      .then(res => {
        const selectedCountry = res.data.filter(country => {
          country.area == this.props.match.params.id;
        });
        console.log(selectedCountry);
        this.setState({ country: selectedCountry });
      });
  }

  render() {
    // console.log(this.state);
    return (
      <main>
        <h1 className="title is-3">{this.state.country.name}</h1>
      </main>
    );
  }

}

export default Show;
