import React, { Component } from 'react';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return <>
      <h3 className="title">
        Studio <br /> Ghibli
      </h3>
      <Nav />
      <ul className="content">
        <li className="content__card show">
          <img src="https://source.unsplash.com/random?v=1" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li className="content__card">
          <img src="https://source.unsplash.com/random?v=2" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li className="content__card">
          <img src="https://source.unsplash.com/random" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
    </>;
  }
}

export default App;
