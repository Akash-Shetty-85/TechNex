import React from "react";
import bottle from "../../Assets/Interior-collection.png";
const Collection = () => {
  return (
    <div className="flex justify-around">
      <section className="flex justify-center items-center bg-primary lg:w-3/5 w-full p-6 rounded-2xl">
        <article className="text-left  pr-8 bg-primary mt-8">
          <p className="font-bold md:text-3xl text-sm text-background">
            50% OFF Interior Collection
          </p>
          <p className="text-background md:text-sm text-xs mt-4">
            Free shipping over $125 for international orders
          </p>
          <button className="mt-5 bg-background text-primary p-3 rounded-xl font-semibold">
            Discover now
          </button>
        </article>
        <article>
          <img
            src={bottle}
            alt="offer section"
            className="max-w-full h-auto"
            width={150}
          />
        </article>
      </section>
    </div>
  );
};

export default Collection;
