'use client'

import { useState } from 'react';

import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function TextField (props) {
    const [value, setValue] = useState("")
    const fs = props.fs || 1;

    const btnStyle = {
        width: fs+1+"rem",
        height: fs+1+"rem"
    }

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleClick(e) {
        setValue("")
        
    }

    const btnClasses = "bg-th-bg p-2 rounded-e flex justify-center items-center"
    const iconClasses = "text-th-accent-medium"
    function button () {
        switch (props.button) {
            case "search":
                return (
                    <button type='submit' 
                    className={btnClasses}
                    style={btnStyle}
                    >
                        <FaSearch className={iconClasses} />
                    </button>
                )       
            case "clear":
                return (
                    <button type='button'
                    className={btnClasses}
                    style={btnStyle}
                    onClick={handleClick}
                    >
                        <FaXmark className={iconClasses} />
                    </button>
                    )
            default:
                return (null)

                
        }
    }

    return (
        <div className={`flex items-center justify-center ${props.className || ""}`}
        style={{
            width: props.width ? props.width+"rem" : "auto",
        }}
        >
            <input 
                className={`bg-th-bg text-th-accent-medium w-full p-1 focus:outline-0 ${props.button ? "rounded-s" : "rounded"}`}
                style={{
                    fontSize: fs+"rem",
                    lineHeight: fs+0.5+"rem",
                }}
                value={value}
                ref={props.inputRef}
                onChange={handleChange}
                name={props.name || ""}
                type={props.type || "text"}
                autoComplete={props.autocomplete || "off"}
                placeholder={props.placeholder || ""}
                />
            {button()}
        </div>
    )
}