import React, { useState, useEffect } from 'react';
import './ProductEdit.css';
import { Link } from 'react-router-dom';
import Api from "../../api/api";


export default function ProductEdit(props) {

    const _id = props.match.params.id;
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await Api.fetchGetById(_id);
        const data = await response.json();
        setProduct(data);
    };

    const handleFieldsChange = (event) => {
        const item = { ...product };
        item[event.target.name] = event.target.value;
        setProduct(item);
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const newItem = { ...product };

        try {
        const response = await Api.fetchPut(newItem, _id);
        const data = await response.json();
        alert(data.message);
        props.history.push("/"); 
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <div className='product-edit-father'>
            <form className="f-edit" onSubmit={handleSubmit}>
                <div className='product-edit-title'>
                    <h2>Product Edit</h2>
                </div>

                <div className='product-edit-items'>
                    <label>Image :</label>
                    <input type="image" alt='' id="image" value={product.image} name="image" placeholder="Write the url of image of product" onChange={handleFieldsChange} className="image"></input>

                    <label>Name :</label>
                    <input type='text' value={product.name} name='name' placeholder='new name' onChange={handleFieldsChange} className="name"></input>

                    <label>Price :</label>
                    <input type='text' name='price' placeholder='new price' onChange={handleFieldsChange} className="price"></input>

                    <label>Description: </label><input type="text" id="description" name="description" placeholder="Write the description of product" value={product.description} onChange={handleFieldsChange} className="description"/>

                
                <div className="buttons">
                    <Link to='/productView'>
                    <button className="save" type="submit">Save</button>
                    </Link>
                   
                </div>
            </div>
        </form>
    </div>
    )
    
}
