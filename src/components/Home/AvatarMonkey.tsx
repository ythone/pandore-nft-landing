import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';

type Props = {
    img_url:string;
    attribute:string;
}
const AvatarMonkey = ({img_url,attribute}:Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const height_andwidth_div = ()=>{
    if(isAboveMediumScreens==true){
       return "h-40 w-20 bg-[#3c3b40] rounded-lg ";
    }else{
       return "h-7 w-12 bg-[#3c3b40] rounded-full ";
    }
  }

  const height_andwidth_img = ()=>{
    if(isAboveMediumScreens==true){
       return "h-min-srceen w-96 rounded-full bg-black opacity-70";
    }else{
       return "h-12 w-7 rounded-full";
    }
  }

  return (
    <img
      className={attribute}
      src={img_url}
      alt=""
    />
  )
}

export default AvatarMonkey