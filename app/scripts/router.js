var MainRouter = Backbone.Router.extend({
  routes: {
    "items" : "showItems",
    "items/:keyword" : "showItems"
  },
 
  initialize: function(){
    this.items = new ItemsCollection;
    this.items.on('add', function(item){
      new ItemView({model: item})
    })
  },
 
  showItems: function(keyword){
    if (keyword) {
      this.items.url = "https://api.gilt.com/v1/sales/upcoming.json?keywords="+ keyword +"&includes=Images&api_key=24531d757413e8ccfd99762705d68ebf&callback=?"
    }
    this.items.fetch();
  }
});


