import "./Card3D2.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@google/model-viewer";

export default function Card3D() {
  return (
    <div className="card mb-3 Card3D2">
      <div className="row g-0">
        <div class="sketchfab-embed-wrapper">
          <iframe
            title="Heroine Bibi (brawl stars model)"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/ee0cc068ffb34968944980a1c047c2b9/embed"
          >
            {" "}
          </iframe>
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
