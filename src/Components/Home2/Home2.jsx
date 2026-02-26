import React from 'react'
import './Home2.css'
import resortImg from '../../assets/Section/resort1.jpg'
import resort77Img from '../../assets/Section/resort77.webp'
import resort66Img from '../../assets/Section/resort66.jpg'
import resort88Img from '../../assets/Section/resort88.webp'
import resort12Img from '../../assets/Section/resort12.jpg'
import re1Img from '../../assets/Section/re1.jpg'
import re2Img from '../../assets/Section/re2.jpg'
import re3Img from '../../assets/Section/re3.jpg'
import r8Img from '../../assets/Section/r8.jpg'
import r7Img from '../../assets/Section/r7.jpg'
import r4Img from '../../assets/Section/r4.jpg'
import { motion , AnimatePresence} from "framer-motion";
import { useState, useEffect } from "react";






const Home2 = () => {

  const [showDetails, setShowDetails] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  const splitText = (text, wordsPerLine = 8) => {
  const words = text.split(" ");
  const lines = [];

  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(" "));
  }

  return lines;
};


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};


 
 const detailsData = [
  {
    slides: [
      {
        num:"01",
        type: "imageText",
        img: resort77Img,
        title: "8 Bedroom Waterfront Villa with Luxurious Design",
        price: "6 578884744 AED",
        square: "3040m",
        room:"7",
        booking:"50%",
        date:"01.2025"

        
      },
      {
        type: "imageData",
        img: resort77Img,
        title: "8 Bedroom Waterfront Villa with Luxurious Design ",
        desc:"This luxury villa is thoughtfully designed to offer a calm and comfortable living experience. From the moment you enter, the spacious layout, high ceilings, and large windows create a bright and airy environment that feels open and welcoming.This luxury villa is thoughtfully designed to offer a calm and comfortable living experience.  ",
        location: "Palm Jumeirah, Dubai",
        developer:"Luxline Properties"
      },
      {
        type: "image",
        img: resort77Img
      }
    ]
  },
  {
    slides: [
      {
        num:"02",
        type: "imageText",
        img: resort12Img,
        title: "Grand Azure Crown of Exclusive Residences",
        price: "8 864378643 AED",
        square: "3010m",
        room:"6",
        booking:"50%",
        date:"01.2025"
      },
      {
        type: "imageData",
        img: resort12Img,
        title: " The Grand Azure Crown of Exclusive Residences",
        desc: "Step into an environment where sophistication meets comfort in perfect harmony. This residence offers a refined living experience built around space, privacy, and understated elegance. The interiors flow naturally, allowing life to unfold without interruption — whether hosting intimate gatherings or enjoying peaceful solitude very material, finish.",
        location: "Palm Jumeirah, Dubai",
        developer:"Luxline Properties"

      },
      {
        type: "image",
        img: resort12Img
      }
    ]
  },
  {
    slides: [
      {
        num:"03",
        type: "imageText",
        img: resort88Img,
        title: "Exclusive penthouse in the Palm Royale",
        price: "7 7468578654 AED",
        square: "4500m",
        room:"8",
        booking:"50%",
        date:"01.2025"
      },
      {
        type: "imageData",
        img: resort88Img,
        title: "Exclusive penthouse in the Palm Royale",
        desc: "Step into a world where luxury is not just seen, but deeply felt. From the moment you arrive, an air of quiet grandeur surrounds you — expansive spaces, flawless design, and an unmistakable sense of exclusivity. Sunlight pours through floor-to-ceiling windows, illuminating interiors that feel both majestic and effortlessly comfortable.",
        location: "Palm Jumeirah, Dubai",
        developer:"Luxline Properties"
      },
      {
        type: "image",
        img: resort12Img
      }
    ]
  },
  {
    slides: [
      {
        num:"04",
        type: "imageText",
        img: resort66Img,
        title: "Modern studio in Bluewaters ",
        price: "10 745643659 AED",
        square: "3300m",
        room:"5",
        booking:"50%",
        date:"01.2025"
      },
      {
        type: "imageData",
        img: resort66Img,
        title: "Modern studio in Bluewaters",
        desc: "A masterpiece of architectural excellence, this ultra-luxury residence is designed for those who seek timeless elegance and absolute comfort. Expansive living spaces, floor-to-ceiling windows, and refined interiors create an atmosphere of grandeur while maintaining a warm and inviting feel. Every detail reflects precision, quality, and exclusivity, offering residents a lifestyle that goes beyond ordinary living.",
        location: "Palm Jumeirah, Dubai",
        developer:"Luxline Properties"
      },
      {
        type: "image",
        img: resort88Img
      }
    ]
  }
];


  const slides = [
  {
    num:"01",
    img: resort77Img,
    title: "8 Bedroom WaterFront Villa",
    
  },
  {
    num:"02",
    img: resort12Img,
    title: "Grand Azure Crown of Exclusive Residences",
  },
  {
    num:"03",
    img: resort88Img,
    title: "Exclusive penthouse in the Palm Royale",
  },
  {
    num:"04",
    img: resort66Img,
    title:  "Modern studio in Bluewaters",
  }
];

