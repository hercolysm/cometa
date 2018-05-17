import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import '../imports/semantic/dist/semantic.min.css';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
