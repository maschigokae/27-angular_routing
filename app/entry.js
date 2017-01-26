'use strict';

require('./scss/main.scss');

const path = require('path');
// const camelcase = require('camelcase'); // unused - comment out to make eslint happy
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

const routesApp = angular.module('routesApp', [uiRouter]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( fileName => {
  routesApp.config(context(fileName));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( fileName => {
  let name = pascalcase(path.basename(fileName, '.js'));
  routesApp.controller(name, context(fileName));
});
