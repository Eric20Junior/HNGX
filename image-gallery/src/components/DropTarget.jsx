import React from 'react';
import { useDroppable } from '@dnd-kit/core'; // Use useDroppable instead of useDropzone

export const DropTarget = ({ onDrop }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'drop-target',
    onDrop: (event) => {
      // Pass the dropped item (image) to the onDrop callback
      onDrop(event.active);
    },
  });

  const style = {
    border: isOver ? '2px dashed green' : '2px dashed transparent',
    padding: '10px',
  };

  return (
    <div ref={setNodeRef} style={style}>
      Drop Here
    </div>
  );
};
