import React from "react";
import "../Bus/Bus.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import styles from "../Bus/BusStyle.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Cabsfooter from "./CabsFooter";
export default function Flights() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
  const inlineStyles = {
    color: 'red',
    fontSize: '24px',
    padding: '10px',
    border: '1px solid black',
  };
  const data = [
    {
      category: "Top Cab Routes",
      routes: [
        "Delhi To Jaipur Cab",
        "Delhi To Dehradun Cab",
        "Delhi To Haldwani Cab",
        "Dehradun To Delhi Cab",
        "Mumbai To Goa Cab",
        "Delhi To Agra Cab",
        "Delhi To Haridwar Cab",
        "Delhi To Manali Cab",
        "Bhubaneswar To Puri Cab",
        "Ahmedabad To Vadodara Cab",
        "Mumbai To Pune Cab",
        "Chandigarh To Shimla Cab",
        "Bangalore To Mysore Cab",
        "Siliguri To Gangtok Cab",
        "Bangalore To Hyderabad Cab",
        "Pune To Mumbai Cab",
        "Chennai To Pondicherry Cab",
        "Delhi To Rishikesh Cab",
        "Delhi To Bareilly Cab",
        "Delhi To Chandigarh Cab",
        "Delhi To Mathura Cab",
        "Jaipur To Delhi Cab",
        "Mysore To Coorg Cab",
      ],
    },
    {
      category: "Cab from Top Cities",
      routes: [
        "Delhi Taxi Services",
        "Hyderabad Taxi Services",
        "Coimbatore Taxi Services",
        "Tirupati Taxi Services",
      ],
    },
    {
      category: "Top Airport Cab Routes",
      routes: [
        "Cab From Bangalore Airport",
        "Cab To Ahmedabad Airport",
        "Cab From Jaipur Airport",
        "Srinagar Airport To Gulmarg Cab",
        "Goa Taxi Services",
        "Kolkata Taxi Services",
        "Indore Taxi Services",
        "Ahmedabad Taxi Services",
        "Cab From Hyderabad Airport",
        "Cab From Kolkata Airport",
        "Cab From Patna Airport",
        "Chandigarh To Delhi Airport Cab",
        "Bangalore Taxi Services",
        "Jaipur Taxi Services",
        "Mumbai Taxi Services",
        "Varanasi Taxi Services",
        "Chennai Taxi Services",
        "Pune Taxi Services",
        "Visakhapatnam Taxi Services",
        "Noida Taxi Services",
        "Patna Taxi Services",
        "Chandigarh Taxi Services",
        "Gurgaon Taxi Services",
        "Raipur Taxi Services",
        "Cab From Delhi Airport",
        "Cab From Amritsar Airport",
        "Cab From Madurai Airport",
        "Cab From Chennai Airport",
        "Cab From Chandigarh Airport",
        "Pune To Mumbai Airport Cab",
        "Chennai Airport To Pondicherry Cab",
        "Mumbai Airport To Thane Cab",
        "Cab To Bangalore Airport",
        "Cab To Chennai Airport",
        "Ernakulam Airport To Munnar Cab",
        "Mumbai Airport To Pune Cab",
      ],
    },
  ];
  return (
    <div className={styles.mainDiv}>
      <div className="Home">
        <div className="background-col"></div>
        <div className="background-col2"></div>
        <div className="bus-headline">
          <h2 className="bus-headline-h1">Book Online Cab</h2>
          <div className="destination-crousal-div">
            <div className="destination">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  fontWeight: "bold",
                  justifyContent:"space-between",
                  textAlign: "left",
                  marginRight: "40px",
                }}
              >
                <label style={{ whiteSpace: "nowrap" }}>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  Outstation One-way
                </label>

                <label style={{ whiteSpace: "nowrap" }}>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  Outstation Round
                </label>

                <label style={{ whiteSpace: "nowrap",marginRight:"20px"}}>
                  <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                  />
                  Airport transfer
                </label>
              </div>
              <div>
                <div className="from-section" style={{marginTop:"10px"}}>
                  <label style={{fontSize:"18px"}}>FROM</label>
                  <input
                    type="text"
                    name=""
                    className="input-from"
                    placeholder="Enter Pickup Location"
                    style={{ fontFamily: "inherit", fontSize: "14px", }}
                  />
                </div>
              </div>
              <div>
                <div className="from-section">
                  <label  style={{fontSize:"18px"}}>TO</label>
                  <input
                    type="text"
                    name=""
                    className="input-from"
                    placeholder="Enter Drop Location"
                    style={{ fontFamily: "inherit", fontSize: "14px" }}
                  />
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
                    Introducing Social  Distance in All Cabs. <a href>know more</a>
                  </span>
                </div>
              </div>
              <div className="div-sersch-bus" style={{ marginBottom: "40px" }}>
                <button className="btn-search-bus">SEARCH Cabs</button>
              </div>
            </div>

            <div className="rightSection">
              <div className="rightSection1">
                <img
                  src="https://img.paisawapas.com/ovz3vew9pw/2023/01/17135941/Goibibo-Cab-Coupons.jpg"
                  alt=""
                />
              </div>

              <div
                className="rightSection2"
                style={{ height: "80%", width: "80%" }}
              >
                <div className="r1">
                  <img src="https://i.ytimg.com/vi/ApSeM1eu_jc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCYgTSh_MA8=&rs=AOn4CLBT8LJYuvgODySQ8T9AcdOgiwwBCg" alt="" />
                </div>

                <div className="r2">
                  <img src="https://couponswala.com/blog/wp-content/uploads/2021/08/goibibo-cab-coupons.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "40px",
          marginRight: "40px",
          borderRadius: "20px",
          // marginTop: "20px",
          marginBottom:"30px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            paddingLeft: "50px",
          }}
        >
          <h3 style={{ paddingTop: "30px" }}>Online Cab Booking on GoIbibo</h3>
          <p>
            Most of the Indian tourists prefer travelling to their preferred
            destination via road. It is due to the fact that a road trip allows
            you to enjoy the scenic beauty at your own pace. Moreover, the
            comfort of travelling in a vehicle with your family and friends is
            unparalleled. You can opt for online cab booking that will make your
            journey hassle-free. You simply have to visit the GoIbibo portal and
            select a cab.
          </p>
          <h5></h5>
          <p style={{ paddingBottom: "20px" }}>
            Due to the easy-to-use interface and quick menu options of GoIbibo,
            online cab booking is not a difficult process. In fact, cab booking
            is something which has become a part of our everyday life. You can
            also opt for intercity car rentals in order to visit other cities.
            The online taxi booking process on GoIbibo can be completed within a
            couple of minutes. So, if you wish to customize your cab booking
            package, GoIbibo is your go-to website. All the car booking services
            available on GoIbibo are geared towards giving you the best-possible
            experience when it comes to cab booking.
          </p>
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
          <div style={{marginLeft:"-25px",paddingBottom:"10px"}}><h2 style={{justifyContent:"left",fontSize:"21px"}}>Cabs Booking FAQ</h2></div>
          
        </div>
        <div
          style={{
            // margin: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h4>How can I book cheap cabs online?</h4>
            <p>
              Goibibo helps you with online cab booking at the best prices,
              comparatively much lower than the local vendors. Also you can use
              promo codes and offers on the Goibibo website & app on online cab
              booking to get extra discounts
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>What are the advantages of online taxi booking?</h4>
            <p>
              Online taxi booking not only helps you with best prices but also
              helps you with the convenience of paying through multiple payment
              options (like Debit Card, Credit Card, eWallets etc.). You can
              easily compare prices and choose various categories of cabs like
              Hatchback cars, Sedan and SUV.
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
            <h4>What are the best options available for cab booking?</h4>
            <p>
              While booking cabs online through Goibibo, you can choose the car
              based on your requirement and preferences. You can book Hatchback
              like Indica, Swift, Sedan like Dzire, Etios and SUV like Innova,
              Ertiga.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>What kind of cabs you can book from Goibibo?</h4>
            <p>
              You can book following kinds of cabs from Goibibo: airport cabs
              and intercity cabs / outstation cabs. You can book outstation cabs
              for both one-way transfers & round-trip transfers.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              {" "}
              How is the total cab fare calculated for an intercity cab service?
            </h4>
            <p>
              For outstation trips(intercity), mostly x kms included in fare.
              route wise charges will vary. Sometimes toll, state taxes might be
              included in the fare. certain cases, these won't be part of the
              original fare and user would have to pay at trip end whatever
              extra charges are applicable extra charges can be - Waiting
              charges Extra KMs charges Extra hours charges Night charges
              Airport Entry fee Airport Parking charges Toll charges State Tax
              Driver charges Parking charges
            </p>
          </div>
        </div>
      </div>
      {/* <div style={{margin:"50px",borderRadius:"20px"}}>
        <table style={{ borderCollapse: "collapse", width: "100%",borderRadius:"20px" }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Routes
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                  }}
                >
                  {item.category}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                  }}
                >
                  <ul style={{ paddingLeft: "16px" }}>
                    {item.routes.map((route, i) => (
                      <li key={i}>{route}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      {/* <div style={{margin:"40px"}}>
        <img src={image4}/>
      </div> */}
      <Cabsfooter/>
    </div>
  );
}
