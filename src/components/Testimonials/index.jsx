import React from "react";
import "../../styles/Testimonials.css";
const testimonials = [
  {
    heading: "Transformed Our Business with Innovative Tech!",
    content:
      "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
    customer: "Mary Johnson",
    title: "CEO of Tech Craft Solutions",
    rating: 5,
    image: "/images/marry.png",
  },
  {
    heading: "Transformed Our Business with Innovative Tech!",
    content:
      "We owe a significant part of our success to Company Name. Their custom software solution  saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
    customer: "Mark Williams",
    title: "COO of Innovate Now Inc",
    image: "/images/mark.png",
    rating: 3,
  },
  {
    heading: "Transformed Our Business with Innovative Tech!",
    content:
      "We owe a significant part of our success to Company Name. Their custom software solution saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
    customer: "Mark Williams",
    title: "COO of Innovate Now Inc",
    rating: 4,
    image: "/images/Dovetail.png",
  },
  // More testimonials
];

function Testimonials() {
  return (
    <div className="container">
      <section className="testimonials">
        {/* <h2>Testimonials</h2> */}
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={testimonial.content}>
            {/* {[...Array(testimonial.rating)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="rating" />
              
            ))} */}
            <img src="images/Stars.png" alt="Stars"/>
            <br />
            <h3 style={{ fontWeight: "bold" }}>"{testimonial.heading}"</h3>
            <p style={{fontFamily:"Lato", color:"#9F9B9B"}}>" {testimonial.content} "</p>
            <br />
            <br />
            <hr />
            <div className="testimonial-info">
              <img src={testimonial.image} alt="test" />
              <div>
                <span style={{ fontWeight: "bold" }}>
                  {testimonial.customer}
                </span>
                <br />                
                <span style={{ color: "#D3D3D3" }}>{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="arrow-function">
        <img src="images/Frame-43857.png" alt="test" className="right-arrow"/>
        <img src="images/Frame-43858.png" alt="test"/>
        {/* <span className="previous round">&lt;</span>
        <span className="next round">&gt;</span> */}
      </div>
    </div>
  );
}

export { Testimonials };
