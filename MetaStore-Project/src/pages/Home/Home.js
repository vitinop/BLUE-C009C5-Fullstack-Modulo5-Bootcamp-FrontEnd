import Slider from "../../components/Slider/Slider";
import BarSearch from "../../components/BarSearch/BarSearch";
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
        await axios.get("/products/findMany").then((response) => {
        if (mounted) {
          setProducts(response.data);
        }
        });
    };

    useEffect(() => {
        setMounted(true);
        getData();
    }, [mounted]);

  return (
    <div classname="home-father">
      
      <h3>"Todos os metaversos em um único lugar"</h3>
      <Slider 
      id=""
      alt='Metaverso'/>&nbsp;

      <Card3Row />

      <Container title='Mais relevantes para você'>
            {
            products.map(product => (
            <Card 
                id={product.id}
                image={product.image}
                title={product.name}
                preco={product.price}
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

      
      <div className="home-midias">
        <FiFacebook />&nbsp;
        <FaInstagram />&nbsp;
        <MdOutlineEmail />&nbsp;
        <FaWhatsapp />&nbsp;
      </div>
      <span>Direitos autorais metastore&copy; - 2021 </span>
    </div>
  );
}
