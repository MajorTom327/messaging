import React from 'react';

type Props = {
  discussion: string
};

const MessageList: React.FC<Props> = ({ discussion }) => {
  return (<>It's britney bitch !</>);
}

MessageList.defaultProps = {
};

export default MessageList;