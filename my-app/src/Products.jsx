import React,{useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

const Products = () => {


    let [products, setProducts] = useState([]);
    let [productName, setproductName] = useState("");
    let [filteredProducts, setFilteredProducts] = useState([]);
    let [categories, setCategories] = useState([]);



    useEffect( () => {

        let filteredResults = products.filter( (item,i) => {
            if(item.title.toLowerCase().includes(productName.toLowerCase()) == true) {
                return true;
            }
        })
        setFilteredProducts(filteredResults);

    }, [productName, products])



    useEffect( () => {
        axios.get(`https://dummyjson.com/products`)
        .then( (res) => {
            setProducts(res.data.products);
            setFilteredProducts(res.data.products); // Set on load

            let categories = res.data.products.map( (item, i) => {
                return item.category
            })
            setCategories(Array.from(new Set(categories)));
        })
    }, []);



    function filterNSort(action) {
        setFilteredProducts([]);
        setproductName("")
        if(action == "4+Rating") {
            let result = products.filter( (item,i) => {
                if( item.rating >= 4) {
                  return true;
                }
            })
            setFilteredProducts(result);
        }else if(action == "allProducts") {
            setFilteredProducts([]);
        setproductName("")

        }else if(action == "lessThan10") {
            let result = products.filter( (item,i) => {
                if(item.price < 10) {
                    return true
                }
            })
            setFilteredProducts(result);
        }else if(action == "ratingHighToLow") {
            let productsCopy = [...products]
            let result = productsCopy.sort( (a,b) => {
               return  b.rating - a.rating
            })
            setFilteredProducts(result);
        }else if(action == "priceLowToHigh") {
            let productsCopy = [...products]
            let result = productsCopy.sort( (a,b) => {
               return  a.price - b.price
            })
            setFilteredProducts(result);

        }
    }


    function categoryChange(categoryName) {
        let result = products.filter( (item,i) => {
            if(item.category == categoryName) {
                return true;
            }
        })
        setFilteredProducts(result);
    }

    return (
       <>
       <div className='search'>
          <h1>Products</h1>
          <input 
          value = {productName}
          onChange= { (e) => {
            setproductName(e.target.value);
          }}
          placeholder='Type product name' />
          <br />
          <br />
          <button style={{ margin : "0px 10px"}} onClick={ ()=> { filterNSort("allProducts")}}>All Products</button>
          <button onClick={ () => { filterNSort("4+Rating")}}>4+ rating</button>
          <button style={{ margin : "0px 10px"}} onClick={ () => { filterNSort("lessThan10")}}>Price Less then 10</button>
           <button style={{ margin : "0px 10px"}} onClick={ () => { filterNSort("priceLowToHigh")}}>Price Low to High</button>
          <select style={{ margin : "0px 10px"}} onChange={ (e) => { categoryChange(e.target.value)}}>
            <option> Select your category </option>
            { categories.map( (item,i) => {
                return <option> {item}</option>
            })}
          </select>
          <button style={{ margin : "0px 10px"}} onClick={ () => { filterNSort("ratingHighToLow")}}> Rating high to low </button>
       </div>



       <div class="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 m-4">
        { productName == "" && filteredProducts.length == 0 ? products.map( (item, i) => {
            return <ProductCard
              title = {item.title}
              brand = {item.brand}
              category = {item.category}
              thumbnail = {item.thumbnail}
              rating = {item.rating}
              price = {item.price}
              id= {item.id}
            />


         } ) : filteredProducts.map( (item, i) => {
            return <ProductCard
              title = {item.title}
              brand = {item.brand}
              category = {item.category}
              thumbnail = {item.thumbnail}
              rating = {item.rating}
              price = {item.price}
              id= {item.id}
            />
         } ) }
 
</div>
       </>
    )
}

export default Products