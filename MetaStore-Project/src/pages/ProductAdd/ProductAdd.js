import React from "react";
import './ProductAdd.css';
import { useState } from 'react';
import Api from '../../api/api'; 
import axios from "axios";
// import authLogin from '../../api/authLogin';
import { useNavigate } from "react-router-dom";


const ProductAdd = (props) => {

  const [name_product, setname_product] = useState({});
  const [price, setprice] = useState({});
  const [description, setdescription] = useState({});
  const [specifications, setspecifications] = useState({});
  const [details, setdetails] = useState({});
  const [product_route, setproduct_route] = useState({});
  const [product_tags, setproduct_tags] = useState({});
  const [video, setvideo] = useState({});
  const [main_image, setmain_image] = useState({});
  const [gallery, setgallery] = useState({});
  const [image_3d, setimage_3d] = useState({});
  const [status, setstatus] = useState({});
  const [qualification, setqualification] = useState({});
  const [counter_views_product, setcounter_views_product] = useState({});
  const [platform, setplatform] = useState({});
  const [collection, setcollection] = useState({});
  const [the_mount, setthe_mount] = useState({});
  const [discount, setdiscount] = useState({});
  const [turbo_level, setturbo_level] = useState({});


  const navigate = useNavigate();

  const clearInput = () => {
    setname_product('')
    setprice('')
    setdescription('')
    setspecifications('')
    setdetails('')
    setproduct_route('')
    setproduct_tags('')
    setvideo('')
    setmain_image('')
    setgallery('')
    setimage_3d('')
    setstatus('')
    setqualification('')
    setcounter_views_product('')
    setplatform('')
    setcollection('')
    setthe_mount('')
    setdiscount('')
    setturbo_level('')
  }


  const handleSubmit = async (evento) => {
    evento.preventDefault();
    

    const product = {
      name_product : name_product,
      price:price,
      description:description,
      specifications: specifications,
      details: details,
      product_route: product_route,
      product_tags: product_tags,
      video: video,
      main_image: main_image,
      gallery: gallery,
      image_3d: image_3d,
      status:'ativo',
      qualification: qualification,
      counter_views_product: '',
      platform: platform,
      collection: collection,
      the_mount: the_mount,
      discount:discount,
      turbo_level:turbo_level
    };



    // const dataUser = authLogin.getDataUser();


    // const token = dataUser.token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}` }
    // }  
      
    
    const res = await axios.post('api/product/', product)
    .then(reponse => {
      console.log(reponse)
      alert("product added successfully")
      clearInput()
      navigate('/profile')

    } )
    .catch((err) => console.log(err))
    
  }

  return (
    
    <div>
        <form className="form-register" onSubmit={handleSubmit}>
          <h3> Product Register</h3>
          <form className="mb-3" controlId="formBasicEmail" required>
          
            <form>Product Name:</form>
            <form type="text" placeholder="Ex: Video Card " 
            value={name_product}
            onChange={event => setname_product(event.target.value)}
            />           
          </form>

          <form className="mb-3" controlId="formBasicPassword">
            <form>Price</form>
            <form type="text" placeholder="Product's price" 
            value={price}
            onChange={event => setprice(event.target.value)}
            />
          </form>

          <form className="mb-3" controlId="">
            <form>Description</form>
            <form type="text" placeholder="" 
            value={description}
            onChange={event => setdescription(event.target.value)}
            />
          </form>
          

          <form className="mb-3" controlId="formBasicEmail">

            <form>Specifications:</form>
            <form type="text" placeholder="Ex: Galax" 
            value={specifications}

            onChange={event => setspecifications(event.target.value)}
            />           
          </form>

          
          <form className="mb-3" controlId="formBasicPassword">
            <form>Image Link:</form>
            <form type="text" placeholder="Upload image here" 
            value={main_image}
            onChange={event => setmain_image(event.target.value)}
            />
          </form>

          
          <a href="/productView"><button className = "register-button" type = "submit"> Register Product</button></a>
     </form>
  </div>
)
}


export default ProductAdd