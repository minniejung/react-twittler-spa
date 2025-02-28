import { FaRegImage, FaRegSmile, FaRegCalendar } from "react-icons/fa";
import { HiOutlineGif, HiOutlineListBullet } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../styles/form.css";
import { useState } from "react";

export const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  console.log("inputValue", inputValue);

  return (
    <div className="inputWrapper">
      <div className="inputProfile">
        <img
          src={"https://cdn2.thecatapi.com/images/416.jpg"}
          alt="profile-img"
        />
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
