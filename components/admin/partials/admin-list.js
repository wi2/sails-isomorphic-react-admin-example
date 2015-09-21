"use strict";

import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
  sortBy(lbl, e) {
    e.preventDefault();
    this.props.sortBy(lbl);
  }
  filterBy(lbl, e) {
    e.preventDefault();
    this.props.filterBy(lbl, e.target.value);
  }
  render() {
    let fItem = this.props.formItem||[{label: 'id'}];
    return (
      <div className="table-responsive">
        <h1>{this.props.identity} List</h1>
        <table className="table">
          <thead>
            <tr>
              {fItem.map( fItem => <th key={fItem.label} onClick={this.sortBy.bind(this, fItem.label)}>{fItem.label}</th> )}
              <th />
            </tr>
            <tr>
            {fItem.map( fItem => {
              return (
                <th key={fItem.label}>
                  <input type="text" name={fItem.label} onChange={this.filterBy.bind(this, fItem.label)} />
                </th>
              );
            })}
              <th />
            </tr>
          </thead>
          <tbody>
          {this.props.items && this.props.items.map( item => {
            let URLparams = {identity:this.props.identity, id: item.id};
            return (
              <tr key={item.id}>
                {fItem.map( it => <td key={it.label}><Content item={item[it.label]} type={it.type} /></td> )}
                <td><Link to="update" params={URLparams}>Edit</Link></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

    );
  }
}

class Content extends React.Component {
  render() {
    let item = this.props.item;
    if (this.props.type === 'binary' ) {
      if (!item)
        return <span />;
      else if (item.split("/")[0] === 'data:image')
        return <img src={item||'data:image/png;base64,null'} />;
      else
        return <a href={item}>Download</a>;
    } else if (this.props.type === 'boolean' ) {
      return <span>{item?'true':'false'}</span>;
    } else {
      return <span>{item||'-'}</span>;
    }
  }
}
