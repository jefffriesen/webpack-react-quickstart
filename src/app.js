import React from 'react';

// Components
import Nav from './components/nav.js';

const App = React.createClass({
  render() {
    return (
      <div>
        <Nav />

        {this.props.children}
      </div>
    );
  }
});

export default App;
