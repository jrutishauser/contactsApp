import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleInitial: DS.attr('string'),
  title: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  email: DS.attr('string'),
  streetAddress: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipCode: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')  
});
