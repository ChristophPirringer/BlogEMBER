import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        username: this.get('username'),
        date: this.get('date'),
        content: this.get('content'),
        blogpost: this.get('blogpost')
      };
      // debugger;
      this.sendAction('saveComment', params);
    }
  }
});
