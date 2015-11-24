/**
 * Created by Rajan on 19/11/2015.
 */
//describe('PLP', function () {
//
//    var products;
//    var mockButton;
//    var plp;
//
//    beforeEach(function() {
//        plp = new JS.Plp();
//        plp.bindElements();
//        mockButton = document.createElement('button');
//        mockButton.id = "plp";
//        mockButton.value = "PLP";
//        mockButton.appendChild(document.createTextNode("Get PLP"));
//
//        document.body.appendChild(mockButton);
//    });
//
//    afterEach(function() {
//        products = null;
//    });
//
//    it('should get products', function () {
//        products = plp.getProducts();
//        expect(products).toEqual('products');
//    });
//
//    it("should call getProducts while clicking button id plp", function () {
//        spyOn(plp, 'getProducts');
//        document.getElementById("plp").click();
//        expect(plp.getProducts).toHaveBeenCalled();
//    });
//
//});