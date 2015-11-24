/**
 * Created by Rajan on 23/11/2015.
 */

//JS = JS || {};
JS = {};

JS.PlpM = function() {

    var _products = 'products';

    var _getProducts = function() {
        alert(_products + 'products alerted');
        console.log('products alerted');
        return _products;
    }

    var _getSuccessResponse = function(response) {
        console.log('response', response);
        alert('success' + JSON.stringify(response));
        return response + 'R';
    }

    var _getErrorReponse = function(err) {
        console.log('err', err);
        alert('error' + JSON.stringify(err));
        return err + 'E';
    }

    var _getAjaxProducts = function() {
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

    var _bindElements = function() {
        var self = this;
        dojo.connect(dojo.byId("plpM"), "click", function(e){
            self.getProducts();
        });

        dojo.connect(dojo.byId("ajaxPlp"), "click", function(e){
            self.getAjaxProducts();
        });
    }

    return {
        getProducts: _getProducts,
        bindElements: _bindElements,

        getAjaxProducts: _getAjaxProducts,
        getSuccessResponse: _getSuccessResponse,
        getErrorReponse: _getErrorReponse
    }

}

// app
JS.PlpM().bindElements();