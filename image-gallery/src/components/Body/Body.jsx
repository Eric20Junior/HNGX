import React, { useState } from 'react';
import poster from '../../assets/Poster-Image.png';
import image from '../../assets/showtimes.png';
import {
  DndContext,
  useDraggable,
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  useDroppable,
} from '@dnd-kit/core';

export const Body = () => {
  const [images, setImages] = useState([1, 2, 3, 4]);
  const [activeId, setActiveId] = useState(null);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      const oldIndex = images.indexOf(Number(active.id));
      const newIndex = images.indexOf(Number(over.id));
      const newImages = [...images];
      newImages.splice(oldIndex, 1);
      newImages.splice(newIndex, 0, Number(active.id));
      setImages(newImages);
    }
    setActiveId(null);
  };

  return (
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-1 gap-4 mt-16 mx-8 h-auto max-w-full">
      <DndContext onDragEnd={handleDragEnd}>
        {/* Pass activeId to DropTarget */}
        <DropTarget images={images} setActiveId={setActiveId} activeId={activeId} />
      </DndContext>
    </div>
  );
};

const DraggableImage = ({ imageId, activeId, setActiveId }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: (event) => {
        if (event instanceof KeyboardEvent) {
          return { x: 0, y: 0 };
        }
        return event.coordinates;
      },
    })
  );

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: imageId.toString(),
    sensors,
  });

  // Check if transform is defined before accessing its properties
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: activeId === imageId ? 1 : 0,
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => setActiveId(imageId)}
      className={`rounded-lg ${isDragging ? 'dragging' : ''}`}
    >
      <img src={imageId === 4 ? image : poster} alt="" className="rounded-lg max-h-full" />
    </div>
  );
};

const DropTarget = ({ images, setActiveId, activeId }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'drop-target', // Provide a unique ID for the drop target
  });

  const style = {
    border: isOver ? '2px dashed #000' : '2px dashed transparent',
  };

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      style={style}
      ref={setNodeRef}
    >
      {images.map((imageId) => (
        <DraggableImage
          key={imageId}
          imageId={imageId}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
};
