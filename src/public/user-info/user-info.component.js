(function() {
'use strict';

var userInfo = {
  templateUrl: "src/public/user-info/user-info.template.html",
  controller: UserInfoController
};

angular.module("public")
  .component("userinfo", userInfo);

UserInfoController.$inject = ["UserInfoService"]
function UserInfoController(UserInfoService) {
  var $ctrl = this;
  $ctrl.user = UserInfoService.get();

  if ($ctrl.user) {
    var category = $ctrl.user.favoriteItem.short_name.replace(/\d/g, '');
    $ctrl.itemImageSrc = "images/menu/" + category + "/" + category + ".jpg";
  }
  
}

})();