import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  state = {
    photos: []
  };

  componentWillMount = () => {
    this.getPictures();
  }

  getPictures = () => {
    axios({
      url: 'https://api.unsplash.com/photos/random?count=30',
      method: 'GET',
      headers: {
        Authorization: 'Client-ID 3303fbd52fa053ed62beecf82a93c6da73f69c79fa7ee9daf0d71b0acdba6d7f'
      }
    })
      .then(res => this.setState({ photos: res.data }));
  }

  render() {
    return (
      <main>
        <button className="button" onClick={this.getPictures}>MIX</button>
        <div className="columns is-multiline">
          {this.state.photos && this.state.photos.map(photo =>
            <div key={photo.id} className="column is-one-third img-wrap">
              <Link  to={`/show/${photo.id}`}>
                <img src={photo.urls.regular} className="home-img" />
                {photo.location && <p className="img-description">{photo.location.name}</p>}
              </Link>
            </div>
          )}
        </div>
      </main>
    );
  }

}

export default Home;
