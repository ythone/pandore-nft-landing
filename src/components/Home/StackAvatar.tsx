import React from 'react'
import AvatarMonkey from './AvatarMonkey'
import useMediaQuery from '../hooks/useMediaQuery';

const StackAvatar = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width:760px)');
    const StackmonkeysStar = ()=>{
      if(isAboveMediumScreens==true){
        return(
            <section className="md:flex items-center justify-center h-screen w-full">
            <div className="z-0 absolute transform -translate-x-48 -scale-x-100">
                <AvatarMonkey 
                    img_url="https://i.seadn.io/gae/CUQMblI6g6qIVJYMOm9zfPK2SwHTB0l11dBhprQJjP4y0pr7Ps7m08pFzTNpvPQsjJ3pXbr2QzVnrRajyQoWyyGQs9kAQ8DfzESgVA?auto=format&w=384" 
                    attribute="h-96 w-48 rounded-full bg-black opacity-40" />
            </div>
            <div className="z-0 absolute transform translate-x-48">
                <AvatarMonkey 
                img_url="https://i.seadn.io/gae/NobFfuilDVgOHn5kLNol5GUcV1ozpLMlpSmlGdVZFPLVpwH0W8wCzUf6wGdvO9eBckD_M2B_8CJ1BRjzUasGhThY8nPie7OF4Bnt?auto=format&w=384" 
                attribute="h-96 w-48 rounded-full bg-black opacity-40" />
            </div>
            <div className="z-40 absolute">
                <AvatarMonkey 
                img_url="https://pbs.twimg.com/media/FW2CmlYWQAMAnbv?format=jpg&name=small" 
                attribute="h-screen w-96 rounded-full" />
            </div>
        </section>
        )
      }
      return(
        <section className="flex items-center justify-center pt-8 pb-24">
        <div className="md:z-0 absolute transform -translate-x-12 -scale-x-100">
            <AvatarMonkey 
                img_url="https://i.seadn.io/gae/CUQMblI6g6qIVJYMOm9zfPK2SwHTB0l11dBhprQJjP4y0pr7Ps7m08pFzTNpvPQsjJ3pXbr2QzVnrRajyQoWyyGQs9kAQ8DfzESgVA?auto=format&w=384" 
                attribute="h-48 w-24 rounded-full bg-black opacity-40" />
        </div>
        <div className="md:z-0 absolute transform translate-x-12">
            <AvatarMonkey 
            img_url="https://i.seadn.io/gae/NobFfuilDVgOHn5kLNol5GUcV1ozpLMlpSmlGdVZFPLVpwH0W8wCzUf6wGdvO9eBckD_M2B_8CJ1BRjzUasGhThY8nPie7OF4Bnt?auto=format&w=384" 
            attribute="h-48 w-24 rounded-full bg-black opacity-40" />
        </div>
        <div className="md:z-40 absolute">
            <AvatarMonkey 
            img_url="https://pbs.twimg.com/media/FW2CmlYWQAMAnbv?format=jpg&name=small" 
            attribute="h-48 w-24 rounded-full" />
        </div>
    </section>
      )
    }
    return(
        StackmonkeysStar()
    )
}

export default StackAvatar