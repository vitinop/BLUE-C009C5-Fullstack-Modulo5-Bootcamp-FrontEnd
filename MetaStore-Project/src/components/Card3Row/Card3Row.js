import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card3Row.css"

export default function Card3Row() {
    return(
    <div className="center-card3-father">
        <div className="center-card3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                <img className="imgCard3" src="https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S1-2560x1440-3dc68a07cace02e826ad42a2de5279b0.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img className="imgCard3" src="https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S1-2560x1440-3dc68a07cace02e826ad42a2de5279b0.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img className="imgCard3" src="https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S1-2560x1440-3dc68a07cace02e826ad42a2de5279b0.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
