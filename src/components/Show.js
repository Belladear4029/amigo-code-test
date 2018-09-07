import React from 'react';
import axios from 'axios';

class Show extends React.Component {

  state = {
    favourite: false
  };

  componentDidMount = () => {
    axios({
      url: `https://api.unsplash.com/photos/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: 'Client-ID 3303fbd52fa053ed62beecf82a93c6da73f69c79fa7ee9daf0d71b0acdba6d7f'
      }
    })
      .then(res => this.setState({ photo: res.data }))
      .then(() => {
        if(localStorage.getItem('favourites')) {
          this.setState({ favourite: this.checkIfFavourite() });
        }
      });
  }

  checkIfFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    const photoIds = favourites.map(photo => photo.id);
    return photoIds.includes(this.state.photo.id);
  }

  handleFavourite = () => {
    if(!this.state.favourite) {
      this.setState({ favourite: true });
      document.getElementById('star').classList.toggle('fas');
      if(localStorage.getItem('favourites')) {
        const storedArray = JSON.parse(localStorage.getItem('favourites'));
        const newPhotoArray = storedArray.concat(this.toArray(this.state.photo));
        localStorage.setItem('favourites', JSON.stringify(newPhotoArray));
      } else localStorage.setItem('favourites', JSON.stringify(this.toArray(this.state.photo)));
    }
  }

  toArray = (object) => [object];

  render() {
    console.log(this.state);
    // localStorage.clear();
    return (
      <main>
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
            <h2><i id="star" onClick={this.handleFavourite} className={`${!this.state.favourite ? 'far' : 'fas'} fa-star`}></i>{`${!this.state.favourite ? ' Add to Favourites' : ' Added to Favourites!'}`}</h2>
          </div>
        </div>
      </main>
    );
  }

}

export default Show;
