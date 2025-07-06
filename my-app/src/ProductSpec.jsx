import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductSpec = () => {

     let params = useParams();
     let {prodId} = params;
     let [prodDetails, setProductDetails] = useState(null);
     
   useEffect( () => {
   axios.get(`https://dummyjson.com/products/${prodId}`)
   .then( (res) => {
    setProductDetails(res.data);
    
   })
   }, [])


  return (
    <div>
        <h1> ProductSpec </h1>
        {prodDetails != null ? <div id="productSpecWrapper">
            <div id="productSpec-leftSection">
                <img
                style={{ width: "400px", height: "400px"}}
                 src={prodDetails.thumbnail} />
            </div>
            <div id="productSpec-rightSection">
                <h2> {prodDetails.title} </h2>
                <b> {prodDetails.brand} </b>
                <p> <b> Price: </b> {prodDetails.price} </p>
                <p> {prodDetails.description} </p>
                <p> Product preview </p>
                <div class="row row-cols-1 row-cols-md-3 g-4 custom-image-row">
                    {prodDetails.images.map( (item,i) => {
                        return <div class="col" onClick={ () => {
                            setProductDetails({...prodDetails, thumbnail: item})
                        }}>
    <div class="card h-100">
      <img src={item} class="card-img-top" alt="..." />
      
    </div>
  </div>
                    })}
  
   
 
</div>
            </div>

        </div>: ""}
    </div>
  )
}

export default ProductSpec