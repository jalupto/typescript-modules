function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works
addNumbers(1, 2);
//2 - Errors
// addNumbers(1,2,3);
// addNumbers(1,2,3,'Foo');
function fullName(firstName, lastName) {
    return firstName + lastName;
}
fullName('Barry', 'Allen');
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, 'This is optional');
//# sourceMappingURL=02-functions.js.map