import React from "react";
import search from "../../Assets/SearchLogo.png";
import compare from "../../Assets/Compare.png";
import withdarw from "../../Assets/WithDraw.png";
import Cashaback from "../../Assets/CashBack.png";
import Shop from "../../Assets/Shop.png";

const WorkSection = () => {
  const cards = [
    {
      title: "Search",
      body: "By typing a keyword or scanning the product barcode",
      image: search,
    },
    {
      title: "Compare",
      body: "By typing a keyword or scanning the product barcode",
      image: compare,
    },
    {
      title: "Receive withdraw",
      body: "By typing a keyword or scanning the product barcode",
      image: withdarw,
    },
    {
      title: "Cashback",
      body: "By typing a keyword or scanning the product barcode",
      image: Cashaback,
    },
    {
      title: "Shop",
      body: "By typing a keyword or scanning the product barcode",
      image: Shop,
    },
  ];

  return (
    <>
      <h1 className=" flex justify-center text-5xl text-heading font-black m-5 md:mt-64 lg:mt-52">
        How it works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-center  px-24">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-md p-4 shadow-md text-center h-10rem w-10rem ${
              index < 2 ? "md:col-span-1" : "md:col-span-1 lg:col-span-1"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-24 w-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkSection;
