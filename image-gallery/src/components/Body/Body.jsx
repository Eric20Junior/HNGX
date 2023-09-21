import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images8.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/images4.jpeg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import image7 from '../../assets/image7.png'; 
import image10 from '../../assets/images10.jpeg'; 
import image11 from '../../assets/images1.jpeg'; 
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


function getTagsForImage(imageId) {
  const imageTags = {
    1: 'dogs, animals',
    2: 'cats, animals',
    3: 'messi',
    4: 'car',
    5: 'cats, animals',
    7: 'cats, animals',
    10: 'ronaldo',
    11: 'dogs, animals',
  };

  // Check if the image ID exists in the imageTags object
  if (imageTags.hasOwnProperty(imageId)) {
    return imageTags[imageId];
  }
  // Return an empty string if the image ID is not found in the mapping
  return '';
}

export const Body = () => {
  const [images, setImages] = useState([1, 2, 3, 4, 5, 7, 10, 11]); // Include new image IDs
  const [activeId, setActiveId] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); 
    }, 6000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-1 gap-4 mt-16 mx-8 h-auto max-w-full ">
      <div>
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search by tags"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='border border-green-700 rounded-lg text-xs h-[30px] w-[300px] text-center '
        />
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <DropTarget images={images} setActiveId={setActiveId} activeId={activeId} searchQuery={searchQuery} />
      </DndContext>
      {isLoading && <LoadingSpinner />} 
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-inner">
        <h1 className='animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24'>Loading....</h1>
      </div>
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

  const imageMapping = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    10: image10,
    11: image11,
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
        className="rounded-lg w-full max-h-[200px] max-w-[300px] md:max-h-[260px] md:max-w-[350px] sm:max-h-[300px] sm:max-w-[400px]"
      />
    </div>
  );
});

const DropTarget = ({ images, setActiveId, activeId, searchQuery }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'drop-target',
  });

  const style = {
    border: isOver ? '2px dashed #000' : '2px dashed transparent',
  };

  // Filter images based on search query or display all images if no search query
  const filteredImages = searchQuery
    ? images.filter((imageId) => {
        const tagsForImage = getTagsForImage(imageId);
        return tagsForImage.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : images;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={style} ref={setNodeRef}>
      {filteredImages.map((imageId) => (
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
