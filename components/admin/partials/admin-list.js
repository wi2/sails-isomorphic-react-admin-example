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
            {fItem.map( fItem => {
              return <th key={fItem.label} onClick={this.sortBy.bind(this, fItem.label)}>{fItem.label}</th>
            })}
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
                {fItem.map( it => {
                  if (it.type === 'binary' ) {
                    if (!item[it.label])
                      return <td key={it.label} />
                    else if (item[it.label].split("/")[0] === 'data:image')
                      return <td key={it.label}><img src={item[it.label]||'data:image/png;base64,null'} /></td>
                    else
                      return <td key={it.label}>A link</td>
                  } else if (it.type === 'boolean' )
                    return <td key={it.label}>{item[it.label]?'true':'false'}</td>
                  else
                    return <td key={it.label}>{item[it.label]||'-'}</td>
                })}
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
