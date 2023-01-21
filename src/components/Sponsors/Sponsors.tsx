import React from 'react'
import Marquee from 'react-fast-marquee';
import { FaBitcoin } from "react-icons/fa";
import { SiSpring,SiCircle,SiMega,
    SiConfluence,SiBinance,SiClockify,
    } from "react-icons/si";
import { RiHandCoinLine } from "react-icons/ri";


const Sponsors = () => {
    const sponsorlist1 = [
        {
            id: 8,
            textcss: "",
            icon:<SiClockify/>,
            name: "CoinEx"
        },
        {
            id: 9,
            textcss: "",
            icon:"",
            name: "Solupro"
        },
        {
            id: 10,
            textcss: "",
            icon:"",
            name: "Tech Store"
        },
        {
            id: 11,
            textcss: "",
            icon:<RiHandCoinLine/>,
            name: "Coinsuper"
        },
        {
            id: 12,
            textcss: "",
            icon:"",
            name: "TESLA"
        },
        {
            id: 13,
            textcss: "",
            icon:"",
            name: "CoinCap"
        },
        {
            id: 14,
            textcss: "",
            icon:"",
            name: "ShibaCap"
        }
    ]

    const sponsorList = [
        {
            id: 1,
            textcss: "",
            icon:<SiSpring/>,
            name: "BITFINEX"
        },
        {
            id: 2,
            textcss: "",
            icon:<SiCircle/>,
            name: "Blockpart"
        },
        {
            id: 3,
            textcss: "",
            icon:<SiMega/>,
            name: "Mega"
        },
        {
            id: 4,
            textcss: "",
            name: "ripple"
        },
        {
            id: 5,
            textcss: "",
            icon:<FaBitcoin/>,
            name: "bitcoin"
        },
        {
            id: 6,
            textcss: "",
            icon:<SiConfluence/>,
            name: "BitForex"
        },
        {
            id: 7,
            textcss: "",
            icon:<SiBinance/>,
            name: "Binance"
        }
    ]

    const sponsors = sponsorList.map((content) =>
        <p key={content.id} className='m-8 flex items-center justify-center'><span>{content.icon !=null ?content.icon:""}</span>{content.name}</p>
    );

    const sponsors1 = sponsorlist1.map((content) =>
        <p key={content.id} className='m-8 flex items-center justify-center'><span>{content.icon !=null ?content.icon:""}</span>{content.name}</p>
    );

    return (
        <section id="home" className="mx-auto min-h-full w-6/6 py-10">
            <div className='text-[#3c3b40] text-4xl'>
                <Marquee gradient={false} direction="right" speed={100} delay={5}>
                    {sponsors}
                </Marquee>
                <Marquee gradient={false} style={
                    { "background": "bg-black" }
                } direction="right" speed={100} delay={5}>
                    {sponsors1}
                </Marquee>
            </div>
        </section>
    )
}

export default Sponsors