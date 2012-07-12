describe("TodoCtrl", function() {
    var scope;
    var todoCtrl;

    beforeEach(function() {
        scope = {}
        todoCtrl = new TodoCtrl(scope);
    });

    it("should start with 2 items", function() {
        expect(scope.todos.length).toEqual(2);
    });

    it("should initially have learn angular", function() {
        var learn_angular = scope.todos[0];
        expect(learn_angular.detail).toEqual("learn angular");
        expect(learn_angular.status).toEqual("done");
    });

    it("should also initially have build angular app", function() {
        var build_angular_app= scope.todos[1];
        expect(build_angular_app.detail).toEqual("build angular app");
        expect(build_angular_app.status).toEqual("undone");
    });

    it("can add new item", function() {
        new_item = "practice TDD";
        scope.addNew(new_item);
        expect(scope.todos.length).toEqual(3);
        var practice_tdd = scope.todos[2];
        expect(practice_tdd.detail).toEqual(new_item);
        expect(practice_tdd.status).toEqual("undone");
    });
});

