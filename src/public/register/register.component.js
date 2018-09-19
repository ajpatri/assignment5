(function() {
'use strict';

var registerComponent = {
  templateUrl: "src/public/register/register.template.html",
  controller: RegisterController,
}

angular.module('public')
  .component('myregister', registerComponent);


RegisterController.$inject = ["MenuService", "UserInfoService"];
function RegisterController(MenuService, UserInfoService) {
  var $ctrl = this;

  $ctrl.user = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    favoriteDish: "",
  };
  $ctrl.saved = false;
  $ctrl.finalValidation = finalValidation;

  var menuItem = undefined;

  function finalValidation() {
    if ($ctrl.signUpForm.$invalid) {
      return;
    }

    if ($ctrl.user.favoriteDish) {
      MenuService.findFavorite($ctrl.user.favoriteDish)
        .then(function(found) {
          if (found === undefined) {
            invalidateFavoriteDish()
          } else {
            menuItem = found;
            saveForm();
          }
        })
        .catch(function(error) {
          console.log("There was an error validating the user's favorite dish");
        })
    } else {
      saveForm();
    }
  }
  
  function invalidateFavoriteDish() {
    $ctrl.signUpForm.favoriteDish.$setValidity("notFound", false)

    // Set it back to valid so that user and re-enter another one
    setTimeout(function() {
        $ctrl.signUpForm.favoriteDish.$setValidity("notFound", true)
    }, 0);
  }

  function saveForm() {
    console.log("Form saved");
    var newUser = {
      firstName: $ctrl.user.firstName,
      lastName: $ctrl.user.lastName,
      email: $ctrl.user.email,
      phoneNumber: $ctrl.user.phoneNumber,
      favoriteItem: menuItem
    };

    UserInfoService.save(newUser);
    $ctrl.saved = true;
  }

}

})();