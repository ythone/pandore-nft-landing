import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import Avatar from './Avatar';
import Avatar2 from './Avatar2';
import AvatarMonkey from './AvatarMonkey';
import StackAvatar from './StackAvatar';
import { BsArrowUpRight } from "react-icons/bs";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:760px)');
  const displayleftsidehomemonkey = ()=>{
    if(isAboveMediumScreens == true){
      return (
        <div className='text-white w-48 grid grid-cols-1 gap-16'>
        <div>
          <div className=''>
            <h1 className='font-bold text-2xl'>10K+</h1>
            <p className='text-sm text-[#7f7e81]'>RARE NFTs</p>
          </div>

          <div className='mt-10 pl-8'>
            <h1 className='font-bold text-2xl'>70K+</h1>
            <p className='text-sm text-[#7f7e81]'>PRODUCTS</p>
          </div>

          <div className='mt-10 pl-16'>
            <h1 className='font-bold text-2xl'>05K+</h1>
            <p className='text-sm text-[#7f7e81]'>NFT ARTIST</p>
          </div>
        </div>
        <div className='text-sm text-[#7f7e81] text-end mt-20'>
          <p>Bored Ape Yacht Club, often colloquially called Bored Apes, Bored Ape or BAYC, is a non-fungible token collection built on the Ethereum blockchain</p>
        </div>
      </div>
      )
    }
    return (
      <div className='text-white w-48 md:flex items-center justify-center pt-8'>
      <div className='md:flex items-center justify-center'>
        <div className=''>
          <h1 className='font-bold text-2xl'>10K+</h1>
          <p className='text-sm text-[#7f7e81]'>RARE NFTs</p>
        </div>

        <div className='mt-10'>
          <h1 className='font-bold text-2xl'>70K+</h1>
          <p className='text-sm text-[#7f7e81]'>PRODUCTS</p>
        </div>

        <div className='mt-10'>
          <h1 className='font-bold text-2xl'>05K+</h1>
          <p className='text-sm text-[#7f7e81]'>NFT ARTIST</p>
        </div>
      </div>
      <div className='md:text-sm text-[#7f7e81] mt-10'>
        <p>Bored Ape Yacht Club, often colloquially called Bored Apes, Bored Ape or BAYC, is a non-fungible token collection built on the Ethereum blockchain</p>
      </div>
    </div>
    )
  }
  const text_display = () => {
    if (isAboveMediumScreens == true) {
      return (
        <div className='pb-2 text-center mt-10 '>
          <p className='text-[#3c3b40] mb-5 font-semibold'>the first NFT marketplace to allow content creators</p>
          <div className='flex items-center justify-center text-6xl font-bold'>
            <p className='text-white'>Discover</p>
            <p className='text-white text-6xl font-bold px-8'><Avatar /></p>
            <p className='text-white text-6xl font-bold'>Collect</p>
          </div>
          <div className='flex items-center justify-center mt-2 text-6xl font-bold'>
            <p className='text-white mt-4 pr-8'><Avatar2 /></p>
            <p className='text-white mt-4'> &  Sell  Extraodinary</p>
          </div>
          <p className='text-white mt-4 text-6xl font-bold'>Rare NFTs</p>
        </div>
      )
    } else {
      return (
        <div className='pb-2 text-center mt-10 '>
          <p className='text-[#3c3b40] mb-5 font-semibold'>the first NFT marketplace to allow content creators</p>
          <div className='flex items-center justify-center text-sm font-bold'>
            <p className='text-white pl-1'>Discover</p>
            <p className='text-white text-sm font-bold px-2'><Avatar /></p>
            <p className='text-white text-sm font-bold pr-1'>Collect</p>
          </div>
          <div className='flex items-center justify-center mt-2 text-sm font-bold'>
            <p className='text-white mt-4 pr-2'><Avatar2 /></p>
            <p className='text-white mt-4 text-sm'> &  Sell </p>
          </div>
          <p className='text-white mt-4 text-sm font-bold'>Rare NFTs</p>
        </div>
      )
    }
  }
  return (
    <section id="home" className="mx-auto min-h-full w-5/6 py-20">
      <div>
        {text_display()}
      </div>
      <div className={isAboveMediumScreens?'md:flex items-center justify-between mt-20':'md:flex items-center justify-between mt-10'}>
        <div className='text-[#7f7e81] w-48 grid grid-cols-1 gap-8'>
          <div>
            <p className={isAboveMediumScreens?'text-sm flex items-center justify-center pt-40':'md:text-sm md:flex items-center justify-center '}>Holding the NFT can give you access to an exclusive Discord server with some celebrity owners, as well as free perks like additional NFTs or tokens from the BAYC ApeCoin launch this week. Bored Ape owners can also show off their NFT as their profile picture on Twitter with a Twitter Blue subscription</p>
            <div className='w-24 h-24 bg-[#ee7b48] text-white rounded-full flex items-center justify-center mt-10 text-3xl'>
              <BsArrowUpRight />
            </div>
          </div>
          <div className='mt-5 md:text-sm text-white'>
            <p>Most intertaining Ape</p>
            <p className='pt-4'>Most mysterious Ape and sell</p>
            <p className='pt-4'>Most profitable Ape</p>
          </div>
        </div>
        <div className='mt-20'>
          <StackAvatar />
        </div>
        {displayleftsidehomemonkey()}
      </div>
    </section>
  )
}

export default Home