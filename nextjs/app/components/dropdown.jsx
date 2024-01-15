import { Menu } from '@headlessui/react'

import { RiArrowDropDownLine } from "react-icons/ri";

export default function Dropdown(props) {

    return (
        <Menu as="div" className={"relative text-left " + (props.className || "")}>
            <Menu.Button className="text-th-accent-medium font-bold flex items-center">
                {props.button}
                <RiArrowDropDownLine className='h-10 w-10' />
            </Menu.Button>
            <Menu.Items className="absolute border-4 border-th-bg-secondary w-46 flex flex-col bg-th-bg p-2 rounded-lg">
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                    >
                    Account settings
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                    >
                    Documentation
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                    <span className="opacity-75">Invite a friend (coming soon!)</span>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}