import React from "react";
import vase from "../../Assets/Item-PotteryVase.png";
import Rose from "../../Assets/Item-Rose-HoldBack.png";
import Flower from "../../Assets/Item-Flowe-vase.png";

const PopularItems = () => {
  const PopularItems = [
    {
      title: "Pottery Vase",
      price: "$100",
      stars: 5,
      image: vase,
    },
    {
      title: "Rose HoldBack",
      price: "$100",
      stars: 5,
      image: Rose,
    },
    {
      title: "Flower Vase",
      price: "$100",
      stars: 5,
      image: Flower,
    },
  ];

  return (
    <>
    <h1 className="flex justify-center p-7 text-lg md:text-5xl text-heading font-black">Popular items</h1>
    <div className="flex   gap-7 justify-center items-center flex-wrap mt-6">
      {PopularItems.map((item, index) => (
        <div
          key={index}
          className="bg-background rounded-md p-4 shadow-md text-center "
          style={{ width: "250px", height: "350px" }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-40 w-40 mx-auto mb-4 object-contain"
          />
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{item.price}</p>
            <span role="img" aria-label="star">
              {"⭐️".repeat(item.stars)}
            </span>
          </div>
          <p className="text-base font-semibold mt-2">{item.title}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default PopularItems;
