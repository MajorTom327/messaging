import { Discussion } from '/imports/api/type';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Discussions } from '/imports/api/collections';

type useDiscussionsRet = {
  ready: boolean,
  discussions: Discussion[]
}


export function useDiscussions(): useDiscussionsRet {
  return useTracker(() => {
    const ready: boolean = Meteor.subscribe('discussions.all').ready();

    const discussions = Discussions.find().fetch();

    return {
      ready,
      discussions
    }
  })

}

export default useDiscussions;