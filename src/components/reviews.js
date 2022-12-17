import React from "react";
import "./reviews.css"
import arrow from '../assets/Vector.png';


function Reviews() {
  const userReviews = [
    {
      name: "Adetuwo Israel",
      image: "https://images.pexels.com/photos/12577426/pexels-photo-12577426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment:
        "Topaz Artistry is very creative, I tried buying one of their adire and it’s came out so beautiful, it was a gift to my girlfriend, she liked it!",
    },

    {
      name: "Patricia Patt",
      image: "https://images.pexels.com/photos/10011404/pexels-photo-10011404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "I really enjoy the experience shopping at Topaz Artistry, their customer experience and adire is 10/10!"
    },

    {
        name: "Stella Brown",
        image: "https://images.pexels.com/photos/14610789/pexels-photo-14610789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment: "Get me Topaz Adire, the very besttt in town! Y’all should shop at Topaz!"
    }
  ];

  return (
    <section className="overall-reviews-container">
      <h2>What our customers are saying</h2>

      <section className="reviews-container">
        {userReviews.map ((comments, i) => (
            <div className="review-card">
                <section className="map-header">
                    <img src={comments.image}/>
                    <p className="reviewer-name">{comments.name}</p>
                </section>
                <p className="individual-comment">{comments.comment}</p>
            </div>
        ))}
                <img className="read-more-arrow" src={arrow} />

      </section>
    </section>
  );
}

export default Reviews;
