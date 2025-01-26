import React from 'react';
import perfiume from "../src/images/p3.png";
import { Link } from "react-scroll";

function Page3() {
    const data = [
        {
            id: 1,
            text: "Perfium1",
            image: perfiume, 
            price:"$80",
        },
        {
            id: 2,
            text: "Perfium2",
            image: perfiume,
            price:"$80"
        },
        {
            id: 3,
            text: "Perfium3",
            image: perfiume,
            price:"$80"
        },
    ];
  
    return (
        <>
            <h1
                name="Premium"
                className="mx-auto md:px-20 px-4 mt-12 md:mt-16 flex gap-20 text-black-700 font-bold text-4xl md:text-8xl items-center justify-center"
            >
                Premium
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
                                Buy
                            </Link>
                            
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Page3;
