// // import React from 'react'
// // import Navbar from './Navbar'
// // import Banner from './Banner'
// // import Home from './Home'
// // import Page1 from './Page1'
// // import Page2 from './Page2'
// // import Page3 from './Page3'
// // import { Route, Routes } from "react-router-dom";

// // function App() {
// //   return (
// //     <div className='dark:bg-slate-900 dark:text-white'>
// //         <Routes>
// //         <Route path='/' element={<Home/>}/>
// //         <Route path='/Page1' element={<Page1 />}/>
// //         <Route path='/Page2' element={<Page2 />}/>
// //         <Route path='/Page3' element={<Page3 />}/>
        
// //         </Routes> 
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react';
// import Home from './Home';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="dark:bg-slate-900 dark:text-white">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/page1" element={<Page1 />} />
//         <Route path="/page2" element={<Page2 />} />
//         <Route path="/premium" element={<Page3 />} />
//         {/* If you need a "Contact Us" page, create the Contact component and route here */}
        
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Contact from "./Contact";
import Footer from "./Footer";
import Buy1 from "./Buy1";
import Buy2 from "./Buy2";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/premium" element={<Page3 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/Buy1" element={<Buy1 />} />
        <Route path="/Buy2" element={<Buy2 />} />
      </Routes>
    </div>
  );
}

export default App;
