//import React from 'react'


export default function Background() {
  return (<>
    <div className='fixed top-0 left-0 z-[2] w-full  h-full bg-zinc-800'>

      <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-400 font-bold text-xl'>Documents</div>
      
      
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vh] leading-none tracking-tighter  font-bold 
      text-zinc-900'>Docs.</h1>
  
    </div>
    <div className='fixed top-0 left-0 z-[2] w-full  h-full bg-sky-800/30'>
    </div>
    </>
  )
}
