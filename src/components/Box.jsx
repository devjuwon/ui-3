import React from 'react'
import "../styles/box.css"

const Box = (props) => {
    // event handler
    const addToCart =() => {
        return alert("Item has been added to cart")
    }
  return (
    <div className='card'>
      <div className="card-image">
        <img src={props.image} alt="" />
      </div>

    <div className="card-content">
    <p className="product-name">
        {props.name}
      </p>

      <p className="product-price">
        N {props.price}
      </p>

      <p className="product-description">
       {props.description}
      </p>

      <div className="icon-container">

      </div>

      <button onClick={addToCart}>ADD TO CART</button>
    </div>
    </div>
  )
}

export default Box
