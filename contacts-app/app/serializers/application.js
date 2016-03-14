import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'id',
  serializeId: function(id) {
    return id.toString();
  }
});
