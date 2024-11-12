import React, { useState } from 'react';
import '../styles/TrianglePopup.css'; 

const TrianglePopup = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="triangle" onClick={handleTogglePopup}></div>

      {isOpen && (
        <div className="popup">
          <p>{message}</p>
          <button onClick={handleTogglePopup}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default TrianglePopup;
