import { Discussions } from '/imports/api/collections';

export function DiscussionsAll() {
  return Discussions.find();
}

export default DiscussionsAll;