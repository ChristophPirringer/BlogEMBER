import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlogpost: false,
  actions: {
    blogpostFormShow() {
      this.set('addNewBlogpost', true);
    },
    blogpostFormHide() {
      this.set('addNewBlogpost', false);
    },

    save() {
      var params ={
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        tag: this.get('tag'),
        content: this.get('content'),
        picture: this.get('picture')
      };
      this.set('addNewBlogpost', false),
      this.sendAction('save', params);
    }
  }
});
