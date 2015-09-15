"use strict";

import React from 'react'
import {Layout} from '../layout.js'
import AdminItem from '../partials/admin-form.js'
import AdminList from '../partials/admin-list.js'


export class Home extends React.Component {
  componentWillMount() {
    this.getHome();
  }
  componentWillUpdate(props) {
      this.getHome();
  }
  getHome() {
    if (typeof io !== "undefined")
      io.socket.get("/admin", (res => { this.setState(res) }).bind(this));
  }
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <h1>ADMIN: HomePage</h1>
      </Layout>
    );
  }
}

class ListItem extends React.Component {
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
      }).bind(this));
    }
  }
  onSave(data) {}
  render() {
    if (this.props.formItem || (this.state && this.state.formItem))
      var MyAdminItem = <AdminItem {...this.props} {...this.state} onSave={this.onSave.bind(this)} />;
    return (
      <Layout {...this.props} {...this.state}>
        {MyAdminItem||''}
      </Layout>
    );
  }
}
export class ListItemUpdate extends ListItem {
  onSave(data) {
    if (typeof io !== "undefined") {
      let identity = this.props.identity||this.props.params.identity;
      io.socket.put("/" + identity + "/" + this.props.params.id, data, (res => {

      }).bind(this));
    }
  }
}

export class ListItemNew extends ListItem {
  onSave(data) {
    if (typeof io !== "undefined") {
      let identity = this.props.identity||this.props.params.identity;
      io.socket.post("/" + identity, data, ( res => {

      }).bind(this));
    }
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
  getItems(identity) {
    if (typeof io !== "undefined") {
      io.socket.get("/admin/" + identity, ( res => {
        this.setState(res)
      }).bind(this));
    }
  }
  render() {
    return (
      <Layout {...this.props} {...this.state}>
        <AdminList items={[]} {...this.props.params} {...this.props} {...this.state} />
      </Layout>
    );
  }
}


