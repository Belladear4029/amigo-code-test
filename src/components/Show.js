import React from 'react';
import axios from 'axios';

class Show extends React.Component {

  state = {
    country: {}
  };

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

  render() {
    console.log('render', this.state.photo);
    return (
      <main>
        {this.state.photo && <img src={this.state.photo.urls.regular} />}
      </main>
    );
  }

}

export default Show;
