import './Slider.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Slider(props){

    const [product, setProduct] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get(`product/find/${props.id}`)
        .then(response => {
            if (mounted){
                setProduct(response.data)
            }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])

    return(
        <div className='center-slider'>
        <div className='slider'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://nftplazas.com/wp-content/uploads/2021/08/metaverse-future-1280x720.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                        <img src="https://cdn.shopify.com/s/files/1/2017/7541/articles/FOS-11.2-Nike-Virtual-1_1024x1024.jpg?v=1636111508" class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                        <img src="https://vdmedia.elpais.com/elpaistop/20205/9/20200509164651237_1589035643_video_1589035685.jpg" class="d-block w-100" alt="..."></img>
                        <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/10/metaverso.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                        <img src="https://static.news.bitcoin.com/wp-content/uploads/2021/11/shutterstock_1982607317.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
        </div>

    )
}
