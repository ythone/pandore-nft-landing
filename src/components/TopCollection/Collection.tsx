import React from 'react'
import CircularAvatar from '../LiveAuction/CircularAvatar'

type Props = {
    img_url:string;
    id:number;
    name:string;
    price:string;
}

const Collection = ({img_url,id,name,price}:Props) => {
    return (
        <div className='border-b border-[#636267] py-4'>
            <div className='flex items-center justify-start'>
                <p className='text-[#7f7e81] p-4'>{id}.</p>
                <CircularAvatar img_url={img_url} />
                <div className='p-2'>
                    <h3 className='text-white text-sm font-bold'>{name}</h3>

                    <h1 className='text-[#7f7e81] text-sm font-semibold'>{price}</h1>
                </div>

            </div>
        </div>
    )
}

export default Collection