import React, { useEffect } from "react";
import "../Bus/Bus.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import styles from "../Bus/BusStyle.module.css";
import train1 from "./Screenshot 2024-03-05 093958.png";
import train2 from "./Screenshot 2024-03-05 094627.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Trainfooter from "../TrainFooter/Trainfooter";
export default function Trains() {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
    marginBottom: '50px',
    marginLeft: '150px',
    marginRight: '0px',
    textAlign: 'center',
    width: '1800px',
  };
  
  const buttonStyle = {
    backgroundColor: '#ffffff',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };
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
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.mainDiv}>
      <div className="Home">
        <div className="background-col"></div>
        <div className="background-col2"></div>
        <div className="bus-headline">
          <h2 className="bus-headline-h1">Train Ticket Booking</h2>

          <div className="destination-crousal-div">
            <div className="destination">
            <div style={{
  display: "flex",
  alignItems:"start",
  color: "black",
  fontWeight: "bold",
  justifyContent: "space-around",
  textAlign: "left",
  marginRight: "80px",
}}>
  <label style={{ whiteSpace: "nowrap",marginRight:"40px"}}>
    <input type="radio" value="option1" checked={selectedOption === "option1"} onChange={handleOptionChange} />
    Book Train Tickets
  </label>
  <label style={{ whiteSpace: "nowrap",marginRight:"40px"}}>
    <input type="radio" value="option2" checked={selectedOption === "option2"} onChange={handleOptionChange} />
    Check PNR Status
  </label>
  <label style={{ whiteSpace: "nowrap" }}>
    <input type="radio" value="option3" checked={selectedOption === "option3"} onChange={handleOptionChange} />
    Live Train Status
  </label>
