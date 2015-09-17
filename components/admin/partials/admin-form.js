"use strict";

import React from 'react'
import {Form, Textarea, ErrorList, RenderForm, CharField, EmailField, ChoiceField, DateField, DateTimeField, BooleanField, IntegerField, FloatField, validators} from 'newforms'
import BootstrapForm, {Container, Row} from 'newforms-bootstrap'
import * as models from './admin-models.js'

export default class extends React.Component {
  componentWillMount() {
    this.makeForm(this.props.formItem)
  }
  componentWillReceiveProps(props) {
    if (this.mForm)
      delete this.mForm;
  }
  componentWillUpdate(props) {
    if (this.props.formItem != props.formItem)
      this.makeForm(props.formItem)
  }
  makeForm(formItem) {
    let data = this.props.item||null;
    let mobj = {};
    if (formItem) {
      for(let i=0,len=formItem.length; i<len; i++) {
        let item = formItem[i];
        if (['id','createdAt','updatedAt'].indexOf(item.label) === -1) {
          let params = {required: item.required};
          if (item.defaultsTo || data)
            params.initial = data[item.label]||item.defaultsTo;
          switch(item.input) {
            case 'email':   mobj[item.label] = EmailField(params); break;
            case 'text':    params.widget = Textarea;
            case 'string':  mobj[item.label] = CharField(params); break;
            case 'integer': mobj[item.label] = IntegerField(params); break;
            case 'float':   mobj[item.label] = FloatField(params); break;
            case 'date':    mobj[item.label] = DateField(params); break;
            case 'datetime':mobj[item.label] = DateTimeField(params); break;
            case 'boolean': mobj[item.label] = BooleanField(params); break;
            case 'choice':  params.choices = item.in
                            mobj[item.label] = ChoiceField(params); break;
          }
        }
      }
    }

    this.mForm = Form.extend(mobj);
  }
  _onSubmit(e) {
    e.preventDefault();
    let form = this.refs.mForm.getForm()
    if(form.validate())
      this.props.onSave(form.cleanedData)
  }
  render() {
    if (!this.mForm)
      return <form />;

    if (models[this.props.identity])
      return (
        <form onSubmit={this._onSubmit.bind(this)}>
          <RenderForm form={this.mForm} ref="mForm">
            {models[this.props.identity]}
          </RenderForm>
        </form>
      );

    return (
      <form onSubmit={this._onSubmit.bind(this)}>
        <h1>{this.props.identity}</h1>
        <hr />
        <p className="text-right">
          <button className="btn btn-default">Save</button>
        </p>
        <RenderForm form={this.mForm}  ref="mForm">
          <BootstrapForm />
        </RenderForm>
      </form>
    );
  }
}
