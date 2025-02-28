import { dummyTweets } from "../static/dummyData";
import "../styles/feed.css";

export const Counter = () => {
  return (
    <div className="tweetCounter" role="status">
      Show <span className="tweetForm__count">{dummyTweets.length}</span> posts
    </div>
  );
};
