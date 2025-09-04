import React from "react";
import {FaInstagram, FaGithub} from 'react-icons/fa';


const Footer = () => {
    return(
        <div className="w-full bg-[#171717] text-gray-300 py-8 px-2"> 
            <div className="max-w-[1240px] mx-auto grid grid-cols-3 md:grid-cols-6 border-b-2 border-gray-600 py-5">
                <div>
                    <h6 className="font-bold uppercase py-2">
                        Community Guidelines
                    </h6>
                    <ol>
                       <li className="py-1">Instagram</li> 
                       <li className="py-1">Facebooks</li> 
                       <li className="py-1">Youtube</li> 
                    </ol>
                </div>
            </div>
                <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
                        <p>
                            [2024] 64 Social Hub, All right reserved by Farrel Dava.
                        </p>
                        <div className="flex justify-end gap-10 sm:w-[300px] pt-4 text-2x1">
                            <FaInstagram/>
                            <FaGithub/>
                        </div>
                </div>
        </div>
    )
}

export default Footer