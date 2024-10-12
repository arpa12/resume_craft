// src/components/TemplatePreviews.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './TemplatePreview.css'
const templates = [
  { id: 1, image: 'template1.jpg', title: 'Modern Template' },
  { id: 2, image: 'template2.jpg', title: 'Classic Template' },
  { id: 3, image: 'template3.jpg', title: 'Creative Template' },
];

const TemplatePreviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? templates.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === templates.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    
    <div className="template-slider-container">
      <button className="slider-arrow left-arrow" onClick={handlePrev}>
        <FaArrowLeft />
      </button>

      <div className="slider">
        {templates.map((template, index) => (
          <div
            key={template.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && (
              <>
                <img src={template.image} alt={template.title} />
                <p>{template.title}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <button className="slider-arrow right-arrow" onClick={handleNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default TemplatePreviews;
