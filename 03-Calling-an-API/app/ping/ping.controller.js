(function () {

  'use strict';

  angular
    .module('app')
    .controller('PingController', pingController);

  pingController.$inject = ['$http', 'authService'];

  function pingController($http, authService) {

    var API_URL = 'http://localhost:8081';
    var vm = this;
    vm.auth = authService;
    vm.data = '';

    vm.ping = function() {
      vm.data = '';
      $http.get(API_URL + '/8d30b54c').then(function(result) {
        vm.data = result.data;
      }, function(error) {
        vm.data = error;
      });
    }

    vm.securedPing = function() {
      vm.data = '';
      $http.get(API_URL + '/settings/account/search').then(function(result) {
        vm.data = result.data;
      }, function(error) {
        vm.data = error.data || error.data;
      });
    }

  }

})();
