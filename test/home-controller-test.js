'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('home controller', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeControl = new $controller('HomeController');
    });
  });

  describe('home controller title property', function() {
    it('should populate h1 element with home title text', () => {
      expect(this.homeControl.title).toEqual('Home');
    });
  });
});
