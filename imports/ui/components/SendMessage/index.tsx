import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';

type Props = {
};

const SendMessage: React.FC<Props> = ({ }) => {
  const [message, setMessage] = useState<string>("");
  return (<div className="flex gap-4 w-full p-2 border rounded-lg">
    <InputText value={message} onChange={setMessage} placeholder="Votre message..." />
    <Button rise circle className="w-12 h-12">
      <FontAwesomeIcon icon={faPaperPlane} />
    </Button>
  </div >);
}

SendMessage.defaultProps = {
};

export default SendMessage;