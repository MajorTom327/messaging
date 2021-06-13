import { Meteor } from 'meteor/meteor';

import MessageAll from './all';

Meteor.publish("messages.all", MessageAll);