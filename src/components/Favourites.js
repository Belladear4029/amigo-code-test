import React from 'react';

class Favourites extends React.Component {

  state = {
    photos: []
  };

  componentWillMount = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites').split());
    this.setState({ photos: favourites });
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <div className="columns is-multiline">
          {!this.state.photos && <h1 className="title is-4 is-centered">No favourites yet!</h1>}
          {this.state.photos && this.state.photos.map(photo =>
            <div key={photo} className="column is-one-third img-wrap">
              <img src={photo} className="home-img" />
            </div>
          )}
        </div>
      </main>
    );
  }

}

export default Favourites;
