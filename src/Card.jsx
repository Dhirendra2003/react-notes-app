//import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import {motion } from "framer-motion"

 function Card(data, reference) {
  // const data=     {desc:" sdasmddakmdlkw ;lmaw;md ;awm dmk", filesize:"4mb", close:true,
  //   tag:{isOpen:true,tagTitle:"Download Now ", tagColor:"green",}}
     
  return  <motion.div drag dragConstraints={reference}>
      <div className="z-[4]  zind relative p-5 w-60 h-72 bg-yellow-100/90 rounded-[50px] overflow-hidden text-zinc-500/70">
        <FaRegFileAlt className="right-0 m-2 " />
        <p className="mt-5 font-semibold text-zinc-800 tracking-wide">{data.desc}</p>
        {data.extradata}<br/>
        
        <div className="relative float-right flex items-center justify-between mx-[10px] my-2">{data.tag.close ?<MdOutlineFileDownload className="mx-1 px-1 text-xl bg-zinc-800 text-white rounded-[30px]"/>:
        <IoIosClose  className="mx-1 px-1 text-xl bg-zinc-800 text-white rounded-[30px]" />
        }
          
          <h5>{data.filesize}</h5>

        </div>
        {data.isOpen?
        <div className={`footer absolute bottom-0 ${data.tag.color==="blue"?"bg-blue-500":"bg-yellow-500"} h-10 w-full left-0 hover:bg-violet-800 hover:text-white cursor-pointer transition ease-in-out duration-500 font-semibold text-zinc-800 `}><div className="relative center flex items-center flex justify-center mx-[30px] my-2   ">
          {data.tag.text}
          </div>
        </div>:<></>
 }
      </div>
    </motion.div>
  
  
}

export default Card;