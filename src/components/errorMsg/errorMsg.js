import React from 'react';
import './errorMsg.css';
import img from './error.jpg';

const ErrorMsg = () => {
  return (
    <>
      <img src={img} alt="error" />
      <span>Something goes wrong</span>
    </>
  )
}

export default ErrorMsg;