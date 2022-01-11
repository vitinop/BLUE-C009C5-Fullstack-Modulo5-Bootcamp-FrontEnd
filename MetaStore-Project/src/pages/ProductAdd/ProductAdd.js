import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProductAdd.css';
import Api from '../../api/api'; 

const ProductAdd = (props) => {
  const [product, setProduct] = useState({});

  const history = props.history;
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const image = evento.target.main_image.value; 
    const name_product = evento.target.name_product.value;
    const description = evento.target.description.value;
    const price = evento.target.price.value;


    const product = {
      image,
      name_product,
      description,
      price
    }

    try {
      const response = await Api.fetchPost(product);
      const data = await response.json();
      alert(data.message);
      history.push("/");
    } catch (error) {
      console.log(error);
      }
    };

    const handleChange = (e) => {
        let newProduct = product;
        newProduct[e.target.product_name] = e.target.value;
        setProduct({ ...newProduct})
    }
    
      return (

        <div className="center-button-add">
        <div className="adict">
    
          <form className="add-form" onSubmit={(e) => {handleSubmit(e)}}>

              <div className="add-form">
                  <label id="lab">Image: </label>
                  <input type="text" id="image" name="image" placeholder="Write the url of image of product" onBlur={(e) => handleChange(e)} className="image"/>
                  { !product["image"] ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Name: </label>
                  <input type="text" id="name" name="name_product" placeholder="Write the name of Product" onBlur={(e) => handleChange(e)} className="name_product"/>{ !product["name_product"]  ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Description: </label>
                  <input type="text" id="description" name="description" placeholder="Write the description of product" onBlur={(e) => handleChange(e)} className="description"/>{ !product["description"] ? <span className="emptyText"></span> : ""}
              </div>

              <div className="add-form">
                  <label id="lab">Price: </label>
                  <input name="price" placeholder="Write the price of product" onChange={(e) => handleChange(e)}>
                  </input>
                  { !product["priority"] ? <span className="emptyText"></span> : ""}
              </div>
            
              <div className="buttons-add">
              
              <Link to="/productView"><button className="send" type="submit">Send</button></Link>
                
                <Link to="/modal"><button className="cancel" type="submit">Cancel</button>
                </Link>

              </div>
              
          </form>
    </div>
    </div>
  )
      
      }

export default ProductAdd
