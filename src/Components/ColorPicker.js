import React, { useState } from 'react';

function ColorPicker({ colors }) {  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a color</button>
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>You picked: {selectedColor}</p>}
    </div>
  );
}

export default ColorPicker;
