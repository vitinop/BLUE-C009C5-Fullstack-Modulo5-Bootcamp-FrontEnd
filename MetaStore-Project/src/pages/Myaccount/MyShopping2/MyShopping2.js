import "./MyShopping2.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card3D from '../../../components/Card3D/Card3D';

export default function MyShopping2() {
  return (
    <div className="center-shop2">
      <div className="center-shops2">
        <h2>Shopping Details</h2>&nbsp;
        <Card3D></Card3D>
      <div className="card-shop2">
      <h2>Name: </h2>
      <h2>Metaverse: </h2>

      <div className="center-details">
        <div className="buyerdetails1">
          <h2>Buyer:</h2>
          <h2>IdUser:</h2>
        </div>
        <div className="buyerdetails2">
          <button className="shopbutton">Value</button>
        </div>
      </div>

      <div className="center-details">
        <div className="buyerdetails1">
          <h2>Date:</h2>
          <h2>Time:</h2>
        </div>
        <div className="buyerdetails2">
          <button className="shopbutton">Status</button>
        </div>
      </div>
      </div>

      <button className="shopbutton">Home</button>
      </div>
    </div>
  );
}
