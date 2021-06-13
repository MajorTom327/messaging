import { Meteor } from 'meteor/meteor';
import React from 'react';
import Button from '../Button';
import Discussion from '../Discussion';
import { useDiscussions } from '/imports/hooks';

type Props = {
  selected: string | null
  onSelect: (conversation: string) => void
};

const DiscussionList: React.FC<Props> = ({ selected, onSelect }) => {
  const createDiscussion = () => {
    Meteor.call('discussion.create', 'New Discussion');
  }

  const { ready, discussions } = useDiscussions();

  // backdrop-filter backdrop-blur-lg

  if (!ready) return (<>Chargement...</>);
  return (
    <div className="w-full bg-gray-700 bg-opacity-50 h-screen flex flex-col justify-between backdrop-filter backdrop-blur-lg">
      <div>
        {discussions.map((discussion) => <Discussion onSelect={onSelect} selected={discussion._id === selected} key={discussion._id} discussion={discussion} />)}
      </div>
      <Button onClick={createDiscussion}>Creation</Button>
    </div>
  );
}

DiscussionList.defaultProps = {
};

export default DiscussionList;