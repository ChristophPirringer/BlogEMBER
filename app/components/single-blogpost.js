import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },
    deleteComment(comment){
      this.sendAction('deleteComment', comment);
    },
    editComment(comment, params) {
      this.sendAction('editComment', comment, params);
    },
    upvoteBlogpost(blogpost) {
      this.sendAction('upvoteBlogpost', blogpost);
    },
    downvoteBlogpost(blogpost) {
      this.sendAction('downvoteBlogpost', blogpost);
    }
  }
});
