import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
} from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { FiShare } from "react-icons/fi";
import "../styles/feed.css";

export const TweetActions = () => {
  const getRandomCount = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="tweetActions">
      <div className="action">
        <FaRegComment /> <span>{getRandomCount(1, 50)}K</span>
      </div>
      <div className="action">
        <FaRetweet /> <span>{getRandomCount(1, 100)}K</span>
      </div>
      <div className="action">
        <FaRegHeart /> <span>{getRandomCount(1, 500)}K</span>
      </div>
      <div className="action">
        <HiOutlineChartBar /> <span>{getRandomCount(1, 200)}M</span>
      </div>

      <div className="iconWithoutText">
        <div className="action">
          <FaRegBookmark />
        </div>
        <div className="action">
          <FiShare />
        </div>
      </div>
    </div>
  );
};
