(function() {
'use strict';

angular.module('public')
  .service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;

  var user = undefined;

  service.save = save;
  service.get = get;

  function save(newUser) {
    user = newUser;
  }

  function get() { 
    return user;
  }
}

})();