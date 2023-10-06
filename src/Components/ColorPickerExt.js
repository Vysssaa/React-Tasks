import React from 'react';
import ColorPicker from './ColorPicker';

const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33AA', '#33AAFF'];

function CP() {
  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default CP;
