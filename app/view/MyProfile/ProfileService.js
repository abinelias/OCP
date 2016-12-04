(function() {
	'use strict';
	angular.module('app').factory('ProfileService', ProfileService)
	ProfileService.$inject = ['$http', '$q'];
	function  ProfileService($http, $q) {
		var ProfileAPI = {};	
		var baseWMUrl = '/main/Admin/UserManagement/UserManagementWM.aspx/';
		

		ProfileAPI.SaveUser = function (profileInfo) {
            alert('entered');
            $http.post('/profil', profileInfo).success(function(data) {                
                toastr.success('Contact added successfully!');
            }).error(function(status) {
                toastr.warning('Wrongly entered. Please check!');
                console.log('Error: ' + status);
            });
		}

		ProfileAPI.GetUserDetails  = function (id) {
			 $http.get('/profil').success(function(data) {
			}).error(function(status) {
				console.log('Error: ' + status);
			});
		}

		ProfileAPI.GetUserDetailsByID = function (id) {
			 return $http.get('/profil/'+ id ).success(function(data) {
			}).error(function(status) {
				console.log('Error: ' + status);
			});			
		}
		ProfileAPI.UpdateUserDetails = function (id, userInfo) {
			return $http.put('/profil/' + id, userInfo).success(function(data) {            
				toastr.success('Contact updated successfully!');
			}).error(function(status) {
				toastr.warning('Wrongly entered. Please check!');
				console.log('Error: ' + status);
			});
		}
		return ProfileAPI;
	}
})();

