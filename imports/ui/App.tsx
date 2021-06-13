import React from 'react';
import DiscussionList from './components/DiscussionList';

export const App = () => (
  <div className="grid grid-cols-7">
    <div className="col-span-2">
      <DiscussionList />
    </div>

  </div>
);
