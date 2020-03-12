import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loveit!</h1>
          <h1>&#x1f496;</h1>
        </header>

        <div className="App-body">
          <div className="Love-list-wrapper">
            <ul className="Love-list">
              <li className="Love">
                🖤
                <span className="song-title">Bloom</span>
                <span className="song-artist">ODESZA</span>
                <span className="song-lovetime">0:29</span>
                <span className="song-lovedwhen">3/12/2020</span>
              </li>
              <li className="Love">
                🖤
                <span className="song-title">Latch</span>
                <span className="song-artist">Disclosure</span>
                <span className="song-lovetime">1:17</span>
                <span className="song-lovedwhen">3/12/2020</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
