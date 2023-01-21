import React from 'react'

const Suscribe = () => {
    return (
        <section id="home" className="mx-auto min-h-full w-5/6 py-20">
            <h1 className='text-center md:text-5xl  text-white font-bold'>Subscribe To Get Latest Update</h1>
            <p className='text-[#3c3b40] mb-5 font-semibold text-center py-2'>Financial transactions remotly using a mobile</p>
            <form className='md:flex items-center justify-center' action="">
                <div className='m-4 md:w-96'>
                <input type="text" id="first_name" className="w-full bg-black border border-[#ee7b48] text-white text-sm rounded-lg focus:ring-[#ee7b48] focus:border-[#ee7b48] p-2.5 dark:bg-black dark:border-[#ee7b48] dark:placeholder-[#ee7b48] dark:text-white dark:focus:ring-[#ee7b48] dark:focus:border-[#ee7b48]" placeholder="Enter your email" required/>
                </div>
                <button className="md:w-32 bg-[#ee7b48] hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded">
                    Subscribe
                </button>
            </form>
        </section>
    )
}

export default Suscribe