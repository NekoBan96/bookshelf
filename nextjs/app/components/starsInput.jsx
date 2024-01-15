'use client'

import { useState } from "react";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export default function StarsInput (props) {
    const [hovered, sethovered] = useState(null)
    const [selected, setselected] = useState(null)


    const starClass = "inline text-th-accent-medium -z-10"

    const Input = () => (
        <div className=" flex justify-center w-full items-center">
            <div onMouseLeave={() => sethovered(null)} className="py-3 pe-5 flex justify-between items-center">
                <FaXmark className="inline text-th-accent-medium size-7" />
                    {[...Array(5)].map((e, i) => {
                        i = i*2+1
                        let star
                        if (hovered == i || selected == i && !hovered)
                            star = <FaStarHalfAlt  className={` absolute size-8 ${starClass}`}/>
                        else if (hovered == i+1 || hovered > i || (selected == i+1 || selected > i) && !hovered)
                            star = <FaStar className={` absolute size-8  ${starClass}`} />
                        else if (hovered < i || selected < i && !hovered)
                            star = <FaRegStar  className={` absolute size-7 ${starClass}`}/>
                        return <div className=" flex h-8 w-8 justify-center items-cente" key={i+1}>
                            <div className=" h-full w-1/2 " onMouseLeave={() => sethovered(null)} onMouseEnter={() => sethovered(i)} onClick={() => setselected(i)} />
                            <div className="  h-full w-1/2" onMouseLeave={() => sethovered(null)} onMouseEnter={() => sethovered(i+1)} onClick={() => setselected(i+1)}/>
                           {star}
                        </div>
                    })}
{/*                 
                {[...Array(5)].map((e, i) => {
                    if (hovered >= i+1 && hovered || selected >= i+1 && !hovered)
                        return ( 
                            <div className="inline" key={i+1} onMouseLeave={() => sethovered(null)} onMouseEnter={() => sethovered(i+1)} onClick={() => setselected(i+1)}>
                                <FaStar className={starClass} />
                            </div>
                        )
                    else
                        return (
                            <div className="inline" key={i+1} onMouseLeave={() => sethovered(null)} onMouseEnter={() => sethovered(i+1)}>
                                <FaRegStar className={starClass}/>
                            </div> 
                        )
                })} */}
            </div>
            <span className=" font-bold" >
            </span>
        </div>
    )

    const Display = () => (
        <div className="text-2xl flex justify-center sm:justify-start  items-center mt-2">
            9.36
            <FaStar className={starClass} />
        </div>
    )

    return (
        <Input />
    )
}