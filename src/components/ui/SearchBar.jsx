import React from 'react'
import Label from './Label'
import Input from './Input'

const SearchBar = ({id,placeholder,className,children}) => {
  return (
    <Label htmlFor={id} >
        <div className={`flex items-center py-2  border-[1px] border-gray-500 rounded-md bg-[#fff] shadow-lg ${className}`}>
            <div  className='px-3'>
                {/* Search icon  */}
                { children }
            </div>
            <Input type={"search"} name={id} id={id} placeholder={placeholder} className='outline-0 w-full'/>
        </div>
    </Label>
  )
}

export default SearchBar