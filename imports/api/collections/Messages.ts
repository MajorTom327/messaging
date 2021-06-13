import { Mongo } from 'meteor/mongo';
import { Message } from '../type';


export const Messages = new Mongo.Collection<Message>("messages");

export default Messages;