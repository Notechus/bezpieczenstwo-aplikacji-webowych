import React from 'react';
import loading from '../assets/loading.svg';

export const Loading: React.FC<{}> = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);
