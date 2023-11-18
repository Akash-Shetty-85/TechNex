import React from "react";
import HeroImage from "../../Assets/item-chair.png";
import Lamp from "../../Assets/item-tabelLamp.png";
import Table from "../../Assets/item-Teachair.png";
import Chair from "../../Assets/item-sofaChair.png";
const Hero = () => {
  const Collection = [
    {
      title: "Summer Collection",
      description: "Teco minimal Light",
      imageSrc: Lamp,
    },
    {
      title: "New collection",
      description: "Redox White Chair",
      imageSrc: Chair,
    },
    {
      title: "Trending Products",
      description: "Tecno Minimal Table",
      imageSrc: Table,
    },
  ];
  return (
    <>
      <div className="relative">
        <section className="bg-background mb-6 flex justify-around items-center p-4 md:p-11">
          <article className="text-left p-9 md:p-11">
            <h2 className="text-black font-semibold text-xl md:text-9xl">
              Hello! What would you like to buy?
            </h2>
            <p className="text-heading mt-8 font-thin text-xs md:text-lg">
              Search between millions of products from hundreds online shops.
              Our price comparison service helps you find the best deal on the
              market.
            </p>
            <button className="bg-primary text-background p-3 md:p-4 mt-5 rounded-2xl">
              Shop now
            </button>
          </article>
          <article className="w-full max-w-lg">
            <img src={HeroImage} alt="HeroImage" className="mx-auto" />
          </article>
        </section>
        <section className="absolute -bottom-1/4 left-0 w-full hidden sm:flex justify-center  mb-0">
          <div className="flex justify-center gap-5">
            {Collection.map((item, index) => (
              <article
                key={index}
                className="flex justify-center items-center bg-background p-5"
                style={{ border: "5px solid white" }}
              >
                <div className="">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <img
                  src={item.imageSrc}
                  alt={`Item ${index}`}
                  className="max-w-full h-auto"
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
