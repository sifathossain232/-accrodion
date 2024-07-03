"use client"
import { useState } from "react";
import { accrodionData } from "./AccrodionData";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const Accrodion = () => {

    const [open, setOpen] = useState(null)
    // console.log(open)

    const handleClick = (idx) => {
        console.log(idx,"hellow")
    
        setOpen(open === idx ? null : idx)
    }
    
    return (
        <div className="w-[1100px] mx-auto">
            <h1 className="text-[48px] leading-[72px] font-semibold text-[#7156F5]">Frequently Asked Question</h1>
            {
                accrodionData.map((item, idx) => <div key={idx}
                    className="border-b border-[#BCD0FF] py-5"
                >
                    <h2>
                        <button onClick={() => handleClick(idx)} type="button" className="flex w-full items-center justify-between">
                            <span className="text-xl font-medium leading-[26px] text-heading">{item.title}</span>
                            <span className="bg-[#2D5BFF] w-[42px] h-[42px] flex justify-center items-center rounded-full">
                                <GoArrowDown size={24} className={`text-white ${open ===idx ? "rotate-180 duration-300" : "rotate-0  duration-300"}`}/> 
                            </span>
                        </button>
                    </h2>
                    <div>
                        <div className={`overflow-hidden ${open === idx ? "max-h-20" : "max-h-0"}`}>
                            <p className="text-lg text-[#6B707B]  leading-[34px]">{item.disc}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Accrodion;