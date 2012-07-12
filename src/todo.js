function TodoCtrl($scope) {
    $scope.todos = [
        { detail: 'learn angular', status: true}, 
        { detail: 'build angular app', status: false}];

    $scope.addNew = function(new_item) {
        todo = { detail: new_item, status: false }
        $scope.todos.push(todo);
    }

    // UI functions
    $scope.addBtnClicked = function() {
        $scope.addNew($scope.new_todo);
        $scope.new_todo = '';
    }

}
