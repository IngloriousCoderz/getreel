Jobs = new Mongo.Collection('jobs'); //both on client and server
Applications = new Mongo.Collection('applications');

// added repoz channel

Meteor.startup(function() {
  // console.log('Jobs.remove({})');
  // Jobs.remove({});
  if (Jobs.find({}).count() == 0) {
    console.log('job count == ', Jobs.find({}).count(), 'inserting jobs');
    Jobs.insert({_id: '0', title: 'Select a job position...'});
    Jobs.insert({_id: '1', title: 'Haiti Village Photographer'});
    Jobs.insert({_id: '2', title: 'Rapallo On The Beach'});
  } else {
    console.log('server/getreel.js:', 'job count > 0 (', Jobs.find({}).count(), '): no insert needed');
  }
});

Meteor.methods({
  apply: function(args) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    console.log(args);

    Applications.insert({
      createdAt: new Date(),
      applicant: Meteor.userId(),
      firstname: args.firstname,
      lastname: args.lastname,
      job: args.job,
      resume: args.resume,
      videofile: args.videofile,
      videolink: args.videolink
    });
  }
});
