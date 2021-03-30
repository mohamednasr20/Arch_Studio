import React from 'react';
import '../styles/CurrentPage.css';

const CurrentPage = ({ pageName }) => {
  return (
    <div className="CurrentPage">
      <div className="CurrentPage-line"></div>
      <div className="ml-4">{pageName}</div>
    </div>
  );
};

export default CurrentPage;
