"use strict";

import React from 'react'
import DefaultLayout from '../partials/layout'
import AdForm from '../partials/admin-form'
import AdList from '../partials/admin-list'


export class Home extends React.Component {
  componentWillMount() {
    if (typeof io !== "undefined")
      io.socket.get("/admin", (res => { this.setState(res) }));
  }
  render() {
    let CurrentLayout = this.props.layout||DefaultLayout;
    return (
      <CurrentLayout {...this.props} {...this.state}>
        <h1>ADMIN: HomePage</h1>
      </CurrentLayout>
    );
  }
}

class FormItem extends React.Component {
  componentWillMount() {
    if (!this.props.item)
      this.getItem(this.props.identity||this.props.params.identity);
  }
  componentWillUpdate(props) {
    if (this.props.params.identity !== props.params.identity)
      this.getItem(props.params.identity);
  }
  getItem(identity) {
    this.loading = true;
    let url = (this.props.params.id) ? "/" + this.props.params.id : "/new";
    if (typeof io !== "undefined") {
      io.socket.get("/admin/" + identity + url, ( res => {
        this.loading = false;
        this.setState(res);
      }));
    }
  }

  multipart(data, binaries, cb) {
    if (binaries.length) {
      let tmp = binaries.pop();
      if (data[tmp.label] instanceof Blob) {
        let reader = new FileReader();
        reader.onload = (upload) => {
          data[tmp.label] = upload.target.result;
          this.multipart(data, binaries, cb);
        };
        reader.readAsDataURL(data[tmp.label]);
      } else
        this.multipart(data, binaries, cb);
    } else
      cb(data);
  }
  saving(data, url, cb) {
    if (typeof io !== "undefined") {
      if (typeof url === 'function') {
        cb = url;
        url = "";
      }
      var identity = this.props.identity||this.props.params.identity
        , fItem = this.props.formItem;
      if (this.state && this.state.formItem)
        fItem = this.state.formItem;
      var binaries = fItem.filter( a => { return a.type === 'binary' } );
      this.multipart(data, binaries, result => {
        io.socket.post("/" + identity + url, result, ( res => { if (cb) cb(res); }))
      });
    }
  }
  onSave(data) {}
  render() {
    let CurrentLayout = this.props.layout||DefaultLayout;
    let modelForm;
    if (this.props.models) {
      let identity = this.props.identity||this.props.params.identity;
      modelForm = this.props.models[identity];
    }
    if (this.props.formItem || (this.state && this.state.formItem))
      var CurrentAdForm = <AdForm {...this.props} {...this.state} onSave={this.onSave.bind(this)} modelForm={modelForm} />;
    return (
      <CurrentLayout {...this.props} {...this.state}>
        {CurrentAdForm||''}
      </CurrentLayout>
    );
  }
}
export class Update extends FormItem {
  onSave(data) {
    this.saving(data, "/" + this.props.params.id, res => { console.log(res); });
  }
}

export class Create extends FormItem {
  onSave(data) {
    this.saving(data, res => { console.log(res); });
  }
}

export class List extends React.Component {
  componentWillMount() {
    if (!this.props.item) {
      this.getItems(this.props.identity||this.props.params.identity);
    }
  }
  componentWillUpdate(props) {
    if (this.props.params.identity !== props.params.identity) {
      this.getItems(props.params.identity);
    }
  }
  getItems(identity, params) {
    if (typeof io !== "undefined") {
      io.socket.get("/admin/" + identity, params||{}, ( res => {
        this.setState(res)
      }));
    }
  }
  filterBy(lbl, val) {
    let filter = {};
    filter[lbl] = {contains: val};
    this.getItems(this.props.identity||this.props.params.identity, val ? {contain: filter} : null );
  }
  sortBy(lbl) {
    if (!this.sort) {
      this.sort = [lbl, 'DESC'];
    } else {
      if (this.sort[0] === lbl)
        this.sort[1] = (this.sort[1] === 'ASC') ? 'DESC' : 'ASC';
      else
        this.sort[0] = lbl; // this.sort = [lbl, 'ASC'];
    }
    this.getItems(this.props.identity||this.props.params.identity, {sort: this.sort.join(" ")} );
  }
  render() {
    let CurrentLayout = this.props.layout||DefaultLayout;
    return (
      <CurrentLayout {...this.props} {...this.state}>
        <AdList items={[]} {...this.props.params} {...this.props} {...this.state}
          sortBy={this.sortBy.bind(this)} filterBy={this.filterBy.bind(this)} />
      </CurrentLayout>
    );
  }
}


