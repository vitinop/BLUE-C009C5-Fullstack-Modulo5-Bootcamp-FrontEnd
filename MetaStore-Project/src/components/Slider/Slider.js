import './Slider.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Slider(){

    return(
        <div className='center-slider'>
        <div className='slider'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg?h=720&resize=1&w=1280" class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images.hdqwalls.com/download/star-wars-4th-may-kt-1280x720.jpg?h=720&resize=1&w=1280" class="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                        <img src="https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg?h=720&resize=1&w=1280" class="d-block w-100" alt="..."></img>
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
