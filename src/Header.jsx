import React from 'react'

const header = () => {
  return (
    <>
         <ul className='flex justify-center w-[50%] m-auto mt-8 p-3 rounded-b-4xl 
         border-2 border-blue-500 gap-10 text-xl  
          font-bold [&>li]:hover:underline-offset-1   [&>li]:hover:underline 
         ' >
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
