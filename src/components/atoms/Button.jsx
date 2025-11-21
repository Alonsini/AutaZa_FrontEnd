import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Button({ children, back, ...props }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (back) {
      e.preventDefault();
      navigate(-1);
    } else if (props.onClick) {
      props.onClick(e);
    }
  };
  return <BootstrapButton {...props} onClick={handleClick} className={`elegant-btn ${props.className || ''}`}>{children}</BootstrapButton>;
}

export default Button;
