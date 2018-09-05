import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  state = {
    countries: []
  };

  componentWillMount() {
    axios({
      url: 'https://restcountries.eu/rest/v2/all',
      method: 'GET'
    })
      .then(res => this.setState({ countries: res.data }));
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <h1 className="title is-2">Title</h1>
        <div className="columns is-multiline">
          {this.state.countries && this.state.countries.map(country =>
            <div key={country.alpha2Code} className="column is-one-quarter">
              <Link  to={`/show/${country.area}`}>
                <img src={country.flag} width="200px" />
              </Link>
            </div>
          )}
        </div>
      </main>
    );
  }

}

export default Home;
