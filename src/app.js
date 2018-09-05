import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Show from './components/Show';

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
          <section className="section">
            <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/show" component={Show}/>
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
