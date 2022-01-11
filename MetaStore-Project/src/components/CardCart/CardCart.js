import "./CardCart.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardCart() {
    return (
        <div className="card mb-3 CardCart">
        <div className="row g-0">
            <div className="col-md-4">
            <img src="https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg?h=720&resize=1&w=1280" className="d-block w-100 CartImg"  alt="..."></img>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Product: </h5>
                <p className="card-text">Metaverse: </p>
                <p className="card-text"><small className="text-muted">Price: </small></p>
            </div>
            </div>
        </div>
        </div>
    )
}