import "./MyShopping1.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card3D from '../../../components/Card3D/Card3D';

export default function MyShopping1() {
  return (
    <div className="center-shop">
      <div className="center-shops"> 
        <h2>My Shopping</h2>&nbsp;
        <Card3D></Card3D>
      <div className="card-shop">
          <h2>Name: </h2>
        <h2>Value: </h2>
      </div>&nbsp;

      <Card3D></Card3D>
      <div className="card-shop">
          <h2>Name: </h2>
        <h2>value: </h2>
      </div>
      </div>
    </div>
  );
}
