import React from 'react';
import axios from 'axios';
import Flash from '../lib/Flash';
import FlashMessages from './FlashMessages';

class Show extends React.Component {

  state = {
    favourites: []
  };

  componentWillMount = () => {
    axios({
      url: `https://api.unsplash.com/photos/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: 'Client-ID 3303fbd52fa053ed62beecf82a93c6da73f69c79fa7ee9daf0d71b0acdba6d7f'
      }
    })
      .then(res => this.setState({ photo: res.data }));
  }

  handleFavourite = () => {
    console.log('favourites', this.state.favourites);
    document.getElementById('star').classList.toggle('fas');
    if(this.state.favourites.includes(this.state.photo)) {
      this.state.favourites.splice(this.state.favourites.indexOf(this.state.photo), 1);
    } else this.state.favourites.push(this.state.photo);
    const obj = localStorage.getItem('favourites').split();
    const photoArray = Object.values(obj).map(value => {
      return [value];
    });
    console.log(typeof(photoArray));
    // const storedArray = JSON.parse(localStorage.getItem('favourites'));
    // console.log(typeof(storedArray));
    // const newPhotoArray = storedArray.push(this.state.photo.urls.regular);
    // localStorage.setItem('favourites', JSON.stringify(newPhotoArray));
    // Flash.setMessage('success', 'Added to Favourites');
  }

  render() {
    // console.log('localStorage', localStorage);
    return (
      <main>
        <FlashMessages />
        <div className="columns">
          <div className="column is-half-desktop is-full-mobile">
            {this.state.photo && <img src={this.state.photo.urls.regular} />}
          </div>
          <div className="column is-half-desktop is-full-mobile">
            {this.state.photo && this.state.photo.location && <h2 className="title is-5">{this.state.photo.location.title}</h2>}
            {this.state.photo && <h2>Captured by <a href={this.state.photo.user.portfolio_url} className="photographer"> {this.state.photo.user.name}</a></h2>}
            <hr />
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
