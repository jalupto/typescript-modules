var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log('Hello', this.firstName);
    };
    return Person;
}());
var kenn = new Person();
kenn.firstName = 'Kenn';
kenn.sayHello();
//# sourceMappingURL=03-classes.js.map