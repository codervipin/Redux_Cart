import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {

  const [product,setProducts] = useState([]);

  let fetchdata = async () =>{

    let {data} = await axios.get('https://dummyjson.com/products');
    setProducts(data.products);

  }

//   console.log(product)
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <section className='product'> 
        {product.map((ele)=>{
            return <Product key={ele.id} data={ele}/>
        })}
    </section>
  )
}

export default Products