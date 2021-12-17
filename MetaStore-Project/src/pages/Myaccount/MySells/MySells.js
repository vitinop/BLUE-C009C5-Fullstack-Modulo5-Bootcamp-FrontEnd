import "./MySells.css";
import { BsPlus } from "react-icons/bs";

export default function MySells() {
  return (
    <div className="center-myaccount">
      My sells
      <div className="itemSold">
        <div className="itemPicture">
          <img
            src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"
            alt="item's ProfilePicture"
          ></img>
        </div>
        <div className="itemInfo">
          <div className="itemname">Itens</div>
          <br/>
          <div>Item value</div>
        </div>
        <BsPlus size={40} />

        
      </div>
    </div>
  );
}
