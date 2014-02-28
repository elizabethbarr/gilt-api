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
      this.items.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"
    }
    this.items.fetch();
  }
});