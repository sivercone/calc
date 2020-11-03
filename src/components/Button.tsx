import React from 'react';

interface Props {
   content: string;
   buttonClick: (content: string) => void;
}

export const Button: React.FC<Props> = React.memo(function Button({ content, buttonClick }): React.ReactElement {
   return (
      <button onClick={() => buttonClick(content)} className="circle">
         {content}
      </button>
   );
});
