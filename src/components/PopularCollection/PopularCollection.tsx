import React, { useState } from 'react'
import OutlineButton from './OutlineButton';
import PopularCardCollection from './PopularCardCollection';

const PopularCollection = () => {
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const ListName = [
        {
            id: 1,
            buttonName: "All"
        },
        {
            id: 2,
            buttonName: "Game"
        },
        {
            id: 3,
            buttonName: "3D Abstract"
        },
        {
            id: 4,
            buttonName: "Virtual World"
        },
        {
            id: 5,
            buttonName: "Music"
        },
        {
            id: 6,
            buttonName: "Character"
        }
    ]


    const buttonItems = ListName.map((buttoncontent) =>
        <li className='p-2' key={buttoncontent.id}>
            <OutlineButton page={buttoncontent.id} selectedPage={selectedPage} buttonName={buttoncontent.buttonName} setSelectedPage={setSelectedPage} />
        </li>
    );

    return (
        <section id="home" className="mx-auto min-h-full w-5/6 py-20">
            <h1 className='md:text-5xl text-center text-white font-bold'>Get Popular Collections Here</h1>
            <div className='mt-5'>
                <ul className='md:flex items-center justify-center'>
                    {buttonItems}
                </ul>
            </div>
            <div className='md:grid grid-cols-3 gap-4 mt-5'>
                <PopularCardCollection
                    main_img_url1="https://i.seadn.io/gae/WWPKOdnLstKwR2AYU5DBIP6o2d7nRKjjqx_QasVrBNhcj4SE5qYou6A2F37YUOeVPToW8DeC3J10uTfZJkpWhAq2ppsG-6xGskBttg?auto=format&w=384"
                    main_img_url2="https://i.seadn.io/gae/mVRta-YALcgDigqm5sReW5QBSuh0frS7VskE-wrJWQH3oJu5eJqfBoiJfRPWEvXjF6tRR9_93ukhTSzGgciTBEMTu2e4dXK5HOn_qA?auto=format&w=384"
                    main_img_url3="https://i.seadn.io/gae/a4JuUCsDS8fjVkX-YW3r_6aefkryQE-7J0ccaY8GUXoBKIpQEku1GZBsi1VyIpeQb-gtqqwvpuXdz818t9QGU_bO_dooCxm4Z8zwhQ?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/anF5jm-JTCSLqiBnGR9tkZqEwTytt4XV_OL53H6M5fPNOAZifNgyx_OJEajamomjhxLV8f3tdD-CFrElaklXz0J6DOgyFnx8R_E94g?auto=format&w=384" />

                <PopularCardCollection
                    main_img_url1="https://i.seadn.io/gae/qvOSEtp0CpMtucaLXfgdglLMBsyNPnrvF4oMafrXro-_76dyZKwW8Q-rKGXII829yp8osZ5yjjGxPt9d52RWcitL2IA4E3b8lAGQ4mE?auto=format&w=384"
                    main_img_url2="https://i.seadn.io/gae/b3EKk1U-wzRUFfVt0mmkUffYxJZk5hy0CFBE5MlFM1Nf-8kwpRXC36VcddlehyrclBM6VMANbC0tNiTRCAtKeh-JkU8U5Eif6HTC1A?auto=format&w=384"
                    main_img_url3="https://i.seadn.io/gae/2yHClarhfnEIinJDk75z0gfSww5w7bhamtJCXgM06mmNqPkTlU0OX5bBqSaAG9Uwr_qToREzarmJuD-MBnXOKMDAELaTinckBb7Mag?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/anF5jm-JTCSLqiBnGR9tkZqEwTytt4XV_OL53H6M5fPNOAZifNgyx_OJEajamomjhxLV8f3tdD-CFrElaklXz0J6DOgyFnx8R_E94g?auto=format&w=384" />

                <PopularCardCollection
                    main_img_url1="https://i.seadn.io/gae/AMnfNxev-AsFW5sV1v4_s5E3tXBy0l1pJTA3gQkcpgYX8K0dLoL5hNBLYth1yYwJcHtqsFeCoMqPv-ywkl2LrqEfK-EuwH6SimTIPg?auto=format&w=384"
                    main_img_url2="https://i.seadn.io/gae/OaSjlaAbEGTZYTDR5Q0pY5Xuzdj2lzaRmFdfTTIs4av9Rd5TAHU1f4ESnvvZTQXjl-BrCgC-1mGnD5oP9gS7-PWiBsAl_wMWIgTC_g?auto=format&w=384"
                    main_img_url3="https://i.seadn.io/gae/OZ5w9wC4hBajrOZfkiuWMWQlAxiAa5hXgwP_x5yG2urGo3YiyZJthCkdIlTNnGNr-F2YRs7EjKVBRMrJKOMEb9P1kLWxqtIMlytV?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/anF5jm-JTCSLqiBnGR9tkZqEwTytt4XV_OL53H6M5fPNOAZifNgyx_OJEajamomjhxLV8f3tdD-CFrElaklXz0J6DOgyFnx8R_E94g?auto=format&w=384" />

                <PopularCardCollection
                    main_img_url1="https://i.seadn.io/gae/rHu6cWEXqAgM2fDZ82UZA1Fgq-EqAgmSW2ZbrLqRA6ZdjcWQUBioIijFmwHK5XFDGh4D5MrOjCzIHziYH2uyzfL7iVgo3YCEmy5D?auto=format&w=384"
                    main_img_url2="https://i.seadn.io/gae/MLmxb-PedcYm_8G76ghT-OyoGuI55COioPgCb8EZo6jvmXuw7nP7jb2d8aUDDqPTZvaS_Tlc7o9D4cVGcpdknLKacn-B1we2VLOxFQ?auto=format&w=384"
                    main_img_url3="https://i.seadn.io/gae/EYGeB2yfYsfkJUj7jpQMfB_iHYxtm_6d-vYaE0RgdP80K9pp6YPTxSR5vVeniIjYVyG6bSBKlB9VrRM8XV58JjXE0LLUpbaEXatt?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/anF5jm-JTCSLqiBnGR9tkZqEwTytt4XV_OL53H6M5fPNOAZifNgyx_OJEajamomjhxLV8f3tdD-CFrElaklXz0J6DOgyFnx8R_E94g?auto=format&w=384" />

                <PopularCardCollection
                    main_img_url1="https://i.seadn.io/gae/D3IfRZNl6oXgNUl5rbfU6gB2uMGEg1JAtVtLfrWyikXdLI43zC8up1Tc-cCjdWAAGCebAZiFSQKzQ3uHZL6OTMC8zGBLRMdcq43Oqw?auto=format&w=384"
                    main_img_url2="https://i.seadn.io/gae/YrUuAnHnxUX4qF-2po3clpNo4qwFaiSyeeWNbvuVPZznjgGusH0z4ODNad8jIuT_um1PvvxAJzkZTbRGsxFZMjSKM7M9RdiGcTUr4Q?auto=format&w=384"
                    main_img_url3="https://i.seadn.io/gae/ae_nhH4VRXq6oRrh-fsYu74yGIg4Hubml112FveP-4ZkMxs6f33suHUA-iipAHHUSNefhn9v1IZx2ghKbRz_g-XnscshHOZvXZVUIA?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/anF5jm-JTCSLqiBnGR9tkZqEwTytt4XV_OL53H6M5fPNOAZifNgyx_OJEajamomjhxLV8f3tdD-CFrElaklXz0J6DOgyFnx8R_E94g?auto=format&w=384" />

                <PopularCardCollection
                    main_img_url1="https://i.seadn.io/gae/ab_fac58W5nr1WN2alv-7_bTyTvPwdVtFqlNAbJJnQnWrkAw7PfRvyCOGG2526j6bdrsaQFvKiKjaxFpM3vN8ngm_GPO3KD4corviA?auto=format&w=384"
                    main_img_url2="https://i.seadn.io/gae/rHu6cWEXqAgM2fDZ82UZA1Fgq-EqAgmSW2ZbrLqRA6ZdjcWQUBioIijFmwHK5XFDGh4D5MrOjCzIHziYH2uyzfL7iVgo3YCEmy5D?auto=format&w=384"
                    main_img_url3="https://i.seadn.io/gae/JEtNFgv37FnZnDtTucqxRT3R1GnFFYs36P-zEvmpmoSJc9tDwa4R1I6OcP5Ha4Dw5DYIKHl0EcvkbLv8fSQ-8FSUJ6uhOce65Zbg?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/anF5jm-JTCSLqiBnGR9tkZqEwTytt4XV_OL53H6M5fPNOAZifNgyx_OJEajamomjhxLV8f3tdD-CFrElaklXz0J6DOgyFnx8R_E94g?auto=format&w=384" />

            </div>
        </section>
    )
}

export default PopularCollection