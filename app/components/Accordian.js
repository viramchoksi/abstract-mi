// src/components/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="my-2">
      <button
        className={`accordion ${isActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        {title}
      </button>
      <div
        className={`panel overflow-hidden transition-max-height duration-300 ${
          isActive ? 'max-h-[100dvh]' : 'max-h-0'
        }`}
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
