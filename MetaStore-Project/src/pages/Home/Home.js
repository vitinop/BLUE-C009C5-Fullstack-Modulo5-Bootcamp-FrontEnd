import Slider from "../../components/Slider/Slider";
import Card3Row from "../../components/Card3Row/Card3Row";
import "./Home.css";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Card3D from "../../components/Card3D/Card3D";


export default function Home() {
  const [products, setProducts] = useState([]);
    const [mounted, setMounted] = useState(false);

  
    const getData = async () => {
        await axios.get("/product/findMany").then((response) => {
        if (mounted) {
          setProducts(response.data);
        }
        });
    };
  
    useEffect(() => {
        setMounted(true);
        getData();
    }, [mounted])
    
    console.log(products);
  
  return (
    <div classname="home-father">
      
      <h3 >"All metaverses in one place"</h3>
      <Slider>
        <Card3Row />
      </Slider>
        
      
      <a href='/metaverseconcept' className="what-is">What is the metaverse?</a>

      <Container title='Most relevant to you'>
            
            {
            products.map(product => (
            <Card 
                id={product.id}
                gallery={product.gallery}
                name_product={product.name_product}
                price={product.price}
                collection={product.collection}
                key={product.id}
            />
            ))
        }
            </Container>

          <div className="card3d-home">
            <Card3D></Card3D>
            <Card3D></Card3D>
            <Card3D></Card3D>
            <Card3D></Card3D>
          </div>

      
      <span className="span-home">Direitos autorais MetaStore - 2021 </span>

      
      <div className="home-midias">
        <FiFacebook />&nbsp;
        <FaInstagram />&nbsp;
        <MdOutlineEmail />&nbsp;
        <FaWhatsapp />&nbsp;
      </div>

    </div>
  );
}
