function TodoCtrl($scope) {
    $scope.todos = [
        { detail: 'learn angular', status: 'done'}, 
        { detail: 'build angular app', status: 'undone'}];

    $scope.addNew = function(new_item) {
        todo = { detail: new_item, status: "undone" }
        $scope.todos.push(todo);
    }

    // UI functions
    $scope.addBtnClicked = function() {
        $scope.addNew($scope.new_todo);
        $scope.new_todo = '';
    }

}
