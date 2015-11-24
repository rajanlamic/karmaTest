/**
 * Created by Rajan on 23/11/2015.
 */

//JS = JS || {};
JS = {};

JS.PlpM = function() {

    var _products = 'products';

    getProducts = function() {
        alert(_products + 'products alerted');
        console.log('products alerted');
        return _products;
    }

    getSuccessResponse = function(response) {
        console.log('response', response);
        alert('success' + JSON.stringify(response));
        return response + 'R';
    }

    getErrorReponse = function(err) {
        console.log('err', err);
        alert('error' + JSON.stringify(err));
        return err + 'E';
    }

    getAjaxProducts = function() {
        var self = this;
        dojo.xhrGet({
            url: 'server.json',
            handleAs:"json",
            load: function(response) {
                self.getSuccessResponse(response);
            },
            error: function(err) {
                self.getErrorReponse(err);
            }
        });
    }

    bindElements = function() {
        var self = this;
        dojo.connect(dojo.byId("plpM"), "click", function(e){
            self.getProducts();
        });

        dojo.connect(dojo.byId("ajaxPlp"), "click", function(e){
            self.getAjaxProducts();
        });
    }

    return {
        getProducts: getProducts,
        bindElements: bindElements,

        getAjaxProducts: getAjaxProducts,
        getSuccessResponse: getSuccessResponse,
        getErrorReponse: getErrorReponse
    }

}

// app
JS.PlpM().bindElements();