import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export const Droppable = ({ children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable-area',
  });

  const style = {
    border: isOver ? '2px dashed green' : '2px dashed transparent',
    padding: '10px',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
