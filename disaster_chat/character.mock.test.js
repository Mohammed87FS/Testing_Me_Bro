const Character = require('./character.js');

describe('Character- mocking attacks', () => { 

let Zaid;

beforeEach(() => {
    Zaid = new Character("Zaid", "A good guy", "I hate stuff");
  });

test('when i call for help the defend function should be called (mock)', () => {

const mockHelper = {
    defend: jest.fn()
};

Zaid.callForHelp(mockHelper);
expect(mockHelper.defend).toHaveBeenCalled();


});

} );