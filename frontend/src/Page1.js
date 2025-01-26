// import React from 'react';
// import perfiume from "../src/images/p1.png";
// import {Link} from "react-scroll";

// function Cards() {
//     const data = [
//         {
//             id:1,
//             text:"Perfium1",
//             image:perfiume
//         },
//         {
//             id:2,
//             text:"Perfium1",
//             image:perfiume
//         },
//         {
//             id:3,
//             text:"Perfium1",
//             image:perfiume
//         }
//     ]
//   return (
//     <>
//         <h1 name="Men" className='mx-auto md:px-20 px-4 mt-12 md:mt-16 flex gap-20 text-black-700 text-4xl md:text-8xl items-center justify-center'>For Men</h1>
//     <div className="md:max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4">
//         {data.map(({id,text,image})=>{
//             <li
//                                         className="hover:scale-105 hover:text-red-800 duration-300 cursor-pointer"
//                                         key={id}
//                                       >
//                                         <Link
//                                           to={text}
//                                           smooth={true}
//                                           duration={500}
//                                           offset={-70}
//                                           activeClass="active"
//                                         >
//                                           {text}
//                                         </Link>
//                                       </li>
//         })}
//     <div className="card card-compact bg-gray-200 w-full md:w-96 shadow-xl hover:">
//         <div className="card-body text-center">
//             <img src={perfiume} className="rounded-full w-[320px] h-[320px] mx-auto" alt="Nike Shoes"/>
//             <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Nike</h2>
//             <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">1PSN2004</span></h2>
//             <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">510</span></h1>
//             <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
//                 Buy
//             </a>
//         </div>
//     </div>

//     <div className="card card-compact bg-gray-200 w-full md:w-96 shadow-xl">
//         <div className="card-body text-center">
//             <img src={perfiume} className="rounded-full w-[320px] h-[320px] mx-auto" alt="Puma Shoes"/>
//             <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Puma</h2>
//             <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">2PSN2004</span></h2>
//             <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">499</span></h1>
//             <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
//                 Buy
//             </a>
//         </div>
//     </div>

//     <div className="card card-compact bg-gray-200 w-full md:w-96 shadow-xl">
//         <div className="card-body text-center">
//             <img src={perfiume} className="rounded-full w-[320px] h-[320px] mx-auto" alt="Nike Shoes"/>
//             <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">Nike</h2>
//             <h2 className="card-title text-lg md:text-2xl mt-2">Code :<span className="text-lg md:text-4xl font-semibold">3PSN2004</span></h2>
//             <h1 className="text-lg md:text-2xl mt-2">Price : <span className="font-bold">550</span></h1>
//             <a className="btn btn-primary mt-4 text-lg md:text-2xl" onClick={() => document.getElementById("buy1").showModal()}>
//                 Buy
//             </a>
//         </div>
//     </div>
// </div>


//     </>
//   )
// }

// export default Cards

import React from 'react';
import perfiume from "../src/images/p1.png";
import { Link } from "react-scroll";
import Buy1 from './Buy1';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Page1() {
    const[modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();
    const data = [
        {
            id: 1,
            text: "Perfium1",
            image: perfiume, 
            price:"$58",
        },
        {
            id: 2,
            text: "Perfium2",
            image: perfiume,
            price:"$58"
        },
        {
            id: 3,
            text: "Perfium3",
            image: perfiume,
            price:"$58"
        },
        {
            id: 4,
            text: "Perfium3",
            image: perfiume,
            price:"$58"
        },
        {
            id: 5,
            text: "Perfium3",
            image: perfiume,
            price:"$58"
        },
        {
            id: 6,
            text: "Perfium3",
            image: perfiume,
            price:"$58"
        },
        
    ];
    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const handleBuy = ()=>{
        navigate("/Buy1");
    }
  
    return (
        <>
            <h1
                name="For Men"
                className="mx-auto md:px-20 px-4 mt-12 md:mt-16 flex gap-20 text-black-700 font-bold text-4xl md:text-8xl items-center justify-center"
            >
                For Men
            </h1>
            <div className="md:max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map(({ id, text, image, price }) => (
                    <div key={id} className="card card-compact bg-gray-50 w-full md:w-96 shadow-xl">
                        <div className="card-body text-center">
                            <img
                                src={image}
                                className="rounded-full w-[320px] h-[320px] mx-auto"
                                alt={text}
                            />
                            <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">{text}</h2>
                            <h2 className="card-title font-bold text-2xl md:text-4xl mt-4">{price}</h2>
                            <Link
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="btn bg-black text-white mt-4 text-lg md:text-2xl hover:bg-red-900 duration-300"
                            >
                                <button onClick={handleBuy}>Buy</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {modalVisible && <Buy1 closeModal={closeModal} />}
        </>
    );
}

export default Page1;
