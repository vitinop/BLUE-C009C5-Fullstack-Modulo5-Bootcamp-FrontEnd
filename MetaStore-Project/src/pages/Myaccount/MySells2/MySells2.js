import "./MySells2.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card3D from '../../../components/Card3D/Card3D';

export default function MySells() {
  return (
    <div className="center-sells">
      <div className="center-sells2">
        <h2>Sells Details</h2>&nbsp;
        <Card3D></Card3D>
      <div className="card-sells2">
      <h2>Name: </h2>
      <h2>Metaverse: </h2>

      <div className="center-details">
        <div className="buyerdetails1">
          <h2>Buyer:</h2>
          <h2>IdUser:</h2>
        </div>
        <div className="buyerdetails2">
          <button className="sellsbutton">Value</button>
        </div>
      </div>

      <div className="center-details">
        <div className="buyerdetails1">
          <h2>Date:</h2>
          <h2>Time:</h2>
        </div>
        <div className="buyerdetails2">
          <button className="sellsbutton">Status</button>
        </div>
      </div>
      
      </div>&nbsp;
      </div>
    </div>
  );
}