const reviews = [
  {
    name: "Khushi Mehta",
    place: "Dubai Marina, January 2025",
    text: "From the first visit to final paperwork, everything felt transparent and stress-free. The team understood exactly what we were looking for and delivered beyond our vision.”",
    img: re3Img, 
  },
  {
    name: "Ayaan Malik",
    place: "Palm Jumeirah, December 2024",
    text: "Exceptional service with a strong focus on quality and trust. The property location, design, and overall finish were outstanding. Highly recommended for luxury buyers.",
    img: r7Img,
  },
  {
    name: "Sara Khan",
    place: "Downtown Dubai, November 2024",
    text: "The entire experience felt smooth and genuinely professional. From the first interaction to the final walkthrough, everything was handled with care and clarity. ",
    img: r8Img, 
  },
  {
    name: "Mahira Khan",
    place: "Downtown Dubai, November 2024",
    text: "Excellent service! The team helped me find a perfect rental home within my budget. The process was smooth and hassle-free. Highly recommended for anyone looking to rent or buy property. ",
    img: re3Img, 
  },
  {
    name: "Javed Shaikh",
    place: "Downtown Dubai, November 2024",
    text: "I sold my apartment faster than I expected. The support and guidance were very professional. They handled everything from listing to final deal smoothly. ",
    img: r4Img, 
  }
];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentReview((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  }, 3000); 

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <div className='home2-main'>

  {/* BUTTON ANIMATION */}
  <motion.div
    className='btn-mainn'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false }}
  >
    <button className='home2-btn'>Who we are</button>
  </motion.div>

  {/* TEXT ANIMATION */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: false }}
  >
    <p className='home2-para'>
      We specialize in exceptional luxury properties across Dubai's most iconic destinations.
      From waterfront villas to sky-high penthouses,
      <span className='highlight'>
        {" "}We deliver a personalized real estate experience defined by discretion, quality, and global standards.
      </span>
    </p>

    <div className='butt-main'><button className='aboutt'>About Us</button></div>
  </motion.div>



  

{/* {big box} */}

  <div className='box-main'>
    <div className='first-side'>
        <div className='first-img-block'>
          <img src={resortImg } className='lower-img'></img>
        </div>

        <div className='first-lower'>
          <div className='vision'>
            <h1>Our Vision</h1>
            <p>To redefine real estate by making property buying and selling smooth, secure, and transparent.</p>
          </div>
          <div className='mission'>
            <h1>
              Our Mission
            </h1>
            <p>Deliver personalized real estate solutions with trust, clarity, and expert market knowledge.</p>
          </div>
        </div>
    </div>


    <div className='second-side'>
      
      <div className='box-grid'>
        <div className='box'>
          <div className='arrow'>↗︎</div>
          <h1>1,200+</h1>
          <p>Project Complete</p>
        </div>
        <div className='box'>
          <div className='arrow'>↗︎</div>
          <h1>250+</h1>
          <p>Happy Clients</p>
        </div>
        <div className='box'>
          <div className='arrow'>↗︎</div>
          <h1>$10M</h1>
          <p>Project Value</p>
        </div>
        <div className='box'>
          <div className='arrow'>↗︎</div>
          <h1>90%</h1>
          <p>Client Retention Rate</p>
        </div>
      </div>


    </div>






  </div>

