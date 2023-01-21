import React from 'react'
import Collection from './Collection'

const TopCollection = () => {

    const ConntentCollection = [
        {
            id:1,
            img_url:"https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556781.jpg",
            name:"BoredApeYacht",
            price:"$2.100.447"
        },
        {
            id:2,
            img_url:"https://img.freepik.com/premium-photo/3d-rendering-zoom-call-avatar_23-2149556774.jpg",
            name:"X Rabbits Club",
            price:"$5.390.078"
        },
        {
            id:3,
            img_url:"https://img.freepik.com/premium-photo/3d-rendering-zoom-call-avatar_23-2149556775.jpg",
            name:"Azuki",
            price:"$3.716.716"
        },
        {
            id:4,
            img_url:"https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556780.jpg",
            name:"PhantaBear",
            price:"$2.328.288"
        },
        {
            id:5,
            img_url:"https://img.freepik.com/premium-vector/yin-yang-balance-vector-icon-template_22692-373.jpg",
            name:"Lil Heroes",
            price:"$6.655.916"
        },
        {
            id:6,
            img_url:"https://img.freepik.com/premium-photo/3d-rendering-zoom-call-avatar_23-2149556773.jpg",
            name:"IreneDAO",
            price:"$4.235.294"
        },
        {
            id:7,
            img_url:"https://img.freepik.com/premium-vector/english-bulldog-design_24908-7844.jpg",
            name:"CloneX",
            price:"$3.398.198"
        },
        {
            id:8,
            img_url:"https://img.freepik.com/free-photo/3d-render-astronaut-calling-gesture-with-old-telephone-3d-illustration-design_460848-11765.jpg?w=740&t=st=1673793040~exp=1673793640~hmac=bd7a172c213afa20a1fefe5174ed85f6a3d800e4a8f5b1d4cda66bf8a9158550",
            name:"The Rebels",
            price:"$2.204.426"
        },
        {
            id:9,
            img_url:"https://cdn.dribbble.com/users/916023/screenshots/17237828/media/5fd908b5dcb52f6b2180f6061cc7600b.png?compress=1&resize=768x576&vertical=top",
            name:"FOMO MOPOS",
            price:"$5.863.244"
        },
        {
            id:10,
            img_url:"https://cdn.dribbble.com/userupload/3160729/file/original-d2b4d1e4a933c1eda30a9c6d9a20935a.png?compress=1&resize=1024x768",
            name:"Mutant Ape Yacht",
            price:"$4.218.109"
        },
        {
            id:11,
            img_url:"https://cdn.dribbble.com/users/1786866/screenshots/13992097/media/c461eeae4d4b523c9d3bab7c66264916.png?compress=1&resize=400x300",
            name:"The Sandbox",
            price:"$1.055.688"
        },
        {
            id:12,
            img_url:"https://i.pinimg.com/564x/fb/02/ea/fb02ea97a9400ac878251aed9d7381f4.jpg",
            name:"CryptoSkulls",
            price:"$7.026.319"
        }
    ]

    const collections = ConntentCollection.map((content) =>
    <Collection img_url={content.img_url} id={content.id} name={content.name} price={content.price} />
);


    return (
        <section id="home" className="mx-auto min-h-full w-5/6 py-20">
            <h1 className='md:text-5xl text-center text-white font-bold'>Our Top Collections</h1>
            <div className='md:grid grid-cols-4 gap-4 mt-10'>
                {collections}
            </div>
        </section>
    )
}

export default TopCollection