import React from 'react';
import { Link } from 'react-router-dom';

class Favourites extends React.Component {

  state = {
    photos: []
  };

  componentWillMount = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    this.setState({ photos: favourites });
  }

  clearAll = () => {
    localStorage.removeItem('favourites');
    location.reload();
  }

  render() {
    return (
      <main>
        {!this.state.photos && <h1 className="title is-4 is-centered">No favourites yet!</h1>}
        {this.state.photos && <button onClick={this.clearAll} className="button">Clear All</button>}
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

export default Favourites;
