(function () {

  'use strict';

  angular
    .module('app')
    .controller('AdminController', adminController);

  adminController.$inject = ['$http'];

  function adminController($http) {

    var vm = this;
    var API_URL = 'http://localhost:8081';
    
    vm.adminPing = function() {
      vm.data = '';
      $http.post(API_URL + '/settings').then(function(result) {
        vm.data = result.data;
      }, function(error) {
        vm.data = error.data;
      });
    }

  }

})();
