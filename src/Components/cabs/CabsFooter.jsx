import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Cabsfooter() {
    return (
      <>
          <div className="bottomLinks" style={{textAlign:"left"}}>
              
              <div>
                  <p style={{fontSize:"21px"}}>Our Products</p>
                  <div className="links">
                  <a href>Domestic Hotels</a>
                  <a href>International Hotels</a>
                  <a href>Domestic Flights</a>
                  <a href>International Flights</a>
                  <a href>Bus Booking</a>
                  <a href>Cab Booking</a>
                  <a href>Train Ticket Booking</a>
                  <a href>Destination Planner</a>
                  <a href>Goibibo Advertising Solutions</a>
                  </div>
              </div> 
              <div>
                  <p style={{fontSize:"21px"}}>Company</p>

                  <div className="links">
                    <Link to="/about"><a href>About US</a></Link>
                      
                      <a href>Terms & Conditions</a>
                      <a href>User Agreement</a>
                      <a href>Privacy</a>
                      <a href>Contact Us</a>
                      <a href>Careers</a>
                      <a href>Corporate Social Responsibility</a>
                      <a href>Goibibo on Mobile</a>
                      <a href>Goibibo TV Advertisement</a>
                      <a href>Technology@Goibibo</a>
                      <a href>FAQs</a>

                      </div>
              </div>   
              <div>
                  <p style={{fontSize:"21px"}}>Travel Resources</p>
                  <div className="links">
                      <a href>Popular Bus Routes</a>
                      <a href>Airport Cabs</a>
                      <a href>Hotels in India</a>
                      <a href>Popular Airlines</a>
                      <a href>Goibibo Offers</a>
                      <a href>International Airports</a>
                      <a href>City Airline Routes</a>
                      <a href>International Travel Guide</a>
                      </div>
              </div>
              <div>
                  <p style={{fontSize:"21px"}}>Top Cab Routes</p>
                  <div className="links">
                      <a href>Delhi To Jaipur Cab</a>
                      <a href>Delhi To Dehradun Cab</a>
                      <a href>Delhi To Haldwani Cab</a>
                      <a href>Dehradun To Delhi Cab</a>
                      <a href>Siliguri To Gangtok Cab</a>
                      <a href>Banglore to Mumbai Flight</a>
                      <a href>Mumbai To Pune Cab</a>
                      <a href>Bhubaneswar To Puri Cab</a>
                      </div>
              </div>
              <div>
                  <p style={{fontSize:"21px"}}>Top Airport Cab Routes</p>
                  <div className="links">
                      <a href>Cab From Bangalore Airport</a>
                      <a href>Cab To Ahmedabad Airport</a>
                      <a href>Goa Taxi Services</a>
                      <a href>Ahmedabad Taxi Services</a>
                      <a href>Cab From Patna Airportt</a>
                      <a href>Jaipur Taxi Services</a>
                      <a href>Mumbai Taxi Services</a>
                      <a href>Varanasi Taxi Services</a>
                      </div>
              </div>
              <div>
                  <p style={{fontSize:"21px"}}>More Links</p>
                  <div className="links">
                      <a href>Cheap Flights</a>
                      <a href>PNR Status</a>
                      <a href>Flight Schedule</a>
                      <a href>Go Stays</a>
                      <a href>Popular Bus Cities</a>
                      <a href>Airports in India</a>
                      <a href>COVID Special Trains</a>
                      <a href>Epass Assistance</a>
                      <a href>Advertise with Us</a>
                      </div>
              </div>
          </div>

          <div className="bottom1">
              
              <div>

              <div>
                 <h4 style={{fontSize:"17px"}}>Follow Us</h4> 
                  </div>
                  <div className="socialMedia" style={{justifyContent:"space-around"}}>
                  <FontAwesomeIcon icon={faTwitter}  style={{fontSize:"36px",color:"#1D9BF0",marginRight:"5px"}}/>
                  <FontAwesomeIcon icon={faFacebook}  style={{fontSize:"36px",color:"#0165E1",marginRight:"5px"}}/>
                  <FontAwesomeIcon icon={faYoutube}  style={{fontSize:"36px",color:"#FF0000"}}/>
                  </div>
                  </div>
              
              <div>
                  <div>
                 <h4>Book Tickets faster. Download our mobile Apps</h4> 
                  </div>

                  <div className="store">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqFW7-tDuj8VPfxQKfMBbtD6iyxIqss12FQ&usqp=CAU" alt="" />
                      
                      <img src="https://cdn.cultofmac.com/wp-content/uploads/2011/07/Available-on-the-App-Store-e1311024223942.png" alt="" />

                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeBHTXq3Y3sbO8-78-egjyFho_nBuSoL1FZAGr3Is5UMp2u7oz9XxxYtxbP8FUvEi1BY&usqp=CAU" alt="" />
                  </div>

              </div>
              
              <div className="paymentIcon">

                  <img src="https://seeklogo.com/images/V/VeriSign__Inc_-logo-4CE3D0451F-seeklogo.com.png" alt="" />

                  {/* <img src="https://s1.q4cdn.com/692158879/files/images/brand_imagery/AXP_BlueBoxLogo_EXTRALARGEscale_RGB_DIGITAL_1600x1600.png" alt="" /> */}

                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />

                  <img src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2000-2006.png" alt="" />

                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png" alt="" />

                  <img src="data:image/png;base64,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" alt="" />
                  
              </div>

          </div>

          <div className="bottom2">
              <img src="https://www.consumercomplaints.in/thumb.php?bname=1&src=ibibo-group.jpg&wmax=900&hmax=900&quality=90&nocrop=1" alt="" />
              
              {/* <img src="https://st1.bgr.in/wp-content/uploads/2018/08/goibibo-logo.jpg" alt="" /> */}

              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Redbus_logo.jpg" alt="" />
              {/* <p>Designed By Naveen Kumar A</p> */}
                  <p>© 2024 ibibogroup All rights reserved</p>
                  {/* <h6 style={{marginTop:20}}>Designed by Naveen Kumar A</h6> */}
          </div>
          {/* <p>Designed By Naveen Kumar A</p> */}

          </>
  )
}
