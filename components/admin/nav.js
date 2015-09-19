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
              <a href="/">Accueil</a>
            </li>
            <li>
              <Link to="admin">Administration</Link>
            </li>
            {identities && identities.map( identity => {
              return (
                <li className="dropdown" key={identity}>
                  <a href="#" className="dropdown-toggle"
                  data-toggle="dropdown" role="button"
                  aria-haspopup="true" aria-expanded="false">
                    {identity}
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="admin-list" params={{identity}}>List</Link>
                    </li>
                    <li>
                      <Link to="admin-new" params={{identity}}>Create</Link>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

