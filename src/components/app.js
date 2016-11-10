import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div>
    <div id='main'>
      {children}
    </div>
  </div>
)

App.propTypes = {
  children: PropTypes.object
};

export default App;
