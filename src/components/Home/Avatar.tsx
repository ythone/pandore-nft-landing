import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
const Avatar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const height_andwidth_div = ()=>{
    if(isAboveMediumScreens==true){
       return "flex items-center justify-start h-20 w-80 bg-[#3c3b40] rounded-full ";
    }else{
       return "flex items-center justify-start h-7 w-12 bg-[#3c3b40] rounded-full ";
    }
  }

  const height_andwidth_img = ()=>{
    if(isAboveMediumScreens==true){
       return "h-20 w-80 rounded-full";
    }else{
       return "h-7 w-12 rounded-full";
    }
  }

  return (
    <div className={height_andwidth_div()}>
    <img
      className={height_andwidth_img()}
      src="https://previews.123rf.com/images/milkos/milkos1907/milkos190701497/127322761-abstract-art-light-colors-powder-explosion-on-white-background-panorama-copy-space.jpg"
      alt=""
    />
  </div>
  )
}

export default Avatar