import React from 'react';
import "./card-style.css";
import img1 from "./assets/images(2).jpeg";
const Card = props =>{
  return(
    <div className='card text-center shadow'>
    <div className="overflow">
    <img src={img1} alt='Image1' className="card-img-top" />
    </div>
    <div className="card-body text-dark">
     <h4 className="card-title">Card Title</h4>
     <p className="card-text text-secondary">
     hello there lets start writing and creating something. your nothing today Android And I'm not sure what If you have been able today And I'm. 
     </p>
     <a href="#" className="btn btn-outline-success">Click to Apply </a>
     </div>
    </div>
  );
};
export default Card ;