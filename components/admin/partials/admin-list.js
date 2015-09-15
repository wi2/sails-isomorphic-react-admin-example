"use strict";

import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
  render() {
    let fItem = this.props.formItem||[{label: 'id'}];
    return (
      <div className="table-responsive">
        <h1>{this.props.identity} List</h1>
        <table className="table">
          <thead>
            <tr>
            {fItem.map( fItem => {
              return <th key={fItem.label}> {fItem.label} </th>
            })}
            </tr>
          </thead>
          <tbody>
          {this.props.items && this.props.items.map( item => {
            return (
              <tr key={item.id}>
                {fItem.map( it => {
                  return (
                    <td key={it.label}>
                      <Link to="admin-id" params={{identity:this.props.identity, id: item.id}}>
                        {item[it.label]||'-'}
                      </Link>
                    </td>
                  )
                })}
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

    );
  }
}
