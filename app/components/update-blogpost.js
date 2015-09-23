import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogpostForm: false,
  actions: {
    updateBlogpostForm() {
      this.set('updateBlogpostForm', true);
    },
    updateBlogpostHide() {
      this.set('updateBlogpostForm', false);
    },

    update(blogpost) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        tag: this.get('tag'),
        content: this.get('content'),
        picture: this.get('picture')
      }
      this.set('updateBlogpostForm', false);
      this.sendAction('update', blogpost, params);
    }
  }
});
