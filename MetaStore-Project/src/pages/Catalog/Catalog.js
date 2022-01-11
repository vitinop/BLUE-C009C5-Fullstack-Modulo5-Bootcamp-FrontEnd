import "./Catalog.css";
import Card3D from "../../components/Card3D/Card3D";
import Card3Row from "../../components/Card3Row/Card3Row";

export default function Catalog(){
    return(
        <div className="catalog-father">
            <h2>Novidades 3D</h2>
            <div className="card3d-catalog">
                <Card3D></Card3D>
                <Card3D></Card3D>
                <Card3D></Card3D>
                <Card3D></Card3D>
            </div>
            <h2>Modelos 3D</h2>
            <div className="card3d-catalog">
                <Card3D></Card3D>
                <Card3D></Card3D>
                <Card3D></Card3D>
                <Card3D></Card3D>
            </div>
                <h2>Novidades Metaverso</h2>
                <Card3Row></Card3Row>
        </div>

    )
}