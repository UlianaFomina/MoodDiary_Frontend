import { HabitItem } from "../habitItem/habitItem";
import image1 from "../../../assets/habitsIcons/habitIcon1.png";
import gif from "../../../assets/4q3u.gif";
import "./habits.css";
import { SettingIcon } from "../../../Icons/settings-icon";

export const Habits = () => {
  return (
    <div className="habits">
      <div className="habits-content">
        <div className="habits-header">
          <button className="habits-header-btn"> Add new habits</button>
          <button className="habits-header-svg-btn">
            <SettingIcon />
          </button>
        </div>
        <div className="habits-list">
          <HabitItem image={image1} />
          <HabitItem image={image1} />
          <HabitItem image={image1} />
        </div>
      </div>
      <img alt="" src={gif} className="habits-gif" />
    </div>
  );
};
