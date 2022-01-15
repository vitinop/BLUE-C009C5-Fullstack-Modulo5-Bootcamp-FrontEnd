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
                        <img src="https://static.news.bitcoin.com/wp-content/uploads/2021/11/shutterstock_1982607317.jpg"class="d-block w-100" alt="..."></img>
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
