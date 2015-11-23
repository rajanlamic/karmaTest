/**
 * Created by Rajan on 19/11/2015.
 */

describe('PLPM', function () {

    var products;
    var mockButton;
    var plp;

    beforeEach(function() {
        plp = JS.PlpM();
        plp.bindElements();
        mockButton = document.createElement('button');
        mockButton.id = "plpM";
        mockButton.value = "PLP";
        mockButton.appendChild(document.createTextNode("Get PLP"));

        document.body.appendChild(mockButton);
    });

    afterEach(function() {
        products = null;
    });

    it('M should get products', function () {
        products = plp.getProducts();
        expect(products).toEqual('products');
    });

    it("M should call getProducts while clicking button id plpM", function () {
        spyOn(plp, 'getProducts');
        document.getElementById("plpM").click();
        expect(plp.getProducts).toHaveBeenCalled();
    });

});