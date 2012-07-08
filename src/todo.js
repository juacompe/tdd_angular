function TodoCtrl($scope) {
    $scope.todos = [
        { name: 'learn angular', done: true }, 
        { name: 'build angular app', done: false }];

    $scope.addNew = function(todoName) {
        var todo = { name: todoName, done: false }; 
        $scope.todos.push(todo);
    }

    // UI functions
    $scope.addBtnClicked = function() {
        $scope.addNew($scope.new_todo);
        $scope.new_todo = '';
    }
}
