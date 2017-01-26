'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/home');

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeControl',
    },
    {
      name: 'register',
      url: '/register',
      template: require('../view/register/register.html'),
      controller: 'RegisterController',
      controllerAs: 'registerControl',
    },
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
};
