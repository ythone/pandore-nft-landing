import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';

const Avatar2 = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const height_andwidth_div = ()=>{
      if(isAboveMediumScreens==true){
         return "flex items-center justify-start h-20 w-60 bg-[#3c3b40] rounded-full ";
      }else{
         return "flex items-center justify-start h-7 w-12 bg-[#3c3b40] rounded-full ";
      }
    }
  
    const height_andwidth_img = ()=>{
      if(isAboveMediumScreens==true){
         return "h-20 w-60 rounded-full";
      }else{
         return "h-7 w-12 rounded-full";
      }
    }
  
    return (
      <div className={height_andwidth_div()}>
      <img
        className={height_andwidth_img()}
        src="https://www.artranked.com/images/48/48b0cf7ae1a328db5a8e71191393127a.jpg"
        alt=""
      />
    </div>
    )
}

export default Avatar2