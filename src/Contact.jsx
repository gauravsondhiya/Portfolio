import React from 'react'

const Contact = () => {
  return (
    <div className="w-[90%] grid content-center  border-amber-400 m-auto mt-24 p-2">
        <h1 className="text-4xl  underline -underline-offset-auto text-center">Contact Me</h1>
        <p className='text-2xl text-center mt-4 font-semibold '>Please Fill Out The Form Below Any Work Opportunites</p>
        <form action="" className='flex flex-col 
        [&>input]:border [&>input]:border-blue-500 gap-4 text-2xl [&>input]:m-auto sm:[&>input]:w-[50%]
        [&>input]:w-[100%] mt-3 [&>input]:indent-5 [&>input]:rounded-br-2xl'>
          <input   type="text" placeholder='Your Name'/>
          <input  type="email" placeholder='Your Email'/>
          <input className='pb-15' type="text" placeholder='Your Message'/>
         <button className="hover:shadow-xl shadow-blue-500/50 border border-blue-500 sm:w-[15%] w-[50%]  m-auto rounded-b-3xl">Submit</button>
        </form>
    </div>
  )
}

export default Contact
