import React from 'react';
import './Card.css';

const Card = ({ title, children, footer, ...props }) => {
  return (
    <div className="card" {...props}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;