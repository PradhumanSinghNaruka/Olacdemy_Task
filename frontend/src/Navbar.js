// import React from 'react'
// import {Link} from 'react-scroll';
// import image from '../src/images/psn.png';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//     const navigate = useNavigate();
//     const data = [
//         {
//             id: 1,
//             text:"Home",
//             to: "/",
//         },
//         {
//             id: 2,
//             text:"For Men",
//             to: "/Page1",
//         },
//         {
//             id: 3,
//             text:"For Women", 
//             to: "/Page2",
//         },
//         {
//             id: 4,
//             text:"Premium",
//             to: "/Page3",
//         },
//         {
//             id: 5,
//             text:"Contact Us"
//         }
//     ];
//     const handleNavigation = (path) => {
//         navigate(path); 
//     };
//   return (
//     <>
//         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 bg-gray-100">
//             <div className="flex justify-between items-center h-16">
//                 <div className="flex space-x-2">
//                     <img src={image} alt='' className='w-12 h-12 rounded-full'></img>
//                 </div>
//                 <div>
//                     <ul className='hidden md:flex space-x-8 font-semibold text-2xl'>
//                         {data.map(({id, text, to})=>(
//                             <li
//                             className="hover:scale-105 hover:text-red-800 duration-300 cursor-pointer"
//                             key={id}
//                             onClick={() => handleNavigation(to)} 
//                           >
//                             <Link
//                               to={text}
//                               smooth={true}
//                               duration={500}
//                               offset={-70}
//                               activeClass="active"
//                             >
//                               {text}
//                             </Link>
//                           </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className='justify-between cursor-pointer space-x-6'>
//                     <button className='bg-black text-white p-2 font-semibold rounded-md w-16 hover:bg-red-600 hover:text-black duration-300'>Login</button>
//                     <button className='bg-black text-white p-2 font-semibold rounded-md w-22 hover:bg-red-600 hover:text-black duration-300'>Sign Up</button>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Navbar

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import image from "../src/images/psn.png";

// function Navbar() {
//   const navigate = useNavigate();

//   const data = [
//     { id: 1, text: "Home", to: "/" },
//     { id: 2, text: "For Men", to: "/page1" },
//     { id: 3, text: "For Women", to: "/page2" },
//     { id: 4, text: "Premium", to: "/premium" },
//     { id: 5, text: "Contact Us", to: "/contact" }, // Add a contact route if needed
//   ];

//   return (
//     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 bg-gray-100">
//       <div className="flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="flex space-x-2">
//           <img src={image} alt="Logo" className="w-12 h-12 rounded-full" />
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <ul className="hidden md:flex space-x-8 font-semibold text-2xl">
//             {data.map(({ id, text, to }) => (
//               <li
//                 key={id}
//                 className="hover:scale-105 hover:text-red-800 duration-300 cursor-pointer"
//               >
//                 <NavLink
//                   to={to}
//                   className={({ isActive }) =>
//                     isActive ? "text-red-800" : "text-black"
//                   }
//                 >
//                   {text}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-6">
//           <button className="bg-black text-white p-2 font-semibold rounded-md w-16 hover:bg-red-600 hover:text-black duration-300">
//             Login
//           </button>
//           <button className="bg-black text-white p-2 font-semibold rounded-md w-22 hover:bg-red-600 hover:text-black duration-300">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-scroll';
// import image from '../src/images/psn.png';
// import Login from './Login';

// function Navbar() {
//   const data = [
//     { id: 1, text: "Home"},
//     { id: 2, text: "For Men"},
//     { id: 3, text: "For Women"},
//     { id: 4, text: "Premium"},
//     { id: 5, text: "Contact Us"},
//   ];
//   const openLoginModal = () => {
//     const modal = document.getElementById('my_modal_1');
//     if (modal) modal.showModal();
//   };

//   return (
//     <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 bg-gray-100">
//       <div className="flex justify-between items-center h-16">
//         {/* Logo */}
//         <div className="flex space-x-2">
//           <img src={image} alt="Logo" className="w-12 h-12 rounded-full" />
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-8 font-semibold text-2xl">
//           {data.map(({ id, text, to }) => (
//             <li
//               key={id}
//               className="hover:scale-105 hover:text-red-800 duration-300 cursor-pointer"
//             >
//               <Link
//                 to={text}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 activeClass='active'
//               >
//                 {text}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Action Buttons */}
//         <div className="flex space-x-6">
//           <button className="bg-black text-white p-2 font-semibold rounded-md w-16 hover:bg-red-700 hover:text-black duration-300">
//             Login
//           </button>
//           <Login />
//           <button className="bg-black text-white p-2 font-semibold rounded-md w-22 hover:bg-red-700 hover:text-black duration-300">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-scroll';
import image from '../src/images/psn.png';
import Login from './Login';

function Navbar() {
  const data = [
    { id: 1, text: "Home" },
    { id: 2, text: "For Men" },
    { id: 3, text: "For Women" },
    { id: 4, text: "Premium" },
    { id: 5, text: "Contact Us" },
  ];

  const openLoginModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) modal.showModal();
  };

  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 bg-gray-100">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex space-x-2">
          <img src={image} alt="Logo" className="w-12 h-12 rounded-full" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-semibold text-2xl">
          {data.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 hover:text-red-800 duration-300 cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex space-x-6">
          <button
            onClick={openLoginModal}
            className="bg-black text-white p-2 font-semibold rounded-md w-16 hover:bg-red-700 hover:text-black duration-300"
          >
            Login
          </button>
          <Login />
          <button className="bg-black text-white p-2 font-semibold rounded-md w-22 hover:bg-red-700 hover:text-black duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
