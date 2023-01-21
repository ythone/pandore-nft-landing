import React from 'react'

type Props = {
    page: number;
    selectedPage: number;
    buttonName: string;
    setSelectedPage: (value: number) => void;
};


const OutlineButton = ({ page, selectedPage, buttonName, setSelectedPage }: Props) => {
    const displaycoloredbutton = () => {
        if (selectedPage === page) {
            return (
                <button className="w-32 text-sm bg-[#ee7b48] hover:bg-[#ee7b48] text-white font-bold py-2 px-4 rounded-full">
                    {buttonName}
                </button>
            )
        }

        return (
            <button onClick={() => setSelectedPage(page)} className="w-32 bg-transparent hover:bg-[#ee7b48] text-sm text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
            {buttonName}
        </button>
        )
    }

    return (
        displaycoloredbutton()
    )
}

export default OutlineButton