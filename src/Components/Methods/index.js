import React from "react";
import paypal from "./Methods_logos/paypal.png";
import visa from "./Methods_logos/visa.png";
import masterCard from "./Methods_logos/mastercard.png";
import amzone from "./Methods_logos/amzon.png";
import moneyGram from "./Methods_logos/money.png";

const Methods = () => {
  const loga_images = [
    {
      image: paypal,
      alt: "paypal",
    },
    {
      image: visa,
      alt: "visa",
    },
    {
      image: masterCard,
      alt: "masterCard",
    },{
      image: amzone,
      alt: "amzone",
    },
    {
      image: moneyGram,
      alt: "moneyGram",
    },
  ];
  return (
    <div className="m-6 p-7">
      <h1 className="flex justify-center p-7 text-lg md:text-5xl text-heading font-black">Using Convenient Methods</h1>
      <div className="flex justify-around">
        {loga_images.map((item) => (
          <img src={item.image} alt={item.alt}  className="w-1/4 md:w-24"/>
        ))}
      </div>
    </div>
  );
};

export default Methods;
