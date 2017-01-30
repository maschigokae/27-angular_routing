'use strict';

describe('register controller', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.registerControl = new $controller('RegisterController');
    });
  });

  describe('register controller title property', () => {
    it('should populate h1 element with register title text', () => {
      expect(this.registerControl.title).toEqual('Register');
    });
  });
});
