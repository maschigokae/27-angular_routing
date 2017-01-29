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
    {
      name: 'gallery',
      url: '/gallery',
      template: require('../view/gallery/gallery.html'),
      controller: 'GalleryController',
      controllerAs: 'galleryControl',
    },
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
};
