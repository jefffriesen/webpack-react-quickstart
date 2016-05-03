import React from 'react'
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="nav nav-pills nav-stacked">
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
      </div>
    )
  }
})
