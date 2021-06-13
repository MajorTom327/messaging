import React, { useState } from 'react';
import DiscussionList from './components/DiscussionList';
import MessageList from './components/MessageList';
import * as R from 'ramda'
import SendMessage from './components/SendMessage';

const chatStyle = {
  // background-blend-mode
  backgroundBlendMode: 'normal',
  backgroundImage: `
  radial-gradient(circle, transparent 50%, #000 100%),
  url(/assets/earth.jpg)`
}

export const App = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-9">
      <div className="col-span-2 ">
        <DiscussionList selected={selected} onSelect={setSelected} />
      </div>

      <div style={chatStyle} className="h-full w-full col-span-2 sm:col-span-5 lg:col-span-7 bg-cover bg-opacity-75 p-2">
        {R.isNil(selected) ? (
          <div className="bg-gray-200">Select something bro</div>
        ) : (
          <div className="flex w-full flex-col gap-4">
            <MessageList discussion={selected!} />
            <SendMessage discussion={selected!} />
          </div>
        )}

      </div>

    </div>
  )
};
