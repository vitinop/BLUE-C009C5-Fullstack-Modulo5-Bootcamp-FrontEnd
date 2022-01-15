import "./Catalog.css";
import Card3D from "../../components/Card3D/Card3D";
import Card3D2 from "../../components/Card3D2/Card3D2";
import Card3D3 from "../../components/Card3D3/Card3D3";
import Slider from "../../components/Slider/Slider";


export default function Catalog() {

    return(
        <div className="center-catalog">
            <div className="father-catalog">
                <div className="metaversos">
                    
                    <div className="metas">
                        <span>Fortnite</span>
                        <h6>(Every Metaverse Will have its own 3D model for Sale)</h6>
                        <div className="types">
                            <Slider></Slider>
                            <Card3D3></Card3D3>&nbsp;
                            <Card3D></Card3D>&nbsp;
                            <Card3D2></Card3D2>&nbsp;
                            <Card3D></Card3D>&nbsp;
                        </div>
                        <span>Microsoft</span>
                        <h6>(Every Metaverse Will have its own 3D model for Sale)</h6>
                        <div className="types">
                            <Slider></Slider>
                            <Card3D2></Card3D2>&nbsp;
                            <Card3D2></Card3D2>&nbsp;
                            <Card3D></Card3D>&nbsp;
                            <Card3D3></Card3D3>&nbsp;
                        </div>
                        <span>Meta</span>
                        <h6>(Every Metaverse Will have its own 3D model for Sale)</h6>
                        <div className="types">
                            <Slider></Slider>
                            <Card3D3></Card3D3>&nbsp;
                            <Card3D></Card3D>&nbsp;
                            <Card3D></Card3D>&nbsp;
                            <Card3D2></Card3D2>&nbsp;
                        </div>
                        <span>Nba</span>
                        <h6>(Every Metaverse Will have its own 3D model for Sale)</h6>
                        <div className="types">
                            <Slider></Slider>
                            <Card3D></Card3D>&nbsp;
                            <Card3D2></Card3D2>&nbsp;
                            <Card3D></Card3D>&nbsp;
                            <Card3D3></Card3D3>&nbsp;
                        </div>
                        <span>Roblox</span>
                        <h6>(Every Metaverse Will have its own 3D model for Sale)</h6>
                        <div className="types">
                            <Slider></Slider>
                            <Card3D></Card3D>&nbsp;
                            <Card3D3></Card3D3>&nbsp;
                            <Card3D></Card3D>&nbsp;
                            <Card3D2></Card3D2>&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}