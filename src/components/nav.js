import React from 'react'
import {Link} from 'react-router';

let Nav = React.createClass({
  render() {
    return (
      <div className="nav nav-pills nav-stacked">
        <li><Link to="app">Home</Link></li>
        <li><Link to="page1">Page 1</Link></li>
      </div>
    )
  }
})

export default Nav;