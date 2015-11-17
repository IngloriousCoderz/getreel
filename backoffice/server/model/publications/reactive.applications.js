ReactiveTable.publish('reactiveApplications', Applications, {}, {
  fields: {
    email: 1,
    createdAt: 1,
    firstname: 1,
    lastname: 1,
    age: 1,
    city: 1,
    province: 1,
    region: 1,
    mobile: 1,
    experienceAsPhotographer: 1,
    experienceAsOther: 1,
    photo: 1,
    'phases.current': 1,
    activities: 1,
    events: 1,
  }
});