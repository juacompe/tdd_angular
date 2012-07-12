function TodoCtrl($scope) {
    $scope.todos = ['learn angular', 'build angular app'];

    $scope.addNew = function(new_item) {
        $scope.todos.push(new_item);
    }

    // UI functions
    $scope.addBtnClicked = function() {
        $scope.addNew($scope.new_todo);
        $scope.new_todo = '';
    }

}
