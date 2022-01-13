// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Api from '../../api/api';
// import './ProductView.css';
// import Modal from 'react-modal';
// import axios from "axios";




// const ProductView = (props) => {
//     const _id = props.match.params.id;
//     const [product, setProduct] = useState({});
//     const [open, setOpen] = useState(false);

//     const onOpenModal = () => setOpen(true);
//     const onCloseModal = () => setOpen(false);

//     useEffect(() => {
//         getProductById();
//     }, []);


//     axios.get("http://localhost:3000/api/product", product).then((response) => console.log(response));


//     const getProductById = async () => {
//         try{
//         const response = await Api.fetchGetById(_id);
//         const result = await response.json();
//         setProduct(result);
//         }catch {alert('Algo deu errado, favor verificar.');
//         }
//     }

//     const handleDelete = async (evento) => {
//         evento.preventDefault();
//         try{
//         const response = await Api.fetchDelete(_id);
//         const result = await response.json();
//         alert(result.message);
//         props.history.push('/');
//         }catch {alert('Something went wrong, please check.');
//         }
//     }

//     return (
//         <div className="container flex-grow-1">
            
//             <div className="row">
//                 <div className="col">
//                     <img src={product.image} alt={product.name}/>
//                     <p className="text-center">{product.name_product}</p>
                
//                     <p className="text-center">Description: {product.description}</p>

//                     <p className="text-center">Price: {product.price}</p>

//                     <div className="buttons">
//                         <Link to={`/edit/${product._id}`}><button className="btn btn-outline-info" type="submit">Edit</button>
//                         </Link>

//                         <button className="btn btn-outline-danger" onClick={onOpenModal}>Delete</button>
//                     </div>
//                 </div>
//             </div>
//             <Modal open={open} onClose={onCloseModal} center>
//                 <button className="btn btn-danger" onClick={onCloseModal}>No</button>
//                 <button className="btn btn-success" onClick={handleDelete}>Yes</button>
//                 <h2>Do you really wish delete?</h2>
//             </Modal>
//         </div>
//     )
// }

// export default ProductView;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;
function ProductDetail() {
   const [product, setProduct] = useState([]);
    
   const getProductById = async () => {
    await axios.get(`/product/${ id}`)
    .then(response => {
        setProduct(response.data)
      
    })

   }

   const { id } = useParams();

   useEffect(() => {
     getProductById()
   },[])

   
  return (
    
    <Container>
      
      
      <Wrapper>
        <ImgContainer>
          <Image  src={product.main_image} alt="product image" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name_product}</Title>
          <Desc>
            
             Marca	ELG <br/>
             Sistema operacional	Windows 7<br/>
             Fonte de alimentação	Não aplicável<br/>
             Número de chaves	107<br/>
          </Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              
              <Amount>1</Amount>
              
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      
      
    </Container>

  );
}

export default ProductDetail;