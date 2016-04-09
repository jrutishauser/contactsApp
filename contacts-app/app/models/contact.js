import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  middle_initial: DS.attr('string'),
  title: DS.attr('string'),
  phone_number: DS.attr('string'),
  email: DS.attr('string'),
  street_address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip_code: DS.attr('string'),
  type: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
