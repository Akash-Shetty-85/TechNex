import React from "react";
import { useState } from "react";
import FaceBooklogo from "../../Assets/logos/fb-logo.png";
import Twitter from "../../Assets/logos/twitter.png";
import GooglePlus from "../../Assets/logos/google-plus.png";
import Linkdin from "../../Assets/logos/linkedin.png";

const Footer = () => {
  const [activeLogo, setActiveLogo] = useState("Facebook");

  const handleLogoClick = (logoName) => {
    setActiveLogo(logoName);
    console.log("clicked");
  };

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 gap-4 md:grid-cols-5">
        {/* Contact */}
        <section className="col-span-1 md:col-span-2">
          <h3 className="text-xs md:text-xl font-semibold">Contact</h3>
          <p className="text-heading font-light text-xs my-3">
            Shopico, New Jersey, USA
          </p>
          <p className="text-heading font-light text-xs my-3">
            aakashvshetty@gmail.com
          </p>
          <p className="text-heading font-light text-xs my-3">
            +91 7676 479251
          </p>

          {/* Logos */}
          <section className="flex gap-3 mt-4 md:mt-6">
            <img
              src={FaceBooklogo}
              alt="Facebook"
              width="20"
              height="25"
              className={` ${
                activeLogo === "Facebook"
                  ? "bg-primary text-background rounded-full "
                  : ""
              } cursor-pointer`}
              onClick={() => handleLogoClick("Facebook")}
            />
            <img
              src={Twitter}
              alt="Twitter"
              width="20"
              height="25"
              className={`${
                activeLogo === "Twitter"
                  ? "bg-primary text-background rounded-full "
                  : ""
              } cursor-pointer`}
              onClick={() => handleLogoClick("Twitter")}
            />
            <img
              src={GooglePlus}
              alt="Google"
              width="20"
              height="25"
              className={`${
                activeLogo === "Google"
                  ? "bg-primary text-background rounded-full "
                  : ""
              } cursor-pointer`}
              onClick={() => handleLogoClick("Google")}
            />
            <img
              src={Linkdin}
              alt="LinkedIn"
              width="20"
              height="25"
              className={`${
                activeLogo === "LinkedIn"
                  ? "bg-primary text-background rounded-full "
                  : ""
              } cursor-pointer`}
              onClick={() => handleLogoClick("LinkedIn")}
            />
          </section>
        </section>

        {/* Links */}
        <section className="col-span-1">
          <h3 className="text-xs md:text-xl font-semibold">Links</h3>
          <p className="text-heading font-light text-xs my-1">About us</p>
          <p className="text-heading font-light text-xs my-1">FAQ</p>
          <p className="text-heading font-light text-xs my-1">Location</p>
          <p className="text-heading font-light text-xs my-1">Affiliates</p>
          <p className="text-heading font-light text-xs my-1">Contact</p>
        </section>

        {/* My Accounts */}
        <section className="col-span-1">
          <h3 className="text-xs md:text-xl font-semibold">My Accounts</h3>
          <p className="text-heading font-light text-xs my-3">My Account</p>
          <p className="text-heading font-light text-xs my-3">Discount</p>
          <p className="text-heading font-light text-xs my-3">Returns</p>
          <p className="text-heading font-light text-xs my-3">Orders history</p>
          <p className="text-heading font-light text-xs my-3">Order Tracking</p>
        </section>

        {/* Newsletter */}
        <section className="col-span-1">
          <h3 className="text-xs md:text-xl font-semibold">Newsletter</h3>
          <input
            className="appearance-none bg-transparent border-b-2 w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none focus:border-primary font-light text-xs"
            type="text"
            placeholder="Enter your text here..."
          />
        </section>
      </div>

      {/* Footer */}
      <div className="text-center bg-primary text-background text-xs py-4 my-6">
        Copyright @2023.com, Allrights reserved
      </div>
    </footer>
  );
};

export default Footer;
