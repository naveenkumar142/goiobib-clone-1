import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div style={{ width: '40%', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>About Us</h2>
        <p>Goibibo is India’s leading online travel booking brand providing a range of choices for hotels, flights, trains, buses, and cars for travelers. Our core value differentiator is the most trusted user experience, whether it's the quickest search and booking, fastest payments, settlement, or refund processes. Through GoStays, our customers enjoy a standardized stay experience at certified hotel properties. With industry-first virtual travel booking currency GoCash and travel social network, GoCash+ Rewards – GoIbibo is the number one choice for new India on the move.</p>
        <div style={{ marginTop: '20px' }}>
          <h3>Management Team</h3>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src="https://images.yourstory.com/cs/images/people/Khanna-1596614900957.jpg" alt="Ankit Khanna" style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }} />
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '18px' }}>Ankit Khanna</p>
              <p style={{ marginBottom: '5px', color: '#666' }}>Chief Product Officer – Strategic Initiatives & New Business</p>
              <p>Ankit brings in 15 years of rich experience across industries. Previously, he was the Head of Product at CareemPAY based out of UAE.</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://www.yourtechstory.com/wp-content/uploads/2019/10/Goibibo-founder-1.jpg" alt="Parikshit Choudhry" style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }} />
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '18px' }}>Parikshit Choudhry</p>
              <p style={{ marginBottom: '5px', color: '#666' }}>Chief Business Officer – Ground Transport</p>
              <p>Parikshit Choudhury is the Chief Business Officer – Ground Transport. In his current role, he is responsible for driving growth and revenue for the company’s ground transport category including cabs, metro and rail. Prior to this, he was spearheading the company’s domestic hotel supply category.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '60%', overflowY: 'auto', padding: '20px', backgroundColor: '#fff' }}>
        <h2 style={{fontSize:"21px"}}>History of Goibibo</h2>
        <p>Founded in 2009 by Ashish Kashyap, Goibibo started its journey as a small online travel agency. Over the years, it has grown into one of India's leading travel booking platforms, revolutionizing the way people plan and book their travel.
        Ibibo Group is an online Indian travel organisation founded in January 2007 by Ashish Kashyap. The company is a subsidiary of MakeMyTrip (MMT) Limited, which owns a 100% stake in Ibibo Group.

The group owns the B2C online travel aggregator Goibibo, and online bus ticketing platform RedBus.in.

On 31 January 2017, MakeMyTrip (MMT) acquired the ibibo Group by purchasing 100% equity interest in the ibibo Group from MIH Internet, an indirect subsidiary of Naspers, pursuant to a Transaction Agreement dated 18 October 2016.
        </p>
        <div style={{ marginTop: '20px' }}>
          <h2 style={{fontSize:"21px"}}>Why Choose Us?</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>Wide Range of Choices:</strong> Find the perfect option for your trip with our wide range of choices for hotels, flights, trains, buses, and cars.</li>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>User-Friendly Interface:</strong> Our user-friendly interface ensures a smooth and hassle-free booking experience, saving you time and effort.</li>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>Exclusive Discounts:</strong> Enjoy exclusive discounts and savings on your bookings with our unique virtual travel booking currency GoCash.</li>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>Rewards Program:</strong> Earn points on every booking with our GoCash+ Rewards program, which you can redeem for exciting rewards and discounts.</li>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>Efficient Customer Service:</strong> Our dedicated customer service team is available 24/7 to assist you with any queries or concerns.</li>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>Secure Payment Methods:</strong> We prioritize the security of your transactions and offer a variety of secure payment methods for your convenience.</li>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>Trusted User Reviews:</strong> Benefit from genuine user reviews and ratings to make informed decisions about your bookings.</li>
            <li style={{ marginBottom: '20px', lineHeight: '1.5' }}><strong>•</strong> <strong>Industry-leading Technology:</strong> We leverage cutting-edge technology to provide you with the best possible booking experience.</li>
          </ul>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2 style={{fontSize:"21px"}}>Contact Us</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><strong>Email:</strong> info@goibibo.com</li>
            <li style={{ marginBottom: '10px' }}><strong>Phone:</strong> 1800-123-4567</li>
            <li style={{ marginBottom: '10px' }}><strong>For business inquiries:</strong></li>
            <li style={{ marginBottom: '10px' }}><strong>Email:</strong> business@goibibo.com</li>
            <li style={{ marginBottom: '10px' }}><strong>Phone:</strong> 1800-987-6543</li>
            <li style={{ marginBottom: '10px' }}><strong>Headquarters:</strong></li>
            <li style={{ marginBottom: '10px' }}>123 Main Street,Banglore,India</li>
            <li style={{ marginBottom: '10px' }}><strong>Working Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
