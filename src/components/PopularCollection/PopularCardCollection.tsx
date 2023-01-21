import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import CircularAvatar from '../LiveAuction/CircularAvatar';
import { AiOutlineHeart } from "react-icons/ai";

type Props = {
    main_img_url1: string;
    main_img_url2: string;
    main_img_url3: string;
    img_avatar: string;
}


const PopularCardCollection = ({ main_img_url1, main_img_url2, main_img_url3, img_avatar }: Props) => {
    return (
        <div className='bg-[#333237] shadow-lg px-4 md:h-96 rounded-lg content-between md:mt-5'>
            <div className='p-1'>
                {/*heading*/}
                <div className='text-white opacity-100 md:flex items-start justify-between'>
                    <div className='flex items-center justify-center'>
                        <CircularAvatar img_url="https://lh3.googleusercontent.com/bHY50kvRmdB_KDHz8dgVgKU7EBxiFdYUh4Kp35DrMHSAcTiVr4ag1ZoEEa8RqwCDSlq3RbC0a8zS8ELO_3qQ7J0eaMIM6eQHu2saKcqg-tNpBL-leTjuJSaYUkOtyVaB1YkketFT" />
                        <div className='p-2'>
                            <h3 className='text-white text-xl font-bold'>Bored Ape#56</h3>

                            <h1 className='text-white font-semibold'>Raffildao Bachu</h1>
                        </div>

                    </div>
                    <div className='font-bold flex items-center mt-4'><span className='text-xl'> <AiOutlineHeart /></span><p className='pl-1'> 92</p></div>
                </div>
            </div>
            {/*image*/}
            <div className='flex items-center justify-between'>
                <div className='mr-1'>
                    <img className='md:w-32 md:h-72 object-cover rounded-lg' alt="home-pageGraphic1" src={main_img_url1} />
                </div>
                <div className='ml-1'>
                    <div className='mb-7'>
                        <img className='md:w-48 md:h-32 object-cover rounded-lg' alt="home-pageGraphic2" src={main_img_url2} />
                    </div>
                    <div className='mt-8'>
                        <img className='md:w-48 md:h-32 object-cover rounded-lg' alt="home-pageGraphic3" src={main_img_url3} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopularCardCollection