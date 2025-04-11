const Character = require('./character.js');


describe('Character- testing attacks', () => { 

let targeter;
let target;

beforeEach(() => {
    targeter = new Character("Zaid", "a good guy", "i hate stuff");
    target = new Character("Sonic", "A blue hedgehog with super speed.", "Hello, Zaid! Welcome to the JavaScript world! I hate teamers");


}
); 
test('when i attack a character, it should reduce the target character\'s health by 10', () => {

    targeter.attacks(target);
    expect(target.getHealth()).toBe(90); 

});

test('the programm should not crash when a target is undefined', () => {

expect(() => targeter.attacks()).not.toThrow(); 


});




});