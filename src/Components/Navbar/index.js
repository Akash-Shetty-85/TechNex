// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-6">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo or branding */}
//         <div className="flex items-center">
//           <span className="text-primary text-2xl font-bold">Shopico</span>
//         </div>

//         {/* Nav links for larger screens */}
//         <section className="hidden md:flex justify-around">
//           <a href="/" className="text-heading ml-11">
//             Home
//           </a>
//           <a href="/" className="text-heading ml-11">
//             Catalog
//           </a>
//           <a href="/" className="text-heading ml-11">
//             Contacts
//           </a>
//           <a href="/" className="text-heading ml-11">
//             FAqs
//           </a>
//         </section>

//         {/* Hamburger menu for smaller screens */}
//         <section className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="h-7 w-8"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </section>
//         <section className="hidden md:flex justify-around items-center space-x-11">
//           <FontAwesomeIcon icon={faUser} size="xl" />
//           <FontAwesomeIcon icon={faHeart} size="xl" />
//           <FontAwesomeIcon icon={faCartShopping} size="lg" />
//         </section>
//       </div>

//       {/* Responsive mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           {/* Render your mobile menu links here */}
//           <a href="/" className="block text-white mt-2">
//             Home
//           </a>
//           <a href="/" className="block text-white mt-2">
//             Catalog
//           </a>
//           <a href="/" className="block text-white mt-2">
//             Contacts
//           </a>
//           <a href="/" className="block text-white mt-2">
//             FAqs
//           </a>
//           <section className="flex justify-around items-center space-x-7 space-y-7">
//             <FontAwesomeIcon icon={faUser} size="xl"/>
//             <FontAwesomeIcon icon={faHeart} size="xl"/>
//             <FontAwesomeIcon icon={faCartShopping} size="lg"/>
//           </section>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-6 relative z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or branding */}
        <div className="flex items-center">
          <span className="text-primary text-2xl font-bold">Shopico</span>
        </div>

        {/* Nav links for larger screens */}
        <section className="hidden md:flex justify-around">
          <a href="/" className="text-heading ml-11">
            Home
          </a>
          <a href="/" className="text-heading ml-11">
            Catalog
          </a>
          <a href="/" className="text-heading ml-11">
            Contacts
          </a>
          <a href="/" className="text-heading ml-11">
            FAQs
          </a>
        </section>

        {/* Hamburger menu for smaller screens */}
        <section className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-7 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </section>
        <section className="hidden md:flex justify-around items-center space-x-11">
          <FontAwesomeIcon icon={faUser} size="xl" />
          <FontAwesomeIcon icon={faHeart} size="xl" />
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </section>
      </div>

      {/* Responsive mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full top-14 left-0 p-5 bg-primary text-white py-4">
          <a href="/" className="block text-white mt-2">
            Home
          </a>
          <a href="/" className="block text-white mt-2">
            Catalog
          </a>
          <a href="/" className="block text-white mt-2">
            Contacts
          </a>
          <a href="/" className="block text-white mt-2">
            FAQs
          </a>
          <section className="flex justify-around items-center space-x-7 mt-4">
            <FontAwesomeIcon icon={faUser} size="xl" />
            <FontAwesomeIcon icon={faHeart} size="xl" />
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
          </section>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
