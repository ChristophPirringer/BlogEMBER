import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('blogpost', params.blogpost_id)
  },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.blogpost.save();
      this.transitionTo('blogpost', params.blogpost);
    },
    deleteComment(comment) {
      comment.destroyRecord();
      this.transitionTo('blogpost');
    },
    editComment(comment, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('blogpost');
    },
  }
});
