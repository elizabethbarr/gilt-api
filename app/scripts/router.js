var MainRouter = Backbone.Router.extend({
  routes: {
    "shops" : "showShops",
    "shops/:keyword" : "showShops"
  },
 
  initialize: function(){
    this.items = new ItemsCollection;
    this.items.on('add', function(item){
      new ItemView({model: item})
    })
  },
 
  showShops: function(keyword){
    if (keyword) {
      this.items.url = "https://api.gilt.com/v1/sales/upcoming.json?keywords="+ keyword +"&includes=Images&api_key=24531d757413e8ccfd99762705d68ebf&callback=?"
    }
    this.items.fetch();
  }
});


