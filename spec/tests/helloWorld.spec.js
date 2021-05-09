
describe('HelloWorld', () => {
    "use strict";
    let HelloWorld = require("../../src/HelloWorld");

    it('should exist.', () => {
        // given
        expect(() => {
            var helloWorld = new HelloWorld();
        }).not.toThrow();
    });

    it('should greet() correctly', () => {
        // given
        var helloWorld = new HelloWorld();
        // then
        expect(helloWorld.greet()).toEqual('Hello World');
    });
});