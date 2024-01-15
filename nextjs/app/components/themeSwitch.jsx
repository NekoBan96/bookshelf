'use client'
import { FaMoon } from "react-icons/fa";
import Button from "./button"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';



const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];


export default function ThemeSwitch (props) {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    function handleClick (e) {
        setTheme(darkMode ? "light" : "pink")
        setDarkMode(!darkMode)
    }

    return (
        <Button circle={true} onClick={handleClick} className="bg-th-bg mx-2" >
            <FaMoon className="size-7" />
        </Button>
    )
}