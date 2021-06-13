import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';
import * as R from 'ramda';

type Props = {
  discussion: string
};

const style: React.CSSProperties = {
  backgroundColor: "rgba(64, 64, 64, .25)"
}

const SendMessage: React.FC<Props> = ({ discussion }) => {
  const [message, setMessage] = useState<string>("");

  const onClickHandler = () => {
    if (R.isEmpty(message)) return;

    const value = message;
    setMessage("");

    Meteor.call("message.send", discussion, value);
  }

  return (<div style={style} className="flex backdrop-filter backdrop-blur-lg bg-gray-500 gap-4 w-full p-2 rounded-lg text-white">
    <InputText value={message} onChange={setMessage} placeholder="Votre message..." />
    <Button rise circle className="w-12 h-12" onClick={onClickHandler}>
      <FontAwesomeIcon icon={faPaperPlane} />
    </Button>
  </div >);
}

SendMessage.defaultProps = {
};

export default SendMessage;