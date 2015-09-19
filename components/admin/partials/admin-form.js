"use strict";

import React from 'react'
import {Form, Textarea, RenderForm, CharField, SlugField, EmailField, URLField, FilePathField, GenericIPAddressField, ChoiceField, DateField, DateTimeField, BooleanField, IntegerField, FloatField, FileField, MultipleFileField, ImageField} from 'newforms'
import BootstrapForm, {Container, Row} from 'newforms-bootstrap'

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
          let params = item;

          if (data && data[item.label])
            params.initial = data[item.label];
          else if (item.defaultsTo)
            params.initial = item.defaultsTo;
          delete params.defaultsTo;

          switch(item.input) {
            case 'binary':  mobj[item.label] = FileField(params); break;
            case 'email':   mobj[item.label] = EmailField(params); break;
            case 'url':     mobj[item.label] = URLField(params); break;
            case 'urlish':  mobj[item.label] = FilePathField(params); break;
            case 'ipv4':    mobj[item.label] = GenericIPAddressField(params, 'ipv4'); break;
            case 'ipv6':    mobj[item.label] = GenericIPAddressField(params, 'ipv6'); break;
            case 'text':    params.widget = Textarea;
            case 'string':  mobj[item.label] = CharField(params); break;
            case 'slug':    mobj[item.label] = SlugField(params); break;
            case 'integer': mobj[item.label] = IntegerField(params); break;
            case 'float':   mobj[item.label] = FloatField(params); break;
            case 'date':    mobj[item.label] = DateField(params); break;
            case 'datetime':mobj[item.label] = DateTimeField(params); break;
            case 'boolean': mobj[item.label] = BooleanField(params); break;
            case 'choice':  params.choices = item.in;
                            mobj[item.label] = ChoiceField(params); break;
          }
        }
      }
    }
    // console.log(mobj);
    // mobj['image'] = ImageField();
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

    if (this.props.modelForm)
      return (
        <form onSubmit={this._onSubmit.bind(this)} encType="multipart/form-data">
          <RenderForm form={this.mForm} ref="mForm">
            {this.props.modelForm}
          </RenderForm>
        </form>
      );

    return (
      <form onSubmit={this._onSubmit.bind(this)} encType="multipart/form-data">
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
