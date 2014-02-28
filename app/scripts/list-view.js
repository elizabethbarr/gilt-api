var Item = Backbone.Model.extend({});

var ItemsCollection = Backbone.Collection.extend({
  model: Item,
  url: "https://api.gilt.com/v1/sales/active.json?apikey=24531d757413e8ccfd99762705d68ebf&includes=Images&callback=?"
  
 
  parse: function(response) {
    return response.results;
  }
})