{/* {featured projects} */}

<div>
  <h1 className='projects'>Featured Projects</h1>
     

   <div className='card-main'>
     <div className='card-grid'>
     {slides.map((item, index) => (
  <div className='card' key={index}>

    {/* IMAGE ZOOM-OUT ON SCROLL */}
    <motion.img
  src={item.img}
  alt={item.title}
  className='card-img'
  initial={{ scale: 1.4 }}
  whileInView={{ scale: 1 }}
  transition={{
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1] // premium cubic-bezier
  }}
  viewport={{ once: false, amount: 0.35 }}
/>

     <div className="card-action">
    <button
  className="view-btn"
  onClick={() => {
    setShowDetails(true);
    setActiveCard(index);   // 🔥 CARD INDEX SAVE
    setCurrentSlide(0);
  }}
>
  View Details
</button>
  </div>

    <div className='content'>
      <h1 className='featured-head'>{item.num}</h1>
      <h2 className='featured-para'>{item.title}</h2>

      
    </div>

    

  </div>
))}

    </div>
   </div>
</div>


{/* {review} */}

<div>
  <div>
    <h1 className='review-head'>What Our Clients Say</h1>
  </div>

  <div className='lower-review'>
    <div className='re-imgg'>
      <div className='client-cover'>
        <h2 className='arrow'> → </h2>
      </div>
      <div className='client-cover'>
        <img src={re1Img} className='client'></img>
      </div>
      <div className='client-cover'>
         <img src={re2Img} className='client'></img>
      </div>
      <div className='client-cover'>
         <img src={re3Img} className='client'></img>
      </div>
      <div className='re-no'>125+ <span>Reviews</span></div>
    </div>


    <div className='re-content'>
      <div className='orange'>”</div>

      <div className="coment">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentReview}
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
    >
      {splitText(reviews[currentReview].text).map((line, index) => (
        <motion.p
          key={index}
          variants={item}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='coment-line'
        >
          {line}.
        </motion.p>
      ))}
    </motion.div>
  </AnimatePresence>
</div>


    </div>

  </div>
</div>


<div className='line'></div>
<div className='client-neeche'>
  <div className='client-cover'>
    <motion.img 
    key={currentReview}  
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    src={reviews[currentReview].img} className='client-down'></motion.img>
  </div>
  <motion.div
  key={currentReview + "-text"}   // 🔥 separate key
  className='client-name'
  initial={{ opacity: 0, x: 40 }}   // right side se
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
>
  {reviews[currentReview].name} <br />
  <span>{reviews[currentReview].place}</span>
</motion.div>
</div>


