import React, { Component } from 'react'
import '../App.css';
export class Nav extends Component {
    render() {
        return (
            <div>

            <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>

       </div>
        )
    }
}

export default Nav
