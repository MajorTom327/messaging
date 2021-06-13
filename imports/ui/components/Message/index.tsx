import React from 'react';
import { Message as MessageType } from '/imports/api/type';
import { DateTime } from 'luxon'

type Props = {
  message: MessageType
};

const Message: React.FC<Props> = ({ message }) => {

  return (<div className="text-white col-span-8 rounded-lg p-2 shadow bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg overflow-hidden">
    {message.message}
    <div className="text-right text-sm text-gray-400 hover:text-gray-200 cursor-default">
      {
        DateTime
          .fromJSDate(message.createdAt)
          .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
      }
    </div>
  </div>);
}

Message.defaultProps = {
};

export default Message;