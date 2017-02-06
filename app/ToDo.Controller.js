(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['ToDoFactory'];

    /* @ngInject */
    function ToDoController(ToDoFactory) {
        var vm = this;
        vm.title = 'ToDoController';

        activate();

        ////////////////

  //       $scope.todoList = [];
		// $scope.sortType = '';

		// $scope.addTodo = function(index) {
		// 	$scope.todoList.push({todo: $scope.newTodo, class: $scope.priority}); 
		// 	$scope.newTodo = '';
		// };//close addTodo

        function activate() {
        	ToDoFactory.GetToDos().then(
        		function(response){
        			vm.todoList = response.data;
        		})
        }

        vm.NewTodo = function(name, priority) {
        	ToDoFactory.NewTodo(name, priority).then(
        		function(response) {
        			console.log("Add Successful");
        		})
        		.catch(function(error) {
        			console.log("Not Successful");
        		})
        		activate();
        }

        vm.DeleteTodo = function(id) {
        	ToDoFactory.DeleteTodo(id).then(
        		function(response) {
        			console.log('Delete Successful');
        		})
        		.catch(function(response) {
        			console.log('Delete Not Successful');
        		})
        		activate();
        }

    }
})();