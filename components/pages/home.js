"use strict";

import React from 'react'
import {Form, RenderForm, CharField, EmailField, ChoiceField, DateTimeField, BooleanField, IntegerField} from 'newforms'
import BootstrapForm from 'newforms-bootstrap'
import {Layout} from '../layout.js'

export default class extends React.Component {
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <h1>HomePage</h1>
      </Layout>
    );
  }
}