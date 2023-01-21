import React, { useEffect, useState } from 'react'
import Appbar from './Appbar/Appbar'
import { SelectedPage } from './shared/enum_types';
import Home from './Home/Home';
import LiveAuction from './LiveAuction/LiveAuction';
import PopularCollection from './PopularCollection/PopularCollection';
import TopCollection from './TopCollection/TopCollection';
import Suscribe from './Suscribe/Suscribe';
import Sponsors from './Sponsors/Sponsors';
import Footer from './Footer/Footer';

const HomePage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='bg-black'>
            <Appbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home />
            <LiveAuction />
            <PopularCollection />
            <TopCollection/>
            <Suscribe/>
            <Sponsors/>
            <Footer/>
        </div>
    )
}

export default HomePage