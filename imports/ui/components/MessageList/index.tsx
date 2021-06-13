import React from 'react';
import Message from '../Message';
import { useMessages } from '/imports/hooks/messages';

type Props = {
  discussion: string
};

const MessageList: React.FC<Props> = ({ discussion }) => {
  const { ready, messages } = useMessages(discussion);

  if (!ready) return (<div className="flex justify-center text-white font-semibold">Chargement...</div>);

  return (
    <div className="flex-grow text-white">
      {messages.map((message) => <Message key={message._id} message={message} />)}
    </div>
  );
}

MessageList.defaultProps = {
};

export default MessageList;