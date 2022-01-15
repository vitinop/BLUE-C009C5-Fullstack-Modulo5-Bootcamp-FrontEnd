import "./Card3D3.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@google/model-viewer';

export default function Card3D() {
    return (
        <div className="card mb-3 Card3D">
            <div className="row g-0">
                    <div class="sketchfab-embed-wrapper"> <iframe title="Lola (brawl stars model)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8baa96dc2d53442db73cb82501fb8ccb/embed"> </iframe> <p>Credits:  <a href="https://sketchfab.com/3d-models/lola-brawl-stars-model-8baa96dc2d53442db73cb82501fb8ccb?utm_medium=embed&utm_campaign=share-popup&utm_content=8baa96dc2d53442db73cb82501fb8ccb" target="_blank"> </a>IvanSCP <a href="https://sketchfab.com/Nullsivan?utm_medium=embed&utm_campaign=share-popup&utm_content=8baa96dc2d53442db73cb82501fb8ccb" target="_blank">  </a> <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8baa96dc2d53442db73cb82501fb8ccb" target="_blank" ></a></p></div>
            </div>
        </div>
    )
}

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>