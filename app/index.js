var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// Invoke the React component
ReactDOM.render(
  routes,
  document.getElementById('app')
)
