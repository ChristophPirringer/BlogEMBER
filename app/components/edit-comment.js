import Ember from 'ember';

export default Ember.Component.extend({
  editCommentForm: false,
  actions: {
    editCommentForm() {
      this.set('editCommentForm', true);
    },
    editCommentHide() {
      this.set('editCommentForm', false);
    },

    editComment(comment) {
      var params = {
        username: this.get('username'),
        date: this.get('date'),
        content: this.get('content')
      }
      debugger;
      this.set('editCommentForm', false);
      this.sendAction('editComment', comment, params);
    }
  }
});
