exports.seed = function (knex) {
  return knex('potlucks').insert([
    {
      organizer_id: 1,
      date: "2021-07-27",
      time: '15:30:00',
      street_number: 555,
      street_name: 'This is a street',
      state: 'TX',
      zip_code: 99999,
    },
    {
      organizer_id: 2,
      date: '2021-07-28',
      time: '17:30:00',
      street_number: 777,
      street_name: 'DifferentStreet',
      state: 'CA',
      zip_code: 99999,
    },
  ])
}