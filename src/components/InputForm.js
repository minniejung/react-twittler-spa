import { FaRegImage, FaRegSmile, FaRegCalendar } from "react-icons/fa";
import { HiOutlineGif, HiOutlineListBullet } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../styles/form.css";
import { useState } from "react";
import { dummyTweets, getRandomNumber } from "../static/dummyData";

export const InputForm = ({ tweets, setTweets }) => {
  const [username, setUsername] = useState("Bob");
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    if (message.trim() === "") return;

    const newTweet = {
      id: tweets.length + 1,
      username: username,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content: message,
      createdAt: new Date().toISOString(),
    };

    setTweets([newTweet, ...tweets]);
    setMessage("");
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="inputWrapper">
      <div className="inputProfile">
        <img
          src={"https://cdn2.thecatapi.com/images/416.jpg"}
          alt="profile-img"
        />
      </div>

      <div className="inputArea">
        <input
          onChange={handleChangeUser}
          value={username}
          type="text"
          defaultValue="Bob"
          placeholder="your username here.."
          className="inputTextArea"
        ></input>
        <textarea
          className="inputTextArea"
          placeholder="What is happening?!"
          onChange={handleChangeMsg}
          value={message}
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
          className={`inputSubmitBtn ${!message.length && "btnDisabled"}`}
          disabled={!message.length}
          onClick={handleButtonClick}
          type="submit"
        >
          Post
        </button>
      </div>
    </div>
  );
};
