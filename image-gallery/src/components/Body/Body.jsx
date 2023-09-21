import React, { useState } from 'react';
import image1 from '../../assets/images8.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/images4.jpeg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import image7 from '../../assets/image7.png'; // New image import
import image10 from '../../assets/images10.jpeg'; // New image import
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
  const [images, setImages] = useState([1, 2, 3, 4, 5, 7, 10]); // Include new image IDs
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
        <DropTarget images={images} setActiveId={setActiveId} activeId={activeId} />
      </DndContext>
    </div>
  );
};

const DraggableImage = React.memo(({ imageId, activeId, setActiveId }) => {
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

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: activeId === imageId ? 1 : 0,
      }
    : {};

  // Add a mapping for the new image IDs (7 and 10)
  const imageMapping = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    10: image10,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => setActiveId(imageId)}
      className={`rounded-lg ${isDragging ? 'dragging' : ''}`}
    >
      <LazyLoadImage
        src={imageMapping[imageId] || ''}
        alt=""
        className="rounded-lg w-full h-auto max-h-[300px] max-w-[300px] md:max-h-[350px] md:max-w-[350px] sm:max-h-[400px] sm:max-w-[400px]"
      />
    </div>
  );
});

const DropTarget = ({ images, setActiveId, activeId }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'drop-target',
  });

  const style = {
    border: isOver ? '2px dashed #000' : '2px dashed transparent',
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={style} ref={setNodeRef}>
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
