/**
 * Created by Rajan on 23/11/2015.
 */

JS = JS || {}

JS.PlpM = function() {

    var _products = 'products';

    getProducts = function() {
        alert(_products + 'products alerted');
        console.log('products alerted');
        return _products;
    }

    bindElements = function() {
        var self = this;
        dojo.connect(dojo.byId("plpM"), "click", function(e){
            self.getProducts();
        });
    }

    return {
        getProducts: getProducts,
        bindElements: bindElements
    }

}

// app
JS.PlpM().bindElements();