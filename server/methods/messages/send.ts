import { Messages } from '/imports/api/collections';
import { Message } from '/imports/api/type';

export function sendMessage(discussion: string, content: string) {

  const message: Message = {
    discussion,
    message: content,
    createdAt: new Date()
  }

  return Messages.insert(message);
}

export default sendMessage;