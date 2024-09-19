import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>

      </div>
      <div className="descriptionbox-description">
        <p>Each product page features detailed descriptions, including fabric composition, sizing information, and care instructions. High-resolution images showcase products from multiple angles, and zoom-in functionality allows customers to view intricate details. Many products also feature video clips or 360-degree views to enhance the shopping experience. User-generated reviews and ratings offer valuable insights, helping shoppers make informed decisions</p>
        <p>
        Our intuitive menu system categorizes clothing into distinct sections such as “Men,” “Women,” “Kids,” “Accessories,” and “Sale.” Each category is further divided into subcategories like “Tops,” “Bottoms,” “Outerwear,” and “Footwear” for effortless browsing. Advanced search filters allow users to sort by size, color, material, brand, and price range.  
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
