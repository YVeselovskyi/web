import React from 'react';

function MyComponent({ title, description }) {
  return (
    <div className="paid-post">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default MyComponent;
