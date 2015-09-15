"use strict";

import React from 'react'
import {Link} from 'react-router'

export class Nav {
  render() {
    let identities = this.props.identities;
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

