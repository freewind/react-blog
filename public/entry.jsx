import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import Article from './article.jsx';
import Articles from './articles.jsx';
import Layout from './layout.jsx';
require('bootstrap-webpack');

const router = <Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRedirect to="/articles"/>
    <Route path="/articles" component={Articles}/>
    <Route path="/article" component={Article}/>
  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
