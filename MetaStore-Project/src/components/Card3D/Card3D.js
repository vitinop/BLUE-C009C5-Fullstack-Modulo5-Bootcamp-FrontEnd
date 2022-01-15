import "./Card3D.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@google/model-viewer';

export default function Card3D() {
    return (
        <div className="card mb-3 Card3D">
            <div className="row g-0">
                    <div className="Card3dImage sketchfab-embed-wrapper"> <iframe title="Director buzz (brawl stars model)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6d0cd2a571ea443ba7f1d1d6873427cf/embed"> </iframe> <p >Credits: <a href="https://sketchfab.com/3d-models/director-buzz-brawl-stars-model-6d0cd2a571ea443ba7f1d1d6873427cf?utm_medium=embed&utm_campaign=share-popup&utm_content=6d0cd2a571ea443ba7f1d1d6873427cf" target="_blank"> </a> IvanSCP <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6d0cd2a571ea443ba7f1d1d6873427cf" target="_blank" ></a></p></div>
            </div>
        </div>
    )
}

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>