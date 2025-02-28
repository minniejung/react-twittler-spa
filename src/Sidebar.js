import React, { useState } from "react";
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from "react-router-dom";
import XLogo from "./assets/x-logo.svg";
import {
  FaSearch,
  FaBolt,
  FaEllipsisH,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegUser,
  FaRegCheckCircle,
  FaHome,
} from "react-icons/fa";
import { HiOutlineBriefcase, HiOutlineUsers } from "react-icons/hi";

import "./styles/sidebar.css";

const Sidebar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <section className="sidebar">
        <img src={XLogo} alt="x-logo" width="24px" height="24px" />

        {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}
        <div className="sidebar-icons">
          <Link to="/">
            <i className="far fa-comment-dots" />
          </Link>
          <Link to="/about">
            <i className="far fa-question-circle" />
          </Link>
          <Link to="/mypage">
            <i className="far fa-user" />
          </Link>

          <div className="alert-div" onClick={toggleNotifications}>
            <div className="alert" />
            <i class="far fa-bell" id="alert-icon" />
          </div>

          <FaSearch />
          <FaRegEnvelope />
          <FaRegBookmark />
          <HiOutlineUsers />
          <FaEllipsisH />
        </div>
      </section>

      {/* {showNotifications && (
        <>
          <div
            className="notificationOverlay"
            onClick={toggleNotifications}
          ></div>

          <div className="notificationModal">
            <div className="notificationHeader">
              <h3>Notifications</h3>
              <button className="closeBtn" onClick={toggleNotifications}>
                X
              </button>
            </div>

            <ul className="notificationContent">
              {dummyNotice.map((notice) => (
                <li className="notificationItem" key={notice.id}>
                  <div className="notifInfo">
                    <span>🔔</span>
                    <p className="notifUserName">{notice.username}</p>
                    <p className="notifDate">
                      {new Date(notice.createdAt).toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                  <p className="notifContent">{notice.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )} */}
    </>
  );
};

export default Sidebar;
