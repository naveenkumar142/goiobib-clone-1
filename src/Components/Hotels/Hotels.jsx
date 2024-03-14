import React from "react";
import "../Bus/Bus.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import styles from "../Bus/BusStyle.module.css";
import SScreen from "./Screenshot 2024-03-04 203422.png";
import SScreen1 from "./Screenshot 2024-03-04 205956.png";
import SScreen2 from "./Screenshot 2024-03-04 210524.png";
import imagee44 from "./Screenshot 2024-03-05 093138.png";
import { useState } from "react";
import { useEffect } from "react";
import Hotelfooter from "../HotelFooter/FlightFooter";
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
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  };
  
  const imageBoxStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  };
  
  const imageWrapperStyle = {
    overflow: 'hidden',
    borderRadius: '10px',
  };
  
  const imageStyle = {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
  };
  
  const headingStyle = {
    margin: '10px 0',
    fontSize: '1.2rem',
    color: '#333',
    textAlign: 'center',
  };
  return (
    <div className={styles.mainDiv}>
      <div className="Home">
        <div className="background-col"></div>
        <div className="background-col2"></div>
        <div className="bus-headline">
          <h2 className="bus-headline-h1">Book Hotel & Home Stay</h2>

          <div className="destination-crousal-div">
            <div className="destination">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  fontWeight: "bold",
                  justifyContent: "space-around",
                  textAlign: "left",
                  marginRight: "0px",
                }}
              >
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  India
                </label>

                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  International
                </label>
              </div>
              <div>
                <div className="from-section">
                  <label>Where</label>
                  <input type="text" name="" className="input-from" placeholder="Blue Moon Residency" style={{fontSize:"18px"}} />
                </div>
              </div>
              <div>
                <div className="from-section">
                  <label>Guests&Rooms</label>
                  <input type="text" name="" className="input-from" placeholder="2 Adults  | 1 Room " style={{fontSize:"18px"}} />
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
                    Introducing social Distance in All Hotels. <a href>know more</a>
                  </span>
                </div>
              </div>
              <div className="div-sersch-bus">
                <button className="btn-search-bus">SEARCH Hotels</button>
              </div>
            </div>

            <div className="rightSection">
              <div className="rightSection1">
                <img
                  src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1687334807323/goibibo-hotels-promo-codes%20.jpg"
                  alt=""
                />
              </div>

              <div className="rightSection2">
                <div className="r1">
                  <img
                    src="https://blog.axisrooms.com/content/images/wordpress/2018/10/NOTIFICATION-V2-700X400.jpg"
                    alt=""
                  />
                </div>

                <div className="r2">
                  <img
                    src="https://cdn.grabon.in/gograbon/images/merchant/1662374830078.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ marginLeft: "40px", marginBottom: "20px",fontSize:"21px"}}>
          Deal of the day
        </h2>
        <div
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            marginBottom: "30px",
          }}
        >
          <img src={imagee44} />
        </div>
      </div>
      <h2 style={{ marginLeft: "20px", marginBottom: "20px",fontSize:"21px" }}>
        Popular Destination
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://elevenmyanmar.com/sites/news-eleven.com/files/news-images/bali01.jpg"
          alt="Bali"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Bali</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://img.ev.mu/images/portfolio/pays/49/1605x1070/855313.jpg"
          alt="Costa Rica"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Costa Rica</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://www.schengenvisainfo.com/news/wp-content/uploads/2022/02/Barcelona-Spain.-Nighttime-top-view-at-Spanish-Square.jpg"
          alt="Spain"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Spain</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://wallpapercave.com/wp/wp4483177.jpg"
          alt="Maldives"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Maldives</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="http://tripnstay.com/wp-content/uploads/2018/03/lakshwadeep.jpg"
          alt="Lakshadweep"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Lakshadweep</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://1.bp.blogspot.com/-E0rD8Dgg6Zw/W3GFIYj1-qI/AAAAAAAAAHc/CYwU0inTt_k7Pb1TngiuSj7NxTcANJxjQCLcBGAs/s1600/Andaman%2BLarge01449641394.JPG"
          alt="Andaman and Nicobar Islands"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Andaman and Nicobar Islands</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://benoycdn.azureedge.net/files/projects/city-walk/_largeImage/City-Walk-Dubai-UAE-Benoy-1.jpg"
          alt="Dubai"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Dubai</h3>
        {/* <p style={costStyle}>cost per head: ${image.cost}</p> */}
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="http://valueadzvisas.com/blogpic/large/153062049515_lugares_para_visitar_en_australia_508321538_1393x928.jpg"
          alt="Australia"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Australia</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://www.planetware.com/wpimages/2020/01/sri-lanka-best-places-to-visit-kandy.jpg"
          alt="Sri Lanka"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Sri Lanka</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://uploads.lebonbon.fr/source/2020/november/bastillE1.jpg"
          alt="Paris"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Paris</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg"
          alt="Rome"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Rome</h3>
      </div>
      <div className="image-box" style={imageBoxStyle}>
        <img
          src="https://loving-tokyo.com/en/wp-content/uploads/2019/05/tokyo-attractions-190521134419001-1600x800.jpg"
          alt="Tokyo"
          style={imageStyle}
        />
        <h3 style={headingStyle}>Tokyo</h3>
      </div>
    </div>
      <div style={{ marginBottom: "20px", marginLeft: "20px" }}>
        <div
          style={{
            textAlign: "left",
            marginLeft: "50px",
            marginRight: "40px",
            marginTop: "10px",
          }}
        >
          <div style={{ marginLeft: "-19px", paddingBottom: "10px",marginTop:"30px" }}>
            <h2 style={{ justifyContent: "left",fontSize:"21px"}}>Hotel Booking FAQs</h2>
          </div>
        </div>
        <div
          style={{
            // margin: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h4>What are the advantages of online hotel booking?</h4>
            <p>
              Online hotel booking comes with great advantages for travellers.
              You can book hotels in India or even International hotels sitting
              at home in few simple clicks You can quickly check reviews,
              images, ratings and amenities of all the hotels at one place and
              compare hotels to suit your preferences for hotel booking You can
              avail great discounts and offers on hotel booking through Goibibo
              Avoiding the last-minute hotel search in an unknown city with high
              prices, you can book a suitable stay for yourself at reasonable
              prices online You can avail attractive deals and cashback offers
              on digital payment options like credit cards, debit cards and
              e-wallets You can customize your hotel to stay with plenty of room
              plans available You can read the hotel policies online and
              experience a hassle-free stay
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>When should I book to get best flight ticket prices? </h4>
            <p>
              For best flight ticket prices and flight ticket offers, it is
              recommended to book at least 3 to 4 weeks in advance for domestic
              air tickets. For international flight ticket it is recommended to
              book at least 7 to 8 weeks in advance, so that you can get the
              best flight ticket prices.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              In current situation of Corona pandemic (Covid 19), where can we
              find safe and well sanitized hotels?
            </h4>
            <p>
              Goibibo in collaboration with various hotels have introduced
              goSafe Hotels, a collection of well sanitized hotels with trained
              staff who follow safe Practices at all times. These hotels have a
              Safe and Hygienic environment with daily disinfection of rooms,
              fresh room linens, regular sanitization of common areas, safe
              kitchen practices, maintenance of social distancing, guest and
              staff temperature check. The staff is trained on safe Practices
              and equipped with masks and gloves at all times. Some of the
              popular cities where you can find these safe and hygienic hotels
              are Goa, Mumbai, Delhi, Bangalore and many more. You can choose
              from wide variety of these well sanitised and clean hotels on
              Goibibo at best prices.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              {" "}
              What are the popular Indian cities which are frequently visited by
              people?{" "}
            </h4>
            <p>
              India has been popular among visitors as it offers wide spectrum
              of experiences and landscapes. People travel in India for 3 main
              purposes: Business, Leisure & Religious. Some of the popular
              Indian cities which visitors travel for Business purpose are
              Mumbai, Delhi, Bangalore, Ahmedabad, Kolkata, Pune and Hyderabad.
              These cities are pillars of India for all economic activities.
              These cities have plethora of Hotels which are suitable for all
              kind of business travellers looking for Hotel Booking. You can
              easily book Hotels in Delhi, Hotels in Mumbai, Hotels in
              Bangalore, Hotels in Pune, Hotels in Hyderabad and in many other
              cities from Goibibo. Similarly, there are various Indian cities
              which are famous for Leisure travel. Popular ones are Goa, Jaipur,
              Manali, Pondicherry, Ooty and Nainital. These cities also have
              wide variety of Hotel and alternate accommodation options for
              Couples and families. Goibibo is best platform to book Hotels in
              Goa, Hotels in Jaipur, Hotels in Manali, Hotels in Pondicherry,
              Hotels in Nainital and many such leisure cities. India being a
              country of diversified culture and religions, has many popular
              religious places. Some of these popular cities where visitors
              travel for religious purpose are Katra, Shirdi, Amritsar, Tirupati
              and Puri. These cities have also huge options in accommodation,
              right from budget category hotels to Luxury Hotels. Goibibo makes
              online hotel booking convenient for booking Hotels in Katra,
              Hotels in Shirdi, Hotels in Amritsar, Hotels in Tirupati, Hotels
              in Puri and many other such cities in India.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              Which Indian Hotels are popular among travellers for Online Hotel
              Booking?{" "}
            </h4>
            <p>
              India being a traveller paradise attracts visitors from all over
              the world and also has plethora of hotels which are suitable for
              all kind of tourists. One can find these wide variety of hotels on
              Goibibo platform, as it has the largest number of Indian hotels
              available for Online Hotel Booking. Some of the popular Indian
              hotels in business cities like Mumbai, Delhi, Hyderabad and
              Chennai are The Taj Mahal Hotel Mumbai, Grand Hyatt Mumbai, The
              Lalit Mumbai, Trident Mumbai, Le Meridien Delhi, Hotel Taj Palace
              Delhi, The Lalit Delhi, Novotel Hyderabad, Park Hyatt Hyderabad,
              Hyatt Regency Chennai and The Hilton Chennai. These hotels are
              preferred by not just business travellers but by all kind of
              visitors who prefer luxury stay. Many visitors travel to India for
              leisure purpose hence they prefer Indian cities like Goa, Jaipur,
              Udaipur, Coorg and many other such cities. Some of the popular
              hotels in these leisure cities are Grand Hyatt Goa, W Goa, The
              Leela Goa, Taj Exotica Goa, Fairmont Jaipur, Marriott Jaipur,
              Radisson Blu Jaipur, The Leela Palace Udaipur, Taj Lake Palace
              Udaipur, The Oberoi Udaivilas, The Tamara Coorg and Heritage
              Resort Coorg. One can book all these hotels online at best prices
              on Goibibo with the convenience of paying through multiple pay
              modes including Pay at Hotel option.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              What are the popular International Cities for Online Hotel
              Booking?
            </h4>
            <p>
              There are various cities in the World which are famous among
              travellers. Some of these popular International cities which see a
              lot of demand in Online Hotel Booking business are Dubai,
              Singapore, Phuket, Maldives, Paris, London and Bali. Goibibo has
              huge number of hotels on its platform available for booking Hotels
              in Dubai, Hotels in Singapore, Hotels in Phuket, Hotels in
              Maldives, Hotels in Paris, Hotels in Bali and even many more
              International cities. Customers can easily book these hotels on
              Goibibo with the convenience of multiple payment options. Goibibo
              being a leading travel website in India has the largest number of
              hotels on its platform. Not just great prices and great offers,
              but Goibibo also has the largest collection of hotel reviews,
              which is very useful in terms of choosing a right hotel for your
              stay. Goibibo makes online hotel booking even more convenient by
              offering Free Cancellation, Instant Refund and 24 hour customer
              support.
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <h4>
              Where can I check discounts and offers on Goibibo for hotels
              booking?
            </h4>
            <p>
              There are numerous discount offers, promo codes and deals on
              online hotel booking through Goibibo. Although, all of these are
              valid for a limited period, hence, it is advised to check the
              current offers before booking the hotel. The current offers are
              displayed on the hotel page of the Goibibo website and app.
            </p>
          </div>
        </div>
      </div>
      <Hotelfooter />
    </div>
  );
}
