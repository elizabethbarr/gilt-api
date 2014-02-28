var ItemView = Backbone.View.extend({
  initialize: function(){
    $('.jumbotron').append(this.el);
    this.render()
  },
  render: function(){
    this.$el.html(this.model.get('title') + '<img class="col-md-3 col-xs-12" src="'+ this.model.attributes.Images[0].url_fullxfull +'">')
  }
})