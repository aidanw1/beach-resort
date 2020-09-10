import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const servicesItems = [
  {
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
];

const serviceItem = servicesItems.map((item, index) => {
  return (
    <article key={index} className="service">
      <span>{item.icon}</span>
      <h6>{item.title}</h6>
      <p>{item.info}</p>
    </article>
  );
});
export default function Services() {
  const [services, setServices] = useState(servicesItems);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">{serviceItem}</div>
    </section>
  );
}
