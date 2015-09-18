"use strict";

import React from 'react'
import {Container, Row, Field} from 'newforms-bootstrap'

export const comment = (
  <Container autoColumns="md">
    <h1>Commentaire</h1>
    <hr />
    <p className="text-right">
      <button className="btn btn-default">Save</button>
    </p>
    <Row>
      <Field name="name" md="8"/>
      <Field name="post"/>
    </Row>
    <Row>
      <Field name="message"/>
    </Row>
  </Container>
);

export const post = (
  <Container autoColumns="md">
    <h1>Article</h1>
    <hr />
    <p className="text-right">
      <button className="btn btn-default">Save</button>
    </p>
    <Row>
      <Field name="title" md="4"/>
      <Field name="content"/>
    </Row>
  </Container>
);

export const image = (
  <Container autoColumns="md">
    <h1>Image</h1>
    <hr />
    <p className="text-right">
      <button className="btn btn-default">Save</button>
    </p>
    <Row>
      <Field name="title" />
    </Row>
    <Row>
      <Field name="small" md="4" />
      <Field name="medium" md="4" />
      <Field name="big"/>
    </Row>
  </Container>
);
