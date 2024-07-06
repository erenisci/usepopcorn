import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* 
// import StarRating from './components/StarRating';
import { useState } from 'react';
const Test = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <StarRating
        color='blue'
        onSetRating={setRating}
      />
      {rating ? <p>This Movie was rated {rating} stars</p> : ''}
    </>
  );
}; 
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
