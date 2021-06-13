import classNames from 'classnames';
import React from 'react';
import { Discussion } from '/imports/api/type';

type Props = {
  discussion: Discussion,
  selected: boolean,
  onSelect: (conversation: string) => void
};

const Discussion: React.FC<Props> = ({ discussion, selected, onSelect }) => {

  const classes = classNames("p-2 hover:bg-gray-600 text-white select-none", {
    "font-semibold bg-gray-800 bg-opacity-50": selected
  })


  return (<div className={classes} onClick={() => onSelect(discussion._id!)}>
    {discussion.title}
  </div>);
}

Discussion.defaultProps = {
  selected: false
};

export default Discussion;