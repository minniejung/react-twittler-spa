import { getRandomNumber } from "./static/dummyData";
import { FaRegImage, FaRegSmile, FaRegCalendar } from "react-icons/fa";
import { HiOutlineGif, HiOutlineListBullet } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./styles/form.css";
import { useState } from "react";

export const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  console.log("inputValue", inputValue);

  let randomProfilePic = `https://randomuser.me/api/portraits/women/${getRandomNumber(
    1,
    98
  )}.jpg`;

  return (
    <div className="inputWrapper">
      <div className="inputProfile">
        <img src={randomProfilePic} alt="profile-img" />
      </div>

      <div className="inputArea">
        <textarea
          className="inputTextArea"
          placeholder="What is happening?!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>

        <div className="inputFormIcons">
          <FaRegImage />
          <HiOutlineGif />
          <HiOutlineListBullet />
          <FaRegSmile />
          <FaRegCalendar />
          <HiOutlineLocationMarker />
        </div>

        <button
          className={`inputSubmitBtn ${!inputValue && "btnDisabled"}`}
          disabled={!inputValue}
        >
          Post
        </button>
      </div>
    </div>
  );
};
