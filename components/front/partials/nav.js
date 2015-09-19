"use strict";

import React from 'react'
import {Link} from 'react-router'

export default class {
  render() {
    let identities = this.props.identities;
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li>
              <Link to="home">Accueil</Link>
            </li>
            <li>
              <a href="/admin">Mon Admin</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

