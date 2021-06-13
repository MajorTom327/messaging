import React from 'react';
import { Message as MessageType } from '/imports/api/type';

type Props = {
  message: MessageType
};

const Message: React.FC<Props> = ({ message }) => {

  return (<div className="text-white">
    {message.message}
  </div>);
}

Message.defaultProps = {
};

export default Message;