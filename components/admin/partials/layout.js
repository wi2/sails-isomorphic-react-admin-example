"use strict";

import React from 'react'
import Nav from './nav'

export default class {
  render() {
    return (
      <div>
        <Nav {...this.props} />
        {this.props.children}
      </div>
    )
  }
}
