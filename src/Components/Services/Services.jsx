import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
        "Book Now & Always The Lowest Price Guarantee. We’re Available Live 24x7 to Help. Best Price Guarantee· 24/7 Customer Support· Free Cancellation"         
        },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
         "Book Now & Always The Lowest Price Guarantee. We’re Available Live 24x7 to Help. Best Price Guarantee· 24/7 Customer Support· Free Cancellation"      
        },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
        "Book Now & Always The Lowest Price Guarantee. We’re Available Live 24x7 to Help. Best Price Guarantee· 24/7 Customer Support· Free Cancellation"           
        },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
        "Book Now & Always The Lowest Price Guarantee. We’re Available Live 24x7 to Help. Best Price Guarantee· 24/7 Customer Support· Free Cancellation"      
        },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
