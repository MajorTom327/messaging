import { Meteor } from 'meteor/meteor';

import DiscussionsAll from './all';

Meteor.publish('discussions.all', DiscussionsAll);