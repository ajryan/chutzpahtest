/// <reference path="Scripts/jasmine.js"/>
/// <reference path="controller.js"/>

describe("new controller", function() {
    it("should set the name property to the constructor parameter value", function() {
        var controller = new ChutzpahTest.MyController("The Name");
        expect(controller.name).toEqual("The Name");
    });
});