(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('ToDoFactory', ToDoFactory);

    ToDoFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function ToDoFactory($http, $q) {
        var service = {
            GetToDos: GetToDos,
            NewToDo: NewToDo,
            DeleteToDo: DeleteToDo,
            UpdateToDo: UpdateToDo
        };
        return service;

        ////////////////

        function GetToDos() {
        	var defer = $q.defer();

        	$http({
        		method: 'GET',
        		url: 'http://localhost:49873/api/ToDoEntries'
        	}).then(function(response){
        		defer.resolve(response);
        	})

        	return defer.promise; 
        }

        function NewToDo(name, priority) {

        	return $http({
        		method: 'POST',
        		url: 'http://localhost:49873/api/ToDoEntries',
        		data: {
        			'toDo': name,
        			'Priority': priority
        		}
        	}).then(function(response){
        		console.log('Success!');
        	},
 			function(error) {
 				console.log('error!');
 			});
        }

        function DeleteToDo(id) {

        	return $http({
        		method: 'DELETE',
        		url: 'https://localhost:/api/ToDoEntries/' + id
        	})
        }

        function UpdateToDo(id, todo) {
            return $http.put('http://localhost:/api/ToDoEntries/'+id, todo);
        }
    }
})();