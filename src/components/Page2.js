import React from "react";
import page2 from "../resource/page2.jpg";
import "../App.css";
const Page2 = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="page2-parent">
        <div className="page2Data">
          <h1 className="page2Heading">
            <b>Discover the best coffee</b>
          </h1>
          <span className="page2contentRestData">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </span>
          <div className="LearnMore">
            <a className="learnMore" href="#learn">
              Learn More
            </a>
          </div>
        </div>
        <div className="pageImage">
          <img
            src={page2}
            alt="cup-img"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
