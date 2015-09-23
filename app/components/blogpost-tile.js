import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blogpost) {
      if(confirm('Are you sure you want to delete this piece of art?')){
        this.sendAction('destroyBlogpost', blogpost);
      }
    },

    update(blogpost, params) {
      this.sendAction('update', blogpost, params);
    }
  }
});
