import React from 'react';

function MyComponent({ title, description, onClick }) {
  const onClickHandler = () => {
    console.log(window, window.ethereum);
    return onClick && onClick()
  }

  return (
    <div className="paid-post" onClick={onClickHandler}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default MyComponent;
