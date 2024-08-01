import React from 'react';
import './Breadcreums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = ({product}) => {
  return (
    <div className='Breadcrums'>
      HOME <img src={arrow_icon} alt="arrow_icon" /> SHOP <img src={arrow_icon} alt="arrow-icon" /> {product.category} <img src={arrow_icon} alt="arrow-icon" /> {product.name}
    </div>
  )
}

export default Breadcrums
