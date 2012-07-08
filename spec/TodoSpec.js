describe("TodoCtrl", function() {
    it("should start with 2 todos", function() {
        var scope = {};
        var todoCtrl = new TodoCtrl(scope);
        expect(scope.todos.length).toEqual(2);
    });

    it("initially has done learn angular", function() {
        var scope = {};
        var todoCtrl = new TodoCtrl(scope);
        var learnAngular = scope.todos[0];
        expect(learnAngular.name).toEqual("learn angular");
        expect(learnAngular.done).toEqual(true);
    });

    it("initially has undone build angular app", function() {
        var scope = {};
        var todoCtrl = new TodoCtrl(scope);
        var buildAngularApp = scope.todos[1];
        expect(buildAngularApp.name).toEqual("build angular app");
        expect(buildAngularApp.done).toEqual(false);
    });

    it("can add new todo with addNew", function() {
        var scope = {};
        var todoCtrl = new TodoCtrl(scope);

        scope.addNew('new item');

        expect(scope.todos.length).toEqual(3);
        var newItem = scope.todos[2];
        expect(newItem.name).toEqual("new item");
        expect(newItem.done).toEqual(false);

    });
});

