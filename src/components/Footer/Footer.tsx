import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bottom-0 min-h-full py-20 mx-auto px-20'>
            <div className='border-b border-[#5e605f]  md:flex items-center justify-between p-5 text-white'>
                <p className='text-white font-bold flex items-center justify-center text-4xl'>NAX<span className='text-[#ee7b48] text-4xl'>OO</span></p>
                <div className='flex items-center justify-center'>
                    <p className='m-2'>Ready to collect?</p>
                    <button className="md:w-32 bg-[#ee7b48] hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded">
                        View NFT
                    </button>
                </div>
            </div>
            <div className='text-white text-xl font-semibold justify-center md:grid grid-cols-4 gap-8 mt-5'>
                <div className='m-5'>
                    <p>Create sell,and collect<br/>NFT Digital Arts</p>
                    <p className='flex items-center justify-start'><span className='pr-1'><FaFacebookF/></span> <span className='p-1'><AiOutlineTwitter/></span> <span className='p-1'><AiOutlineInstagram/></span></p>
                </div>
                <div className='m-5'>
                    <ul>
                        <li className='p-2 text-[#ee7b48]'>MarketPlace</li>
                        <li className='p-2'>Create</li>
                        <li className='p-2'>Minting</li>
                        <li className='p-2'>Sell</li>
                        <li className='p-2'>Collect</li>
                    </ul>
                </div>
                <div className='m-5'>
                    <ul>
                        <li className='p-2 text-[#ee7b48]'>Company</li>
                        <li className='p-2'>Bug Bounty</li>
                        <li className='p-2'>Community</li>
                        <li className='p-2'>Team</li>
                        <li className='p-2'>Carrer</li>
                    </ul>
                </div>
                <div className='m-5'>
                    <ul>
                        <li className='p-2 text-[#ee7b48]'>Help</li>
                        <li className='p-2'>Faqs</li>
                        <li className='p-2'>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer