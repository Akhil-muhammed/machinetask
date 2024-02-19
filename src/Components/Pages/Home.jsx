import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Services from "../Service/Services";
import About from "../About/About";
import Content from "../Content/Content";
import Testimoni from "../Testimoni/Testimoni";
import Why from "../WhyChoseUS/Why";

const Home = () => {
  return (
    <div>
      <div className="Banner">
        <Navbar />

        <div className="Banner-txt">
          <div className="logistics-div">
            <span>Logistics & Supply Chain Solution</span>
          </div>
          <span className="txt-span1">
            Your Gateway <br />
            to any Destination in the World
          </span>
          <span className="txt-span2">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis <br /> vehicula ipsum. Nunc faucibus, nisl id
            dapibus finibus, enim diam interdum nulla, <br /> sed laoreet risus
            lectus.{" "}
          </span>
          <button className="Banner-btn">Explore More</button>
        </div>
      </div>
      <Services />
      <About />
      <Content />
      <Testimoni />
      <Why />
    </div>
  );
};

export default Home;