{showDetails && (
  <div className="details-box">

    {/* CLOSE BUTTON */}
    <button
      className="close-btn"
      onClick={() => {
        setShowDetails(false);
        setCurrentSlide(0);
      }}
    >
      ✕
    </button>

    {/* SLIDER WINDOW */}
    <div className="slider-window large">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {detailsData[activeCard].slides.map((slide, index) => (
  <div className="detail-slide" key={index}>

  {slide.type === "imageText" && (
    <div className="slide-img-text">
      <img src={slide.img} alt="" className="slide-img" />
      <div className="slide-text">
        <h1 className='slide-numm'>{slide.num}</h1>
        <div className='slide-line'></div>
       <div className='slide-content'>
         <h2 className='slide-text-first'>{slide.title}</h2>
        <div className='slide-grid'>
          <div className='slide-boxx'>
            <p >Square</p>
            <h1>{slide.square}</h1>
          </div>
          <div className='slide-boxx'>
            <p>No. of room</p>
            <h1>{slide.room}</h1>
          </div>
          <div className='slide-boxx'>
            <p>When booking</p>
            <h1>{slide.booking}</h1>
          </div>
          <div className='slide-boxx'>
            <p>Delivery Date</p>
            <h1>{slide.date}</h1>
          </div>

        </div>
        <p className='amount'> <span className='price'>Price </span>{slide.price}</p>

        <button className='slide-buttonn'>Contact Us</button>
       </div>
      </div>
    </div>
  )}



  {slide.type === "imageData" && (
    <div className="slide-only-text">
      <div className='slide2-content'>
         <div className="second-slide-upper">
                    
                    <div><img src={slide.img} className="chota-img"/></div>
                       <div>
                        <p>Developer</p>
                        <h3>{slide.developer}</h3>
                       </div>

                      <div  className="second-slide-line"></div>

                      <div>
                        <p>Location</p>
                        <h3>{slide.location}</h3>
                      </div>
                  
                    
                  </div>
       <h2 className='slide2-title'>{slide.title}</h2>
      <p className='slide2-para'>{slide.desc}</p> </div>
      <div className='slide2-image'><img src={slide.img}></img></div>
      
    </div>
  )}

{slide.type === "image" && (
  <div className="slide-only-img">
    <div className="features-grid">

      {/* Column 1 */}
      <div className="grid-col">
        <p><i className="fa-solid fa-person-shelter"></i> Balcony <span className="check">✔</span></p>
        <p><i className="fa-solid fa-person-swimming"></i> Pool <span className="check">✔</span></p>
        <p><i className="fa-solid fa-person-running"></i> Treadmills <span className="check">✔</span></p>
        <p><i className="fa-solid fa-shop"></i> Boutiques and shops <span className="check">✔</span></p>
        <p><i className="fa-solid fa-water"></i> Near the sea <span className="check">✔</span></p>
        <p><i className="fa-solid fa-child"></i> Children playground <span className="check">✔</span></p>
        <p><i className="fa-solid fa-person-swimming"></i> Children's swimming pool <span className="check">✔</span></p>
        <p><i className="fa-solid fa-school"></i> Kindergarten <span className="check">✔</span></p>
      </div>

      {/* Column 2 */}
      <div className="grid-col">
        <p><i className="fa-solid fa-tree"></i> Green spaces <span className="check">✔</span></p>
        <p><i className="fa-solid fa-fire"></i> Barbecue area <span className="check">✔</span></p>
        <p><i className="fa-solid fa-mug-hot"></i> Cafes and restaurants <span className="check">✔</span></p>
        <p><i className="fa-solid fa-film"></i> Cinema <span className="check">✔</span></p>
        <p><i className="fa-solid fa-wind"></i> Air conditioner <span className="check">✔</span></p>
        <p><i className="fa-solid fa-water"></i> Sea <span className="check">✔</span></p>
        <p><i className="fa-solid fa-square-parking"></i> Parking space <span className="check">✔</span></p>
        <p><i className="fa-solid fa-dumbbell"></i> Fitness center and gym <span className="check">✔</span></p>
      </div>

    </div>
  </div>
)}

</div>

))}

      </div>
    </div>

    {/* CONTROLS */}
    <div className="slider-controls">
      <button
        className="slides-btn"
        disabled={currentSlide === 0}
        onClick={() => setCurrentSlide(currentSlide - 1)}
      >
        ←
      </button>

      <button
        className="slides-btn"
        disabled={currentSlide === detailsData[activeCard].slides.length - 1}

        onClick={() => setCurrentSlide(currentSlide + 1)}
      >
        →
      </button>
    </div>

  </div>
)}





  </div>
    </div>
  )
}

export default Home2
