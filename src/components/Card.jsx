import React from 'react';

const Card = ({ shape, color }) => {
  const renderShape = () => {
    switch (shape) {
      case 'circle':
        return <circle cx="50%" cy="50%" r="40%" fill={color} />;
      case 'square':
        return <rect width="80%" height="80%" fill={color} />;
      case 'triangle':
        return (
          <polygon points="50,0 0,100 100,100" fill={color} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <svg width="100" height="100">
        {renderShape()}
      </svg>
    </div>
  );
};

export default Card;
