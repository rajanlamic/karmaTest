/**
 * Created by Rajan on 23/11/2015.
 */
JS = {}

JS.Plp = function() {

    this.getProducts = function() {
        alert('products alerted');
        console.log('products alerted');
        return 'products'
    }

    this.bindElements = function() {
        var self = this;
        dojo.connect(dojo.byId("plp"), "click", function(e){
            self.getProducts();
        });
    }

}

// app
new JS.Plp().bindElements();