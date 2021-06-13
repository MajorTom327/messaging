import { Meteor } from 'meteor/meteor';
import React from 'react';
import Button from '../Button';

type Props = {
};

const DiscussionList: React.FC<Props> = ({ }) => {
  const createDiscussion = () => {
    Meteor.call('discussion.create', 'New Discussion');

  }
  return (
    <div className="w-full bg-gray-700 h-screen flex flex-col justify-between">
      <div>Liste des convo</div>
      <Button onClick={createDiscussion}>Creation</Button>
    </div>
  );
}

DiscussionList.defaultProps = {
};

export default DiscussionList;