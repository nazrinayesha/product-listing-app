import React from 'react';
import {useNavigate} from 'react-router-dom'

const ProductCard = (props) => {

  let navigate = useNavigate();

  return (
    <div class="col">
    <div class="card h-100">
      <img src={props.thumbnail} class="card-img-top thumbnail" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p> <b> Brand: {props.brand} </b></p>
        <p> <b> Category: {props.category} </b></p>
        <p> <b> Rating: {props.rating} </b></p>
        <p> <b> Price: {props.price} </b></p>
        <button onClick={ () => {
          navigate(`/product/${props.id}`)
        }}> view more details </button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard