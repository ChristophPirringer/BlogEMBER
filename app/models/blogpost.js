import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    author: DS.attr(),
    title: DS.attr(),
    tag: DS.attr(),
    content: DS.attr(),
    picture: DS.attr()  
});
