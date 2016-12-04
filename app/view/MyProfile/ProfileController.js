(function () {
	'use strict';

	angular.module('app').controller('ProfileController', ProfileController);
	ProfileController.$inject = ['$scope' , '$http', '$location', 'ProfileService'];
	function ProfileController($scope, $http, $location, ProfileService) {
		var vm = this;
		vm.title = 'I feel great';
		vm.isEdit = false;
		vm.id = '58426f5312a7140b84f25036';
		vm.userInfo = {};
		vm.userInfo.FirstName = "Silpa";
		vm.userInfo.LastName = "Abraham";
		vm.userInfo.Age = 26;
		vm.userInfo.AddressLine1 = "Cheriyathuruthiyil House";
		vm.userInfo.AddressLine2 = "Vallamkulam East p.o.";
		vm.userInfo.UserName = "silpa007";
		vm.userInfo.Password = "asdf";
		vm.images = [
		"http://vasyabigi.github.io/angular-slick/images/lazyfonz1.png",
		"http://vasyabigi.github.io/angular-slick/images/lazyfonz2.png",
		"http://vasyabigi.github.io/angular-slick/images/lazyfonz3.png",
		];

		vm.EditClick = function() {
			vm.isEdit = true;
		}

		vm.update = function() {
			vm.isEdit = false;
			ProfileService.UpdateUserDetails(vm.id, vm.userInfo).then(function (result) {
			vm.userInfo = result.data;
		  })
		}

		//ProfileService.SaveUser(vm.userInfo);


		//ProfileService.GetUserDetails(vm.id)

		ProfileService.GetUserDetailsByID(vm.id).then(function (result) {
			vm.userInfo = result.data;
		})
	}
})();