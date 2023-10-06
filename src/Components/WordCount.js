import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
     <center>   
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Enter your text here"
        value={text}
        onChange={handleTextChange}
        style={{border:"black",width:"35%"}}
      />
      <p>Word Count: {wordCount}</p>
      </center>
    </div>
  );
}

export default WordCounter;