// import React from "react";
// import image from "../src/images/perfiume.png";
// import { ReactTyped,Typed } from "react-typed";

// function Banner() {
//   return (
//     <div
//       name="Home"
//       className="relative h-screen w-full bg-cover bg-center mt-16"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* Text Overlay */}
//       <div className="absolute inset-0 flex flex-col justify-center text-left text-white px-16">
//       <div className="flex space-x-1 text-2xl md:text-4xl">
//                     <h1 className="text-2xl md:text-7xl font-bold text-black">Fragrance That</h1>
//                     {/* <span className="text-green-500 text-4xl">Developer</span> */}
//                     <br />
//                     <ReactTyped
//                         className="text-green-500 text-2xl md:text-7xl space-y-4 "
//                         strings={["Defines You. ","Inspires Confidence. ","Defines Elegance."]}
//                         typeSpeed={40}
//                         backSpeed={50}
//                         loop={true}

//                     />
//                     </div>
//         <p className="text-2xl mt-6 max-w-lg text-black">
//         Perfume is a reflection of your personality, leaving a lasting impression.
//          Explore our collection for unique scents that inspire confidence and elevate your style."
//         </p>
        
//       </div>
//     </div>
//   );
// }

// export default Banner;

import React from "react";
import image from "../src/images/perfiume.png";
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div
      name="Home"
      className="relative h-screen w-full bg-cover bg-center mt-16 mb-20 md:mb-2"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center text-left text-white px-16">
        {/* "Fragrance That" with line break */}
        <h1 className="text-2xl md:text-7xl font-bold text-black">
          Fragrance That
        </h1>
        {/* This break now works because it is outside the flex container */}
        <br />
        <div className="flex space-x-1 text-xl md:text-4xl">
          <ReactTyped
            className="text-red-800 text-2xl md:text-7xl font-bold space-y-4"
            strings={["Defines You. ", "Inspires Confidence. ", "Defines Elegance."]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          />
        </div>
        <p className="text-sm md:text-2xl mt-6 max-w-lg text-black">
          Perfume is a reflection of your personality, leaving a lasting impression.
          Explore our collection for unique scents that inspire confidence and elevate your style.
        </p>
      </div>
    </div>
  );
}

export default Banner;
