import React, { useEffect, useState } from "react";
import "./Services.css";
import axios from "axios";

const Services = () => {
  const [properties, setProperties] = useState([]);
  const [purpose, setPurpose] = useState("All");

  // 🔥 FILTER STATES
  const [showFilter, setShowFilter] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [location, setLocation] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  // SLIDER
  const [showDetails, setShowDetails] = useState(false);
const [currentSlide, setCurrentSlide] = useState(0);
const [selectedProperty, setSelectedProperty] = useState(null);



  useEffect(() => {
    axios
      .get("http://localhost:4000/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);

  // 🔥 FINAL FILTER LOGIC
  const filteredData = properties.filter(item => {
    if (purpose !== "All" && item.purpose !== purpose) return false;

    if (location !== "All" && item.location !== location) return false;

    if (priceRange !== "All") {
      const price = Number(item.price.replace(/[^0-9]/g, ""));

      if (priceRange === "10000000+") return price >= 10000000;

      const [min, max] = priceRange.split("-").map(Number);
      return price >= min && price <= max;
    }

    return true;
  });

  return (
    <div className="services-page">

      {/* 🔥 TOP BAR — SAME UI */}
      <div className="filter-bar">
        <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
          Filter
        </button>

        <button onClick={() => setPurpose("Buy")}>Buy</button>
        <button onClick={() => setPurpose("Rent")}>Rent</button>
        <button onClick={() => setPurpose("Sell")}>Sell</button>
      </div>

      {/* 🔥 FILTER BOX */}
      {showFilter && (
        <div className="filter-box">

          {/* LOCATION */}
          <div className="filter-item">
            <div
              className="filter-heading"
              onClick={() =>
                setActiveDropdown(activeDropdown === "location" ? null : "location")
              }
            >
              Location
            </div>

            {activeDropdown === "location" && (
              <div className="filter-options">
                {[
                  "All",
                  "Dubai Marina",
                  "Palm Jumeirah",
                  "Downtown Dubai",
                  "Business Bay"
                ].map(loc => (
                  <div
                    key={loc}
                    className={`option ${location === loc ? "active" : ""}`}
                    onClick={() => setLocation(loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PRICE */}
          <div className="filter-item">
            <div
              className="filter-heading"
              onClick={() =>
                setActiveDropdown(activeDropdown === "price" ? null : "price")
              }
            >
              Price
            </div>

            {activeDropdown === "price" && (
              <div className="filter-options">
                <div onClick={() => setPriceRange("All")}>All</div>
                <div onClick={() => setPriceRange("10000000+")}>10 000 000+ AED</div>
                <div onClick={() => setPriceRange("25000000-5000000")}>2 500 000 – 5 000 000 AED</div>
                <div onClick={() => setPriceRange("500000-1000000")}>500 000AED - 1 000 000 AED–</div>
                <div onClick={() => setPriceRange("0-250000")}>up to 250 000 AED</div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* 🔥 CARDS */}
      <div className="property-grid">
  {filteredData.map(item => (
    <div
      className="property-card"
      key={item.id}
      onClick={() => {
        setSelectedProperty(item);
        
        setCurrentSlide(0);
      }}
    >
      <img src={item.image} alt={item.title} />
      <div className="card-content">
        <h3>{item.price}</h3>
        <p>{item.title} ({item.location})</p>
        <h4>{item.area} - {item.bedrooms} Bedroom . {item.bathrooms} Bathroom</h4>
      </div>
    </div>
  ))}
</div>



{selectedProperty && (
  <div className="details-box">

    <button
      className="close-btn"
      onClick={() => {
        setShowDetails(false);
        setCurrentSlide(0);
        setSelectedProperty(null);
      }}
    >
      ✕
    </button>

    <div className="slider-window large">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {selectedProperty.slides.map((slide, index) => (
          <div className="detail-slide" key={index}>

            {slide.type === "imageText" && (
              <div className="slide-img-text">
                <img src={slide.image} className="slide-img" />
                <div className="slide-text">
                  <h1 className="slide-numm">{slide.num}</h1>
                  <div className="slide-line"></div>

                  <div className="slide-content">
                    <h2 className="slide-text-first">{slide.title}</h2>

                    <div className="slide-grid">
                      <div className="slide-boxx">
                        <p>Square</p>
                        <h1>{slide.square}</h1>
                      </div>
                      <div className="slide-boxx">
                        <p>No. of room</p>
                        <h1>{slide.room}</h1>
                      </div>
                      <div className="slide-boxx">
                        <p>When booking</p>
                        <h1>{slide.booking}</h1>
                      </div>
                      <div className="slide-boxx">
                        <p>Delivery Date</p>
                        <h1>{slide.date}</h1>
                      </div>
                    </div>

                    <p className="amount">
                      <span className="price">Price </span>{slide.price}
                    </p>

                    <button className="slide-buttonn">Contact Us</button>
                  </div>
                </div>
              </div>
            )}

            {slide.type === "imageData" && (
              <div className="slide-only-text">
                <div className="slide2-content">
                  <div className="second-slide-upper">
                    
                    <div><img src={slide.image} className="chota-img"/></div>
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
                  <h2 className="slide2-title">{slide.title}</h2>
                  <p className="slide2-para">{slide.desc}</p>
                </div>
                <div className="slide2-image">
                  <img src={slide.image} />
                </div>
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
        disabled={currentSlide === selectedProperty.slides.length - 1}
        onClick={() => setCurrentSlide(currentSlide + 1)}
      >
        →
      </button>
    </div>

  </div>
)}







    </div>
  );
};

export default Services;