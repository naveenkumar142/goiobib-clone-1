import React from "react";
import "./Bus.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import styles from "./BusStyle.module.css";
import image11 from "./Screenshot 2024-03-04 222549.png";
import image22 from "./Screenshot 2024-03-04 223723.png";
import image33 from "./Screenshot 2024-03-05 084439.png";
import Busfooter from "../BusFooter/Busfooter";
import { useState } from "react";
import { useEffect } from "react";
import PopupAd from "./PopupAd";
import PopAd from "./PopupAd";
export default function Bus() {
  const [travelDate, setTravelDate] = useState(""); // Define travelDate state

  const handleDateChange = (e) => setTravelDate(e.target.value); // Define handleDateChange function

  useEffect(() => {
    // Function to get today's date in "YYYY-MM-DD" format
    const getTodayDate = () => {
      const today = new Date();
      const formattedToday = today.toISOString().split('T')[0];
      return formattedToday;
    };

    // Set travelDate state to today's date when the component mounts
    setTravelDate(getTodayDate());
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleTomorrowClick = () => {
    // Get today's date
    const today = new Date();
    // If travelDate is manually selected, use it; otherwise, use today's date
    const selectedDate = travelDate ? new Date(travelDate) : today;
    // Calculate tomorrow's date
    const tomorrow = new Date(selectedDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Format the date as "YYYY-MM-DD" (required format for input[type="date"])
    const formattedTomorrow = tomorrow.toISOString().split('T')[0];
    // Update the travelDate state with the formatted tomorrow's date
    setTravelDate(formattedTomorrow);
  };

  return (
    <div className={styles.mainDiv}>
      <div className="Home">
        <div className="background-col"></div>
        <div className="background-col2"></div>
        <div className="bus-headline">
          <h6 className="bus-headline-h1">Bus Ticket Booking</h6>

          <div className="destination-crousal-div">
            <div className="destination">
              <div>
                <div className="from-section" style={{fontSize:"23px"}}>
                  <label style={{fontSize:"18px"}}>FROM</label>
                  <input type="text" name="" className="input-from" placeholder="Enter Source"  style={{fontSize:"14px"}}/>
                </div>
              </div>
              <div>
                <div className="from-section">
                  <label style={{fontSize:"18px"}} >TO</label>
                  <input type="text" name="" className="input-from" placeholder="Enter Destination"  style={{fontSize:"14px",fontFamily:"quicksand"}} />
                </div>
              </div>
              <div className="date-travel">
        <label htmlFor="">Travel Date</label>
        <div className="datewrapper">
          <input
            className="inp-date"
            value={travelDate}
            type="date"
            name=""
            id=""
            onChange={handleDateChange}
            style={{ cursor: "pointer" }}
          />
          <div className="date-tomorrow">
            <span
              className="span"
              style={{ cursor: "pointer" }}
              onClick={handleTomorrowClick}
            >
              Today, {travelDate}
            </span>
            <span
              className="span"
              style={{ cursor: "pointer" }}
              onClick={handleTomorrowClick}
            >
              Tomorrow
            </span>
          </div>
        </div>
      </div>
              <div className="lower-part-destination">
                <div className={styles.lowerPartDestinationChild}>
                  <img
                    src="https://gos3.ibcdn.com/social-distance-small-1592916992.png"
                    alt=""
                  />
                  <span>Social Distance</span>
                </div>
                <div className={styles.knowMore}>
                  <span className="pad">
                    Introducing Social Distance in All buses. <a href>know more</a>
                  </span>
                </div>
              </div>
              <div className="div-sersch-bus">
                <button className="btn-search-bus">SEARCH BUS</button>
              </div>
            </div>

            <div className="rightSection">
              <div className="rightSection1">
                <img
                  src="https://images.freekaamaal.com/post_images/1583994828.png"
                  alt=""
                />
              </div>

              <div className="rightSection2">
                <div className="r1">
                  <img src="https://gos3.ibcdn.com/img-1708250386.jpg" alt="" />
                </div>

                <div className="r2">
                  <img src="https://gos3.ibcdn.com/bus-default-1489655303.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "90px", marginBottom: "15px" }}>
        <img src={image33} />
      </div>
      <div>
        <div style={{ marginLeft: "60px" }}>
          <h2 style={{ marginBottom: "10px",fontSize:"21px"}}>Government Buses</h2>
          <img src={image22} />
        </div>
      </div>
      <div className="popularBusRoutesHeading">
        <h2 style={{fontSize:"21px"}}>Popular Bus Routes</h2>
      </div>
      <div className="popularBusRoutes">
        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Delhi Buses</h4>
            <p className="to">
              To:
              <a href>Manali, Chandigarh, Jaipur, Dehradun</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Mumbai Buses</h4>
            <p className="to">
              To:
              <a href>Goa, Pune, Bangalore, Shirdi</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Chennai Buses</h4>
            <p className="to">
              To:
              <a href>Coimbatore, Pondicherry, Bangalore</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Bangalore Buses</h4>
            <p className="to">
              To:
              <a href>Mumbai, Hyderabad, Chennai, Goa</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Hyderabad Buses</h4>
            <p className="to">
              To:
              <a href>Mumbai, Chennai, Bangalore, Goa</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Pune Buses</h4>
            <p className="to">
              To:
              <a href>Mumbai, Shirdi, Bangalore, Goa</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Kolkata Buses </h4>
            <p className="to">
              To:
              <a href>Digha, Siliguri, Durgapur, Asansol</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Chandigarh Buses </h4>
            <p className="to">
              To:
              <a href>Manali, Delhi, Shimla, Dehradun</a>
            </p>
          </div>
        </div>

        <div className="busLogo">
          <div className="busLogo1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2276e3"
              class="BusIcon-sc-106t34v-0 bSKyoo"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path
                  fill="#647a97"
                  fill-rule="nonzero"
                  d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h4> Coimbatore Busess </h4>
            <p className="to">
              To:
              <a href>Chennai, Ooty, Bangalore, Mysore</a>
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "20px", marginLeft: "20px" }}>
        <div
          style={{
            textAlign: "left",
            marginLeft: "25px",
            margin:"2px",
            marginBottom:"10px"
          }}
        >
          <h2 style={{fontSize:"21px",marginTop:"1px"}}>Bus Booking FAQ</h2>
        </div>
        <div
          style={{
            // margin: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            marginBottom:"40px"
          }}
        >
          <div style={{ padding: "20px"}}>
            <h4>What are the advantages of online bus booking?</h4>
            <p>
              There are many advantages of online bus ticket booking. You can
              choose your preferred seats. Online bus ticket booking keeps you
              away from the long queues of the offline ticket counters. You can
              view plenty of buses and choose an appropriate bus for your travel
              considering the amenities, reviews, ratings and bus images
              available. You can choose the preferred bus type (Volvo Bus, AC or
              Non AC) and also pickup and dropping point and timings. Your
              tickets can be booked at a reasonable price with the ongoing bank
              and e-wallet discounts.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              Can we book state road transport corporation buses from Goibibo?
            </h4>
            <p>
              Yes, almost all fleets of state road transport corporation buses
              can be booked from Goibibo. For example, Deluxe AC and Non Ac
              buses and Volvo bus booking
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              Is it compulsory to carry the printout of the ticket to board the
              bus?
            </h4>
            <p>
              The bus operators validate e-tickets received on your e-mail,
              Whatsapp or available on the Goibibo app. But, it is advisable to
              carry the e-ticket's print out to be on a safer side for a
              hassle-free travel experience.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>What if I miss the bus? Will I get a refund?</h4>
            <p>
              Refund will not be initiated if you miss the bus. A refund is
              initiated in case of bus operator cancels the bus and have not
              provided any other bus as an alternate option. Please note that
              Goibibo will not be liable for refund as it can be permitted only
              by the bus operators.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>How to book bus tickets online through Goibibo?</h4>
            <p>
              Browse the Goibibo website or mobile app, go to the Bus section,
              enter the to and from city name and the journey date. The results
              displayed will bring forth various bus options. You can apply
              filters as per your travel preferences, like bus timings, boarding
              or dropping points, bus operators, bus type (Volvo Bus, AC or Non
              AC Bus). After deciding the bus, you can also select the seat as
              per your choice. After selecting the seat you must select the
              pickup and dropping point before confirming the booking. Enter the
              traveller detail on the booking confirmation page. You can also
              check the current offers and promo codes available on the booking
              and also redeem GoCash if any. You can protect your journey with
              Travel Insurance policy. After confirming all the details pay the
              final amount through payment options like Credit/Debit cards,
              Netbanking or e-Wallets.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              Where can I check current offers on online bus booking via
              Goibibo?
            </h4>
            <p>
              The exciting discounts and offers come with validity, hence, you
              must check the current offers before booking bus tickets. The
              exclusive bank offers, promo codes and discounts are displayed on
              the bus page of the website and Bus section on the Goibibo app.
            </p>
          </div>
        </div>
      </div>
      <Busfooter/>
      <PopAd/>
    </div>
  );
}
