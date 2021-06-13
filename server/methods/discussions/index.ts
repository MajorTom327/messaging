import { Meteor } from 'meteor/meteor';
import createDiscussion from './create';


Meteor.methods({
  'discussion.create': createDiscussion
})