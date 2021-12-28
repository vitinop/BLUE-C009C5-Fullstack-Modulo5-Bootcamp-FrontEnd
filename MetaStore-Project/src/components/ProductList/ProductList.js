import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './DrinkList.css';
import Api from "../../../api/api";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(()=> {
    getProduct();
  }, [])
  
  const getProduct = async () => {
    const response = await Api.fetchGetAll();
    const data = await response.json();
    setProduct(data);
  }
  return (
    <main className='container'>
      <div className="list">
        {product.map((product, index) => (
          <Card data={product} key={index}/>
        ))}
      </div>
    </main>
  )
}

export default ProductList
