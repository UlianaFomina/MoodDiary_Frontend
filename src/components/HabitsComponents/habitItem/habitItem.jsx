import { ShareIcon } from "../../../Icons/share-icon";
import "./habitItem.css";

export const HabitItem = ({ image }) => {
  return (
    <div className="habit-item">
      <div className="habit-container">
        <img src={image} alt="" className="habit-item-img" />
        <div className="habit-item-info">
          <h2 className="habit-item-title">Name</h2>
          <p className="habit-item-desk">past for 13.01.2023</p>
        </div>
      </div>
      <button className="habit-item-icon">
        <ShareIcon />
      </button>
    </div>
  );
};
