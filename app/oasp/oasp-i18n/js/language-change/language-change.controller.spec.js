describe('Controller: LanguageChangeCntl', function () {
    'use strict';
    var $scope;

    beforeEach(module('oasp.oaspI18n'));

    beforeEach(inject(function ($rootScope, $controller) {
        //given
        $scope = $rootScope.$new();
        $controller('LanguageChangeCntl', {$scope: $scope});
    }));
    it('should set api', function () {
        expect($scope.changeLanguage).toBeDefined();
        expect($scope.getCurrentLanguage).toBeDefined();
    });
});