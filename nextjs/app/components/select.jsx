'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { RiArrowDropDownLine } from "react-icons/ri";

const people = [
  { id: 1, name: 'Читаю', unavailable: false },
  { id: 2, name: 'В планах', unavailable: false },
  { id: 3, name: 'Брошено', unavailable: false },
  { id: 4, name: 'Прочитано', unavailable: false },
  { id: 5, name: 'Любимое', unavailable: false },
]

export default function Select(props) {
  const [selected, setSelected] = useState(null)

  const optionClassName = "hover:cursor-pointer text-th-accent-medium hover:bg-th-accent-dark hover:text-white p-1 transition-colors duration-100"

  return (
    <div className={props.className}>
        <Listbox value={selected} onChange={setSelected}>
            <Listbox.Button className={`p-2 text-th-accent-medium text-center font-semibold border-2 border-th-accent-medium rounded-lg w-full h-full`}>
                {selected ? selected.name : "Добавить в список"}
                <RiArrowDropDownLine className='inline size-7' />
            </Listbox.Button>
            <Transition
                as={Fragment}
                enter="transition ease-in duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className=" font-semibold border-x-2 border-b-2 border-th-accent-medium rounded-b-lg text-center  ">
                    {people.map((person) => (
                        <Listbox.Option
                        className={optionClassName}
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                        >
                        {person.name}
                        </Listbox.Option>
                    ))}
                    <Listbox.Option
                        value={null}
                        className={optionClassName}
                    >
                        Убрать из списка
                    </Listbox.Option>
                </Listbox.Options>
            </Transition>
        </Listbox>
    </div>
  )
}