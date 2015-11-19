/**
 * Created by Rajan on 19/11/2015.
 */
describe('greeter', function () {

    it('should say Hello to the World', function () {
        expect(greet('World')).toEqual('Hello, World!');
    });
});