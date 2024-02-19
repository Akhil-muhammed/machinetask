import React from "react";
import bg from "../Images/Background.jpg";
import Air from "../Images/Image (1).png";
import { FaBoxOpen } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const About = () => {
  return (
    <div style={{ height: "1168px", width: "100%" }}>
      <div style={{ height: "913px", width: "100%", backgroundColor: "white" }}>
        <img
          src={bg}
          style={{ height: "504px", width: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            height: "447px",
            paddingLeft: "30px",
            paddingTop: "30px",
            marginTop: "-138px",
            width: "55%",
            marginLeft: "20%",
            backgroundColor: "white",
            position: "absolute",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <span
              style={{
                fontSize: 13,
                width: "50px",
                height: "20px",
                backgroundColor: "lightgrey",
                borderLeft: "3px solid orange",
              }}
            >
              Why Us
            </span>
            <span style={{ fontSize: "27px", fontWeight: 700 }}>
              We provide full range global logistic solution
            </span>
            <span style={{ fontSize: "14px", color: "grey" }}>
              Lorem ipsum dolnim, doloribus veritatis ab quos earum odio
              voluptate modi a ex iste ipsa? Cum amet tempora enim ad eligendi?
            </span>

            <span style={{ fontSize: "14px", color: "grey" }}>
              Lorem ipsum dolnim, doloribusdio voluptate modi a ex iste ipsa?
              Cum amet tempora enim ad eligendi?
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaBoxOpen style={{ color: "orange", fontSize: 40 }} />
              <span style={{ fontSize: "18px", fontWeight: 600 }}>
                Delivery On Time
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaMoneyBill1Wave style={{ color: "orange", fontSize: 40 }} />
              <span style={{ fontSize: "18px", fontWeight: 600 }}>
                Optimizes Travel Cost
              </span>
            </div>
          </div>

          <img style={{ width: "55%", height: "80%" }} src={Air} alt="" />
        </div>
      </div>
      <div
        style={{ height: "255px", width: "100%", backgroundColor: "white" }}
      ></div>
    </div>
  );
};

export default About;
