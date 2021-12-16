import "./MySells.css";
import { BsPlus } from "react-icons/bs";

export default function MySells() {
  return (
    <div className="center-myaccount">
      My sells
      <div className="itemSold">
        <div className="itemName">
          Item Name
          <div className="itemPicture">
            <img
              src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"
              alt="item's ProfilePicture"
            ></img>
          </div>
          <BsPlus/>
        </div>
        <div className="itemInformation">
          <div className="itemValue">
            U$D XXX,XX
          </div>
        </div>
      </div>
    </div>
  );
}
