import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/api';
import './ProductView.css';
import Modal from 'react-modal';



const ProductView = (props) => {
    const _id = props.match.params.id;
    const [product, setProduct] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        try{
        const response = await Api.fetchGetById(_id);
        const result = await response.json();
        setProduct(result);
        }catch {alert('Algo deu errado, favor verificar.');
        }
    }

    const handleDelete = async (evento) => {
        evento.preventDefault();
        try{
        const response = await Api.fetchDelete(_id);
        const result = await response.json();
        alert(result.message);
        props.history.push('/');
        }catch {alert('Something went wrong, please check.');
        }
    }

    return (
        <div className="container flex-grow-1">
            
            <div className="rows">
                <div className="col">
                    <img src={product.image} alt={product.name}/>
                    <p className="text-center">{product.name_product}</p>
                
                    <p className="text-center">Description: {product.description}</p>

                    <p className="text-center">Price: {product.price}</p>

                    <div className="buttons">
                        <Link to={`/edit/${product._id}`}><button className="btn btn-outline-info" type="submit">Edit</button>
                        </Link>

                        <button className="btn btn-outline-danger" onClick={onOpenModal}>Delete</button>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <button className="btn btn-danger" onClick={onCloseModal}>No</button>
                <button className="btn btn-success" onClick={handleDelete}>Yes</button>
                <h2>Do you really wish delete?</h2>
            </Modal>
        </div>
    )
}

export default ProductView;