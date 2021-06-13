import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/collections';
import { Message } from '/imports/api/type';

type useMessagesRet = {
  ready: boolean,
  messages: Message[]
}

export const useMessages = (discussion: string): useMessagesRet => {
  return useTracker(() => {
    const ready: boolean = Meteor.subscribe("messages.all", discussion).ready();

    const messages = Messages.find().fetch()
    return {
      ready,
      messages
    }
  })
}

export default useMessages;