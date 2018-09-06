import React from 'react';
import axios from 'axios';

class Show extends React.Component {

  state = {};

  componentWillMount() {
    axios({
      url: `https://api.unsplash.com/photos/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: 'Client-ID 3303fbd52fa053ed62beecf82a93c6da73f69c79fa7ee9daf0d71b0acdba6d7f'
      }
    })
      .then(res => this.setState({ photo: res.data }));
  }

  handleFavourite() {
    document.getElementById('star').classList.toggle('fas');
  }

  render() {
    console.log('render', this.state.photo);
    return (
      <main>
        <div className="columns">
          <div className="column is-half-desktop is-full-mobile">
            {this.state.photo && <img src={this.state.photo.urls.regular} className="show-image" />}
          </div>
          <div className="column is-half-desktop is-full-mobile">
            {this.state.photo && this.state.photo.location && <h2 className="title is-5">{this.state.photo.location.title}</h2>}
            {this.state.photo && <h2 className="title is-5">{this.state.photo.views ? `${this.state.photo.views} Views` : '0 Views'}</h2>}
            {this.state.photo && <h2 className="title is-5">{this.state.photo.likes ? `${this.state.photo.likes} Likes` : '0 Likes'}</h2>}
            <h2><i id="star" onClick={this.handleFavourite} className="far fa-star"></i> Add to Favourites</h2>
          </div>
        </div>
      </main>
    );
  }

}

export default Show;
