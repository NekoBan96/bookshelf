'use client'

import { Transition } from '@headlessui/react'

export default function Menu(props) {

    function menuStyle () {
        if (props.position == 'top' || props.position == 'bottom')
            return {
                width: "100%",
                height: (props.size || (20)) + "rem"
            }
        else
            return {
                width: (props.size || (20)) + "rem",
                height: "100%"
            }
    }
    function flexDirection () {
        switch (props.position) {
            case 'left':    return 'flex-row'
            case 'right':   return 'flex-row-reverse'
            case 'top':     return 'flex-col'
            case 'bottom':  return 'flex-col-reverse'
            default:        return 'flex-row-reverse'
        }
    }

    return (
        <Transition
            as="div"
            className={`absolute h-screen w-screen flex ${flexDirection()}`}
            show={props.show}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 transition-opacity ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
                <div
                    className=" bg-th-bg-secondary"
                    style={menuStyle()}
                >
                    {props.children}
                </div>
                <div className=" flex-grow bg-black opacity-25" onClick={() => props.setShow(false)} />
            </Transition>
    )
}