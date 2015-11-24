/**
 * Created by Rajan on 19/11/2015.
 */

describe('PLPM', function () {

    var products;
    var mockButton;
    var mockAjaxButton;
    var plp;

    beforeEach(function() {
        plp = JS.PlpM();
        plp.bindElements();
        mockButton = document.createElement('button');
        mockButton.id = "plpM";
        mockButton.value = "PLP";
        mockButton.appendChild(document.createTextNode("Get PLP"));
        document.body.appendChild(mockButton);

        mockAjaxButton = document.createElement('button');
        mockAjaxButton.id = "ajaxPlp";
        mockAjaxButton.value = "AJAX PLP";
        mockAjaxButton.appendChild(document.createTextNode("Get AJAX PLP"));
        document.body.appendChild(mockAjaxButton);
    });

    afterEach(function() {
        products = null;
    });

    it('should get products', function () {
        products = plp.getProducts();
        expect(products).toEqual('products');
    });

    it("should call getProducts upon clicking button id plpM", function () {
        spyOn(plp, 'getProducts');
        document.getElementById("plpM").click();
        expect(plp.getProducts).toHaveBeenCalled();
    });

    it("should call getAjaxProducts upon clicking button id ajaxPlp", function () {
        spyOn(plp, 'getAjaxProducts');
        document.getElementById("ajaxPlp").click();
        expect(plp.getAjaxProducts).toHaveBeenCalled();
    });

    it("should call getSuccessResponse when AJAX successfuly receives response", function() {
        spyOn(dojo, 'xhrGet').and.callFake(function(e) {
            e.load();
        });

        spyOn(plp, 'getSuccessResponse');
        spyOn(plp, 'getErrorReponse');

        plp.getAjaxProducts();
        expect(plp.getSuccessResponse).toHaveBeenCalled();
        expect(plp.getErrorReponse).not.toHaveBeenCalled();
    });

    it("should call getErrorReponse when AJAX not successful and receives error", function() {
        spyOn(dojo, 'xhrGet').and.callFake(function(e) {
            e.error();
        });

        spyOn(plp, 'getSuccessResponse');
        spyOn(plp, 'getErrorReponse');

        plp.getAjaxProducts();
        expect(plp.getSuccessResponse).not.toHaveBeenCalled();
        expect(plp.getErrorReponse).toHaveBeenCalled();
    });

    it("should get success response", function() {
        var mockResponse = [{ mock: 'mockData'}];
       expect(plp.getSuccessResponse(mockResponse)).toEqual(mockResponse + 'R');
    });

    it("should get error response ", function() {
        var mockError= [{ mockE: 'mockDataE'}];
        expect(plp.getErrorReponse(mockError)).toEqual(mockError + 'E');
    });

});