import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import Home from './components/Home';
import Show from './components/Show';
import Favourites from './components/Favourites';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <nav className="navbar">
            <div className="navbar-brand is-centered">
              <Link className="navbar-item" id="home" to="/">Home</Link>
              <Link className="navbar-item" id="favourites" to="/favourites">My Favourites</Link>
            </div>
          </nav>
          <section className="section">
            <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/show/:id" component={Show}/>
              <Route path="/favourites" component={Favourites}/>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
