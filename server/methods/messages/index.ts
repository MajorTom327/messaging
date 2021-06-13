import { Meteor } from 'meteor/meteor';
import sendMessage from './send';

Meteor.methods({
  'message.send': sendMessage;
})