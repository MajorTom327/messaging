import { Discussions } from '/imports/api/collections';
import { Discussion } from '/imports/api/type';

export function createDiscussion(title: string): string {

  const discussion: Discussion = {
    title
  };

  return Discussions.insert(discussion);

}

export default createDiscussion;