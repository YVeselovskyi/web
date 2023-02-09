import React from 'react';

function MyComponent({ title, description, onClick }) {
  return (
    <div className="paid-post" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default MyComponent;
