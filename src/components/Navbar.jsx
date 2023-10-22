import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-600 h-12 px-8 py3'>
<Link href={'/'} className='text-white font-bold'>TO do List</Link>
<Link href={'/addTopic'} className='bg-white p-2 hover:bg-gray-400 hover:text-slate-100'> Add Topic</Link>
    </div>
  )
}

export default Navbar