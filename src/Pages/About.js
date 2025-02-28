import React from "react";
import "../styles/About.css";
import Footer from "../components/Footer";
import { Tabs } from "../components/Tabs";
import { FaRegCalendar } from "react-icons/fa";

const tabs = [
  { key: "tab1", label: "Posts" },
  { key: "tab2", label: "Replies" },
  { key: "tab3", label: "Highlights" },
  { key: "tab4", label: "Articles" },
  { key: "tab5", label: "Media" },
  { key: "tab6", label: "Likes" },
];

const About = (props) => {
  return (
    <section className="aboutTwittler">
      <p className="aboutTwittler__detailName">React Twittler Info</p>
      <div className="aboutTwittler__header">
        <i className="fas fa-users"></i>
        <p>나만의 Twittler 소개페이지를 꾸며보세요.</p>
      </div>

      <div className="profile-pic-area">
        <div className="profile-pic">Photo </div>
        <button className="edit-btn">Edit profile</button>
      </div>

      <div className="about-info">
        <div className="name">MINNIE</div>
        <div className="username">@minnie-rocketboost</div>
        <div className="date">
          <FaRegCalendar />
          Joined January 2025
        </div>
        <div className="followers">
          <span>199</span> Following <span>123</span> Followers
        </div>
      </div>

      <Tabs tabs={tabs} />

      <div className="about-contents">
        main contents hereeeeeeeeeeeeee hihihi hohoho meowmeow
      </div>
      <Footer />
    </section>
  );
};

export default About;
