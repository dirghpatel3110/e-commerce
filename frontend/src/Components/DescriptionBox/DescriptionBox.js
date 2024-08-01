import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviwes (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An e-commerce website is on online platform that facilitates the buying and selling of product or service over 
            the internet. It serves as a virtual marketplace where businesses and individuals can showcase thier products,
            internet with customers,and conduct transactions without the need for a physical presence. E-commerce website 
            have gained immense popularity due to thier convenience,accessibility,and the global reach they offer.
        </p>
        <p>
           E-commerce website typically display products or services along with detailed descriptions,images,prices,and 
           any available variations (e.g. sizes,color).Each product usually has its own dedicated page with relevant
           information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
