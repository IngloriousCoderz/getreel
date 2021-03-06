Regions = new Mongo.Collection('regions');
Jobs = new Mongo.Collection('jobs');
Recruitments = new Mongo.Collection('recruitments');
Stages = new Mongo.Collection('stages');
// http://stackoverflow.com/questions/9868323/is-there-a-convention-to-name-collection-in-mongodb
ActivityOutcomes = new Mongo.Collection('activity.outcomes');
OutcomeReasons = new Mongo.Collection('outcome.reasons');
// OutcomeReasons1 = new Mongo.Collection('outcome.reasons1');
// OutcomeReasons2 = new Mongo.Collection('outcome.reasons2');
// OutcomeReasons3 = new Mongo.Collection('outcome.reasons3');
Locations = new Mongo.Collection('locations');
ApplicationRoles = new Mongo.Collection('application.roles');
Companies = new Mongo.Collection('companies');
Selectors = new Mongo.Collection('selectors');
Seasons = new Mongo.Collection('seasons');
Referrers = new Mongo.Collection('referrers');
DocumentTypes = new Mongo.Collection('document.types');
ContactTypes = new Mongo.Collection('contact.types');
RoleEvaluations = new Mongo.Collection('role.evaluations');
Parameters = new Mongo.Collection('parameters');
SentEmails = new Mongo.Collection('sent.emails');
OpticalArchive = new Mongo.Collection('optical.archive');
CareerSteps = new Mongo.Collection('career.steps');
Countries = new Mongo.Collection('countries');
Activities = new Mongo.Collection('activities');
Events = new Mongo.Collection('events');
/*
var profilePicStore = new FS.Store.GridFS('profilePics');
var createThumb = function(fileObj, readStream, writeStream) {
  gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
};
var profileThumbStore = new FS.Store.GridFS('profileThumbs', {
  transformWrite: createThumb
});
var resumeStore = new FS.Store.GridFS('resumes');
var showreelStore = new FS.Store.GridFS('showreels');

ProfilePics = new FS.Collection('profilePics', {
  stores: [
    profilePicStore,
    //profileThumbStore
  ],
  filter: {
    maxSize: 1048576,
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png']
    },
    onInvalid: function(message) {
      if (Meteor.isClient) {
        alert(message);
      } else {
        console.log(message);
      }
    }
  }
});
Resumes = new FS.Collection('resumes', {stores: [resumeStore]});
Showreels = new FS.Collection('showreels', {stores: [showreelStore]});
*/
