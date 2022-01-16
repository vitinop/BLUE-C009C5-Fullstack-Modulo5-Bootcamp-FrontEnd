import "./Card3D.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@google/model-viewer";

export default function Card3D() {
  return (
    <div className="card mb-3 Card3D">
      <div className="row g-0">
        <div className="Card3dImage sketchfab-embed-wrapper">
          {" "}
          <iframe
            title="Director buzz (brawl stars model)"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/6d0cd2a571ea443ba7f1d1d6873427cf/embed"
          >
            {" "}
          </iframe>{" "}
          <p>Exemple Item</p>
          <p>XX.XX U$D</p>
        </div>
      </div>
    </div>
  );
}

<script
  type="module"
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
></script>;
