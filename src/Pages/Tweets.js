import React, { useState } from "react";
import { dummyTweets } from "../static/dummyData";
// import "../styles/Tweets.css";
// ! 위 코드는 수정하지 않습니다.

// TODO - import문을 이용하여 Footer 컴포넌트를 불러오세요.
import Footer from "../components/Footer";
import { Counter } from "../components/Counter";
import { Tabs } from "../components/Tabs";
import { InputForm } from "../components/InputForm";
import { TweetActions } from "../components/TweetActions";
import "../styles/feed.css";

const tabs = [
  { key: "tab1", label: "For you" },
  { key: "tab2", label: "Following" },
];

const Tweets = () => {
  const [tweets, setTweets] = useState(dummyTweets);

  return (
    <div>
      <Tabs tabs={tabs} />
      <InputForm tweets={tweets} setTweets={setTweets} />
      <Counter tweets={tweets} />

      <ul className="tweets">
        {tweets.map((tweet) => {
          return (
            <li className="tweet" id={tweet.id} key={tweet.id}>
              <div className="tweet__profile">
                <img src={tweet.picture} />
              </div>
              <div className="tweet__content">
                <div className="tweet__userInfo">
                  <span className="tweet__username">{tweet.username}</span>
                  <span className="tweet__createdAt">{tweet.createdAt}</span>
                </div>
                <div className="tweet__message">{tweet.content}</div>
                <TweetActions />
              </div>
            </li>
          );
        })}
      </ul>
      {/* TODO - Footer 컴포넌트를 작성합니다. */}
      <Footer />
    </div>
  );
};

export default Tweets;
