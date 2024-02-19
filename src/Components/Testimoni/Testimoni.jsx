import React from "react";
import right from "../Images/arrow.png";
import left from "../Images/arrow (1).png";

const Testimoni = () => {
  return (
    <div>
      <div
        style={{
          height: "708px",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ height: "430px", width: "60%", backgroundColor: "green" }}
        >
          <div
            style={{
              height: "20px",
              width: "90px",
              backgroundColor: "rgb(243,243,243)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "13px",
              borderLeft: "5px solid orange",
              fontWeight: "600",
            }}
          >
            <span>Testimonial</span>
          </div>

          <div
            style={{
              width: "100%",
              height: "40px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "25px", fontWeight: "700" }}>
              What Our Customer Say
            </span>
            <div
              style={{
                height: "100%",
                width: "70px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img style={{ width: "25px" }} src={left} alt="" />
              <img style={{ width: "30px" }} src={right} alt="" />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              height: "370px",
              width: "100%",
              backgroundColor: "tomato",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "350px",
                backgroundColor: "yellow",
              }}
            ></div>

            <div
              style={{ width: "50%", height: "350px", backgroundColor: "blue" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
