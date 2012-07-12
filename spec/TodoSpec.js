describe("TodoCtrl", function() {
    it("should start with 2 items", function() {
        var scope = {}
        var todoCtrl = new TodoCtrl(scope);
        expect(scope.todos.length).toEqual(2);
    });

    it("should initially have learn angular", function() {
        var scope = {}
        var todoCtrl = new TodoCtrl(scope);
        var learn_angular = scope.todos[0]
        expect(learn_angular).toEqual("learn angular");
    });

    it("should also initially have build angular app", function() {
        var scope = {}
        var todoCtrl = new TodoCtrl(scope);
        var build_angular_app= scope.todos[1]
        expect(build_angular_app).toEqual("build angular app");
    });
});

