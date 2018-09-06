import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  state = {
    photos: []
  };

  componentWillMount() {
    axios({
      url: 'https://api.unsplash.com/photos/?client_id=3303fbd52fa053ed62beecf82a93c6da73f69c79fa7ee9daf0d71b0acdba6d7f',
      method: 'GET'
    })
      .then(res => this.setState({ photos: res.data }));
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <h1 className="title is-2">Photos</h1>
        <div className="columns is-multiline">
          {this.state.photos && this.state.photos.map(photo =>
            <div key={photo.id} className="column is-one-quarter">
              <Link  to={`/show/${photo.id}`}>
                <img src={photo.urls.regular} />
              </Link>
            </div>
          )}
        </div>
      </main>
    );
  }

}

export default Home;
