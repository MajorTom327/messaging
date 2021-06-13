import { Mongo } from 'meteor/mongo';
import { Discussion } from '../type';

export const Discussions = new Mongo.Collection<Discussion>('discussions');

export default Discussions;