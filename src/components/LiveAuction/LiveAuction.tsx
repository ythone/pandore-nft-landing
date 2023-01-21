import React from 'react'
import CircularAvatar from './CircularAvatar';
import { IoIosFlash } from "react-icons/io";
import useMediaQuery from '../hooks/useMediaQuery';

const LiveAuction = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:760px)");
    const displayAvatarAndcollection = () => {
        if (isAboveMediumScreens) {
            return (
                <div className='ml-6'>
                    <h1 className=' pb-2'>Collection</h1>
                    <div className='bg-[#333237] md:flex items-start justify-start rounded-lg p-3'>
                        <CircularAvatar img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScH3NNq2DafjT2M49z5iXmzYFaGvTCQ3wzMlaz1ntt2VcgK1L4GZLkJNhX74-ez9br4qo&usqp=CAU" />
                        <p className='p-2 mr-5'>Your Dream</p>
                    </div>
                    <h2 className='text-sm mt-6'>End Bid</h2>
                    <h2 className='text-2xl mt-2 font-bold'>12 : 50 : 23</h2>
                </div>
            )
        }

        return (
            <div className=''>
                <h1 className=' pb-2'>Collection</h1>
                <div className='bg-[#333237] flex items-start justify-start rounded-lg p-3'>
                    <CircularAvatar img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScH3NNq2DafjT2M49z5iXmzYFaGvTCQ3wzMlaz1ntt2VcgK1L4GZLkJNhX74-ez9br4qo&usqp=CAU" />
                    <p className='p-2 mr-5'>Dream</p>
                </div>
                <h2 className='text-sm mt-6'>End Bid</h2>
                <h2 className='text-2xl mt-2 font-bold'>12 : 50 : 23</h2>
            </div>
        )
    }

    const displayButtons = () => {
        if (isAboveMediumScreens) {
            return <>
                <button className="bg-[#ee7b48] w-60 text-sm hover:bg-black hover:text-white text-white font-bold py-2 px-8 rounded-lg mt-5">
                    Start Bidding
                </button>

                <button className="text-sm w-60 bg-transparent hover:bg-[#ee7b48] text-white font-semibold hover:text-white py-2 px-8 border border-[#ee7b48] hover:border-transparent rounded-lg ml-4 mt-5">
                    Learn More
                </button>
            </>
        }

        return <>
            <button className="bg-[#ee7b48] md:w-60 text-sm hover:bg-black hover:text-white text-white font-bold py-2 px-8 rounded-lg mt-5">
                Start Bidding
            </button>

            <button className="text-sm md:w-60 bg-transparent hover:bg-[#ee7b48] text-white font-semibold hover:text-white py-2 px-8 border border-[#ee7b48] hover:border-transparent rounded-lg mt-5">
                Learn More
            </button>
        </>
    }

    return (
        <section id="home" className="mx-auto min-h-full w-5/6 py-20">
            <div className='md:flex items-center justify-between'>
                <div className=''>
                    <img className='rounded-lg h-96' src="https://i.seadn.io/gae/HE4S50ylSK1z7-gojjlmPa14xt2GJi2WCx4nOsMsBj6RqJj_medQBFX4reQTL8srPLXZaeiaZuMES6XHQURzHUW0NOkmMoUs0xCIkAA?auto=format&w=384" alt="" />
                </div>
                <div className='text-white'>
                    <div className='text-2xl border-l-4 border-l-[#574e91]'><h1 className='pl-1 flex items-center justify-start'>Live Auction <span className='text-[#e7ce6e]'><IoIosFlash /></span></h1></div>
                    <h1 className='md:text-7xl font-bold'>Bored__Ape #333</h1>
                    <div className='md:flex items-center justify-start content-start mt-10'>
                        <div className=''>
                            <h1 className='pb-2'>Creator</h1>
                            <div className='bg-[#333237] flex items-start justify-start rounded-lg p-3'>
                                <CircularAvatar img_url="https://lh3.googleusercontent.com/bHY50kvRmdB_KDHz8dgVgKU7EBxiFdYUh4Kp35DrMHSAcTiVr4ag1ZoEEa8RqwCDSlq3RbC0a8zS8ELO_3qQ7J0eaMIM6eQHu2saKcqg-tNpBL-leTjuJSaYUkOtyVaB1YkketFT" />
                                <p className='p-2 mr-5'>@Obsjdure</p>
                            </div>
                            <h2 className='text-sm mt-6'>Current Bid</h2>
                            <h2 className='text-2xl mt-2 font-bold'>0.32ETH</h2>

                        </div>
                        {displayAvatarAndcollection()}
                    </div>
                    <div>
                       {displayButtons()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiveAuction