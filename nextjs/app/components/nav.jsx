'use client'

import { useState } from 'react';
import { useRef } from 'react';
import useFocus from '../hooks/useFocus';

import TextField from './textField'
import ThemeSwitch from './themeSwitch';
import Link from './link';
import Dropdown from './dropdown';
import Button from './button';
import Menu from './menu';

import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Nav (props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const [searchInpt, setSearchInptFocus] = useFocus()

    const Logo = () => (
        <Link href="/" className=" no-underline text-3xl">
            Boomanga
        </Link>
    )
    const Catalog = () => (
        <Dropdown 
            button="Каталог"
            className="mx-3 text-xl"
        />
    )
    const Search = () => (
        <form className='flex place-items-center h-full mx-auto' action="#" method="get">
            <TextField
                inputRef={searchInpt}
                button="search"
                name="search"
                placeholder="Название"
                fs={1.5}
            />
        </form>
    )
    const Enter = () => (
        <Link className="no-underline text-xl text-center me-3">
            Вход
        </Link>
    )
    const Bars = () => (
        <Button className=" bg-th-bg" variant="hover-outline" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className='size-7' />
        </Button>
    )




    return (
        <nav className='h-20 bg-th-bg-secondary fixed top-0 w-screen'>

            <Menu
                show={menuOpen}
                setShow={setMenuOpen}
            >
                <div className="grid grid-col-1 p-4 gap-4">
                    <div className="flex justify-between items-center">
                        <Enter />
                        <div>
                            <ThemeSwitch
                            />
                            <Bars />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <Catalog />
                    </div>
                </div>                
            </Menu>    
            <Menu
                show={searchOpen}
                setShow={setSearchOpen}
                position="top"
                size="5"
            >
                <div className="flex place-items-center h-full">
                    <Search />
                </div>
            </Menu>

            

            

            <div className="lg:hidden p-4 flex items-center justify-between">
                <Logo />
                <div>
                    <Button className="mx-3 bg-th-bg" variant="hover-outline"  onClick={() => setSearchOpen(!searchOpen)}>
                        <FaSearch className='size-7' />
                    </Button>
                    <Bars />
                </div>
            </div>
            <div className="lg:container mx-auto h-full hidden lg:grid grid-cols-3 gap-4">
                <div className="flex place-items-center h-full">
                    <Logo />
                    <Catalog />
                </div>
                <Search />
                <div className="flex items-center justify-end h-full">
                    <Enter />
                    <ThemeSwitch />
                </div>
            </div>

          </nav>
    )
}