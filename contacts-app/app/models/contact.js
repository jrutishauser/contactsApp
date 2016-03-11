import DS from 'ember-data';

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  middleInitial: attr('string'),
  title: attr('string'),
  phoneNumber: attr('string'),
  email: attr('string'),
  streetAddress: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zipCode: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date')  
});
