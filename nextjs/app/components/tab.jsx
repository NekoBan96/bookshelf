'use client'
import { Tab as UiTab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function TabGroup ({ className ,children }) {
  return (
    <div className={`w-full px-2 sm:px-0 ${className || ""}`}>
      <UiTab.Group>
        {children}
      </UiTab.Group>
    </div>
  )
}

function TabList ({ className ,children }) {
  return (
    <UiTab.List className={`flex space-x-1 w-full rounded-xl bg-th-bg-secondary p-1 font-semibold ${className || ""}`}>
      {children}
    </UiTab.List>
  )
} 

function Tab ({ className ,children }) {
  const tabClass = ({ selected }) =>
  classNames(
      `w-full rounded-lg py-2.5 text-sm leading-5 outline-none transition-color duration-200 ${className}`,
      selected
          ? 'bg-th-accent-medium text-white shadow'
          : 'hover:bg-th-accent-dark hover:text-white'
  )
  return (
    <UiTab className={tabClass}>
      {children}
    </UiTab>
  )
}

function TabPanels ({ className ,children }) {
  return (
    <UiTab.Panels className={`mt-2 ${className}`}>{children}</UiTab.Panels>
  )
}

function TabPanel ({ className ,children }) {
  return (
    <UiTab.Panel className={className}>{children}</UiTab.Panel>
  )
}

export { TabGroup, TabList , Tab, TabPanels, TabPanel }