</div>
              <div>
                <div className="from-section">
                  <label style={{fontSize:"20px"}}>FROM</label>
                  <input type="text" name="" className="input-from"  placeholder="Enter Source name" style={{fontSize:"14px"}}/>
                </div>
              </div>
              <div>
                <div className="from-section">
                  <label style={{fontSize:"20px"}}>TO</label>
                  <input type="text" name="" className="input-from" placeholder="Enter Destination name" style={{fontSize:"14px"}}/>
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
                    Introducing social  Distance in All Trains. <a href>know more</a>
                  </span>
                </div>
              </div>
              <div className="div-sersch-bus">
                
                  <button className="btn-search-bus">SEARCH Trains</button>
                
              </div>
            </div>

            <div className="rightSection">
              <div className="rightSection1">
                <img
                  src="https://images.freekaamaal.com/post_images/1615462143.jpg"
                  alt=""
                />
              </div>

              <div className="rightSection2">
                <div className="r1">
                  <img src="https://images.freekaamaal.com/post_images/1615463717.jpg" alt="" />
                </div>

                <div className="r2">
                  <img src="https://cdn0.desidime.com/attachments/photos/600695/medium/6414043train-bob-1577694668.jpg?1577824264" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{margin:"10px"}}>
        <img src={train1}/>
      </div>
      <div style={{alignItems:"center",textAlign:"center"}}>
        <img  src={train2}/>
      </div>
      <div style={{backgroundColor:"lightblue",margin:"10px",borderRadius:"20px",paddingBottom:"40px",paddingTop:"10px"}}>
        <h2 style={{textAlign:"center",marginTop:"10px"}}>Railways inquiry just a click away!</h2>
        <div style={{ ...divStyle }}>
    <div style={{
      ...buttonStyle,
      flexBasis: '23%',
      marginRight: '1%',
      boxShadow: '5px 5px 8px rgba(0, 0, 0, 0.7)'
    }}>
      <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#4d4d4d' }}>Live Train Status</h3>
      <p style={{ color: '#4d4d4d' }}>Railways inquiry just a click away!</p>
      <FontAwesomeIcon icon={faArrowRight} style={{color:"lightblue",fontSize:"20px",textAlign:"start",alignItems:"start",marginTop:"30px"}}/>
  
    </div>
    <div style={{
      ...buttonStyle,
      flexBasis: '23%',
      marginRight: '1%',
      boxShadow: '5px 5px 8px rgba(0, 0, 0, 0.7)'
    }}>
      <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#4d4d4d' }}>Coach & Seat Position</h3>
      <p style={{ marginBottom: '10px', color: '#4d4d4d' }}>View coach & seat layout of the train you wish to</p>
      <FontAwesomeIcon icon={faArrowRight} style={{color:"lightblue",fontSize:"20px",textAlign:"start",alignItems:"start",marginTop:"5px"}}/>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
    <div style={{
      ...buttonStyle,
      flexBasis: '23%',
      marginRight: '1%',
      boxShadow: '5px 5px 8px rgba(0, 0, 0, 0.7)'
    }}>
      <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#4d4d4d' }}>PNR Status</h3>
      <p style={{ marginBottom: '10px', color: '#4d4d4d' }}>Check PNR Status effortlessly</p>
      <FontAwesomeIcon icon={faArrowRight} style={{color:"lightblue",fontSize:"20px",textAlign:"start",alignItems:"start",marginTop:"20px"}}/>
    </div>
    <div style={{
      ...buttonStyle,
      flexBasis: '29%',
      marginRight: '500px',
      boxShadow: '5px 5px 8px rgba(0, 0, 0, 0.7)'
    }}>
      <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#4d4d4d' }}>Platform Locator</h3>
      <p style={{ marginBottom: '10px', color: '#4d4d4d' }}>Know the platform for your train</p>
      <FontAwesomeIcon icon={faArrowRight} style={{color:"lightblue",fontSize:"20px",textAlign:"start",alignItems:"start"}}/>
      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
    </div>
  </div>
      </div>
      <div className="popularBusRoutesHeading">
        <h2 style={{fontSize:"21px"}}>Popular Train Routes</h2>
      </div >
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
            <h4> Delhi Trains</h4>
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
            <h4> Mumbai Trains</h4>
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
            <h4> Chennai Trains</h4>
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
            <h4> Bangalore Trains</h4>
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
            <h4> Hyderabad Trains</h4>
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
            <h4> Pune Trains</h4>
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
            <h4> Kolkata Trains </h4>
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
            <h4> Chandigarh Trains </h4>
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
            <h4> Coimbatore Trainss </h4>
            <p className="to">
              To:
              <a href>Chennai, Ooty, Bangalore, Mysore</a>
            </p>
          </div>
        </div>
      </div>
      <div  style={{marginBottom:"20px",marginLeft:"20px"}}>
        <div
          style={{
            textAlign: "left",
            marginLeft: "50px",
            marginRight: "40px",
            marginTop: "10px",
          }}
        >
          <div style={{marginLeft:"-22px",paddingBottom:"10px"}}><h2 style={{justifyContent:"left",fontSize:"21px"}}>Train Booking FAQ</h2></div>
          
        </div>
        <div
          style={{
            // margin: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h4>Book Train Tickets On GoIbibo</h4>
            <p>
            Travelling across the country is now easier than ever because of the complete digitization of the IRCTC ticketing procedure. Now, you can book train tickets online from the comfort of your home. And it’s not just the train tickets booking system that has been revolutionized. All other services such as checking the PNR status, live train status, train schedule, and train availability are easy-to-use as well. You only have to enter your IRCTC login credentials to book train tickets with ease.

Being the face of Indian railway travel, the IRCTC Next Generation portal receives thousands of enquiries everyday. You can easily rely on the robust website of IRCTC to meet your train booking requirements.

 There are several reasons why GoIbibo is one of the most trusted online ticket booking platforms, and we will discuss the same later. For now, let us find out the process by which you can book train tickets through IRCTC easily. Remember, having an IRCTC User ID and password is mandatory even if you are trying to book train tickets on GoIbibo. It is a third-party platform in association with IRCTC. 
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>How to Book Train Tickets</h4>
            <p>
            It is extremely easy to book train tickets on IRCTC. 

Below, we are mentioning the steps that you can follow to make your bookings quickly.

Step 1: Choose the source of your journey and the destination to get your train tickets book. Select the date on which you wish to start the journey 

Step 2: Now, you will have a list of trains based on your destination and source. You have to choose the one you want to book tickets for. 

Step 3: Filter and select the seat class. You can choose from a wide variety of options such as sleeper, seater, first-class AC, second-class AC and third-class AC. 

Step 4: Select your boarding point. Enter the berth preferences and passenger details. There can be multiple passengers, and you will have to enter the details of each person separately. 

Step 5: Enter the necessary contact details including email and mobile number as your e-ticket and m-ticket will be sent on the registered information. 

Step 6: Select the additional preferences. For example, you can make your bookings only if the seats are available or you can specifically book the lower berth or window seat. 

Step 7: Once you have filled all the above-stated details, choose the payment mode that is most convenient for you. You can choose from a wide range of options such as debit card, credit card, net banking and UPI payments. 

Step 8: Enter the User ID and password of your IRCTC accounts. You will soon be redirected to the final page, and your tickets will be confirmed. Soon, you will receive your ticket on your email ID and mobile. 

As you can see, the process is immensely easy, and it’s much better than spending hours just waiting in front of the railway ticket counter for your turn. Besides that, when you book train tickets online, services such as PNR enquiry and live status tracking are easily accessible. If you are using GoIbibo for ticket booking, the procedure is pretty much the same. You will notice that having a valid IRCTC account is mandatory for you to be eligible for making your railway ticket booking on GoIbibo. 
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>Why you should book cabs from Goibibo?</h4>
            <p>
              From Goibibo you can get confirmed cheap cabs of your choice and
              budget. Expert and verified drivers will be taken care of your
              ride. Easy interface of booking with different payment modes
              available at Goibibo and finally with no hidden charges, Goibibo
              is the best option for online taxi booking.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>Essential Documents to Carry</h4>
            <p>
            It is essential to carry a few important documents, including government approved ID documents, when you board a train. You must present the same when the Travelling Ticket Examiner asks for it along with your tickets. Here is a list of the important documents that you should keep handy while travelling: 

Aadhar card 
Photo ID cards that have a serial number printed on it 
Laminated photograph 
Student ID card consisting of a photograph 
National bank passbook that has your photograph 
Photo ID card issued by the State or the Central Government 
Pan card 
Driving license 
Voter ID card 
Passport 
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>Ladies Quota</h4>
            <p>
            This quota came into existence in 2011, and the system came into being so that the women could travel alone safely in the trains for short as well as long-distance journeys. Women who are either travelling alone or have children below the age of 3 years can avail of the ladies quota discount. While booking your tickets on GoIbibo, you can select the ladies quota option, but remember that only limited seats are available under this quota. There is a maximum of six berths allocated to this category. 
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
            Quick and Easy IRCTC Ticket Booking on GoIbibo
            </h4>
            <p>
            Indian Railways is the most preferred mode of transport due to its affordability and accessibility. If you want to book your train ticket without any hassle, then you can visit the GoIbibo portal and access its easy-to-use interface in order to plan your next trip. You can either use the mobile app or visit the official website of GoIbibo to start booking your train tickets. Enter your source and destination and take a look at all the available train options as per your inputs. Once you have completed your payment, you will receive your e-train ticket on your mobile; thus, eliminating the need of carrying a physical copy of your train tickets. Alternatively, you can also make use of the official website of IRCTC ticket booking in order to get your e-train ticket on mobile . In fact, IRCTC has its own mobile app as well.
            </p>
          </div>
        </div>
      </div>
      <Trainfooter/>
    </div>
  );
}
