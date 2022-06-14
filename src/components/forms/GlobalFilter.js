import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
/* import { AiOutlineSearch } from 'react-icons/ai' */

export function GlobalFilter ({

  globalFilter,
  setGlobalFilter
}) {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 300)

  return (

    <div className='relative text-gray-600 py-2'>
      <input
        type='search' name='serch'
        className='bg-white h-10 w-42 px-5 rounded-2xl text-sm focus:outline-none'
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder='Buscar...'
      />
    </div>

  )
}
