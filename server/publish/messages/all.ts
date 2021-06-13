import { Messages } from '/imports/api/collections';

export function MessagesAll(discussion: string) {
  return Messages.find({ discussion });
}

export default MessagesAll;