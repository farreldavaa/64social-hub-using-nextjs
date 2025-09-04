"use client"
import React, {useEffect} from "react";
import Link from "next/link";
import LBWK1 from "../public/assets/LBWK1.jpg"; 
import LBWK2 from "../public/assets/LBWK2.jpg";
import LBWK3 from "../public/assets/LBWK3.jpg";
import LBWK4 from "../public/assets/LBWK4.jpg";
import Image from "next/image";
// import InstagramEmbed from 'react-instagram-embed';

     const contentData=[
        {
            'id' : 1,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.",
            'coverImg' : 'https://libertywalk.co.jp/wp-content/uploads/2025/04/World-Time-Attack-Challenge-WTAC1920.jpg'
        },
        {
            'id' : 2,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.",
            'coverImg' : 'https://ice-indonesia.com//assets/uploads/events-images-183-1.jpg'
        },
        {
            'id' : 3,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 4,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models. ",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 5,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.  ",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
        {
            'id' : 6,
            'title' : 'MiniGT',
            'desc' : "MINI GT marks the start of a new adventure for TSM-Models.  ",
            'coverImg' : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-146620824/no-brand_no-brand_full01.jpg'
        },
    ];

    function Content(){
        return(
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2 gap-6 px-4 text-black my-6"> 
            {contentData.map((content, index)=>
                <Link href={`/blog/${content.id}`} key={content.id}>
                    {index === 0 && (
                        <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden drop-shadow-md hover:scale-105 transition-transform duration-300">
                            <img
                                className="w-full h-full object-cover"
                                src={content.coverImg}
                                alt={content.title}
                            />
                            <div className="absolute inset-x-0 pt-2 bottom-0 flex items-end bg-black bg-opacity-85">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-white text-left ml-4">
                                {content.title}
                            </h5>
                            </div>
                            
                        </div>
                    )}
                    {index === 1 && (
                        <div className="col-span-1 row-span-2 rounded-xl overflow-hidden drop-shadow-md hover:scale-105 transition-transform duration-300">
                            <img
                            className="w-full h-full object-cover"
                            src={content.coverImg}
                            alt={content.title}
                            />
                        </div>
                    )}
                    {index === 2 && (
                        <div className="col-span-1 rounded-xl bg-black text-white flex items-center justify-between px-4 py-6 hover:scale-105 transition-transform duration-300">
                            <p className="font-semibold">{content.title}</p>
                            <span className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
                            →
                            </span>
                        </div>
                    )}
                {/* <div className="bg-emerald-200 rounded-xl overflow-hidden drop-shadow-md hover:scale-105 transition-transform duration-300">
                    <img className="h-56 w-full object-cover" src={content.coverImg} alt={content.title}/>
                        <div className="p-8">
                            <h3 className="font-bold text-xl">
                                {content.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {content.desc}
                            </p>
                        </div>
                </div> */}
                </Link>
                )}
        </div>
        );
    }

export function ContentPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
    return(
    <>
    <div className="w-full bg-[#f9f9f9] py-[50px] ">
        <div className=" h-1 max-w-[1240px] mx-auto w-full bg-gray-500"></div>
        <div className="mt-0.5 h-0.5 max-w-[1240px] mx-auto w-full bg-gray-300"></div>
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="grid grid-cols-2 mt-7 mb-1">
                    <div className="text-[39.81px] font-bold text-left">
                    latest collections.
                    </div>
                    <div className="font-semibold text-right">
                        {`there are our latest collections, that we always willing to update every items to let you all know what's new through
                        our social media. Visit out social media to get more update and news. `}
                    </div>
                </div>
                    <div className="items-center justify-center my-4 flex flex-col">
                        <p className="text-[19.2px] font-bold my-2">
                            Liberty Walk Collections
                        </p>
                        <p className="max-w-[700px]">{`Liberty Walk is a Japanese tuning company founded by Wataru Kato.
                            They are famous worldwide for creating wide-body kits and aggressive custom designs for supercars
                            and sports cars. Yet liberty Walk isn’t only famous in the real car tuning world — their wild wide-body
                            designs are also recreated in diecast models by brands like MiniGT, Ignition Model, and Hot Wheels.`}
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-2 my-7">
                        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat col-span-1">
                            <Image src={LBWK1} className="max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="InstagramFeed"/>
                        </div>
                        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat col-span-1">
                            <Image src={LBWK2} className="max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="InstagramFeed"/>
                        </div>
                        <div  className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat object-center col-span-1">
                            <Image src={LBWK3} className="max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="InstagramFeed"/>
                        </div>
                        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat col-span-1">
                            <Image src={LBWK4} className="max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="InstagramFeed"/>
                            {/* <InstagramEmbed/> */}
                        </div>  
                    </div>
            </div>  
    </div>
    <div className="w-full bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto relative">
            <div className=" h-1 max-w-[1240px] mx-auto w-full bg-gray-500"></div>
            <div className="mt-0.5 h-0.5 max-w-[1240px] mx-auto w-full bg-gray-300"></div>
            <div className="grid grid-cols-2 mt-7 mb-1">
                <div className="text-[39.81px] font-bold text-left">
                    blog articles.
                </div>
                <div className="font-semibold text-right">
                    Discover our latest articles and stories, updated regularly to keep you connected with the Hub.
                    Stay tuned and follow us for fresh insights, news or events.
                </div>
            </div>
            <div className="grid">
                    <Content/>
            </div>
        </div>
    </div>
    
    <div className="h-24 bg-gradient-to-b from-[#f9f9f9] to-[#171717]"></div>
    <div className='pt-0 mt-0 bg-[#171717] pb-10'></div>
    </>
    );
}

export default ContentPage