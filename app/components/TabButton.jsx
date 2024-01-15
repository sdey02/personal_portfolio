import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
const buttonclasses = active ? 'text-white border-b border-purple-50' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
        <p className={'mr-3 font-semibold hover:test-white ${buttonClasses}'}>
            {children}
        </p>
    </button>
  )
}

export default TabButton