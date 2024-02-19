import React from "react";
import img1 from "../Images/1.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import img4 from "../Images/4.png";
import img5 from "../Images/5.png";

const Content = () => {
  return (
    <div style={{ height: "759px", width: "100%", backgroundColor: "white" }}>
      <div style={{ height: "50%", width: "100%", backgroundColor: "white" }}>
        <div
          style={{
            height: "484px",
            gap: "35px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "35px",
              textAlign: "center",
              fontWeight: "700",
              width: "100%",
            }}
          >
            Transporting Accross The World
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <img
              src={img1}
              alt=""
              style={{ height: "320px", width: "240px", marginRight: "20px" }}
            />
            <img
              src={img2}
              alt=""
              style={{ height: "320px", width: "240px", marginRight: "20px" }}
            />
            <img
              src={img3}
              alt=""
              style={{ height: "320px", width: "240px", marginRight: "20px" }}
            />
            <img
              src={img4}
              alt=""
              style={{ height: "320px", width: "240px", marginRight: "20px" }}
            />
            <img
              src={img5}
              alt=""
              style={{ height: "320px", width: "240px", marginRight: "20px" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: "50%",
          width: "100%",
          background: "linear-gradient(to right, #FFB629, #FFDA56, #FFD7A6)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            width: "170px",
            height: "50px",
            outline: "none",
            marginTop: "150px",
            border: "none",
            backgroundColor: "#091242",
            color: "white",
          }}
        >
          More Work
        </button>
      </div>
    </div>
  );
};

export default Content;
