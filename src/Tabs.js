import { useState } from "react";
import "./styles/tabs.css";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          key={tab.key}
          className={`tab ${activeTab === tab.key ? "active" : ""}`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};
