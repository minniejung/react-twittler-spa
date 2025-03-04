import "../styles/feed.css";

export const Counter = ({ tweets }) => {
  return (
    <div className="tweetCounter" role="status">
      Show <span className="tweetForm__count">{tweets.length}</span> posts
    </div>
  );
};
