import React, { useState } from 'react';
import DiscussionList from './components/DiscussionList';

export const App = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-9">
      <div className="col-span-2 ">
        <DiscussionList selected={selected} onSelect={setSelected} />
      </div>

      <div>

      </div>

    </div>
  )
};
