import { Messages } from '/imports/api/collections';

export function MessagesAll(discussion: string) {
  console.log("Banana split")
  return Messages.find({ discussion });
}

export default MessagesAll;