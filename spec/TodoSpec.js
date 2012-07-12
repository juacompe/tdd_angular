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
        expect(learn_angular).toEqual("learn angular");
    });

    it("should also initially have build angular app", function() {
        var build_angular_app= scope.todos[1];
        expect(build_angular_app).toEqual("build angular app");
    });

    it("can add new item", function() {
        new_item = "practice TDD";
        scope.addNew(new_item);
        expect(scope.todos.length).toEqual(3);
        var practice_tdd = scope.todos[2];
        expect(practice_tdd).toEqual(new_item);
    });
});

