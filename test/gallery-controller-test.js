'use strict';

describe('gallery controller', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryControl = new $controller('GalleryController');
    });
  });

  describe('gallery controller title property', () => {
    it('should populate h1 element with gallery title text', () => {
      expect(this.galleryControl.title).toEqual('Gallery');
    });
  });
});
