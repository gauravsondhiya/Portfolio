import React from 'react'

const header = () => {
  return (
    <>
         <ul className='flex justify-center w-[50%] m-auto mt-8 p-3 rounded-b-4xl border border-amber-400 gap-10 text-xl text-white [&>li]:hover:text-amber-300 font-bold' >
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li >Contact</li>
         </ul>
    </>
  )
}

export default header
