'use strict';

describe('Controller: BoardsCtrl', function () {

  // load the controller's module
  beforeEach(module('localboardsUiReduxApp'));

  var BoardsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardsCtrl = $controller('BoardsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
