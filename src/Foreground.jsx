//import React from 'react'

import { useRef } from "react";
import Card from "./Card";


export default function Foreground() {
  const ref=useRef(null);
 const data= [
  {desc:"n your case, instead of passing a class prop to the OverlayView component, you should ideally pass a prop that ", extradata:"this is a note ",filesize:"5mb", isOpen:true,
  tag:{close:true, text:"Download",color:"zinc"},//{isOpen:true,tagTitle:"Download Now ", tagColor:"green",}
 }, {desc:"In your OverlayView component, you would then create a classes object using the className helper:", extradata:"this is a note ",filesize:"5mb", isOpen:true,
 tag:{close:true, text:"Download",color:"blue"},//{isOpen:true,tagTitle:"Download Now ", tagColor:"green",}
}, {desc:" sdasmd dakmdlk w ;l maw;md;awmdmk", extradata:"this is a note ",filesize:"5mb", isOpen:true,
tag:{close:true, text:"Download",color:"zinc"},//{isOpen:true,tagTitle:"Download Now ", tagColor:"green",}
}, {desc:" sdasmd dakmdlk w ;l maw;md;awmdmk", extradata:"this is a note ",filesize:"5mb", isOpen:true,
tag:{close:true, text:"Download",color:"zinc"},//{isOpen:true,tagTitle:"Download Now ", tagColor:"green",}
}
 ];

//  let newData={desc:" sdasmd dakmdlk w ;l maw;md;awmdmk", extradata:"this is a note ",filesize:"4mb", close:true,
//  tag:"sdadas",//{isOpen:true,tagTitle:"Download Now ", tagColor:"green",}
// }
  return <>
   <div  ref={ref} className="fixed top-[5%] py-20 px-20 w-full h-full flex gap-5 flex-wrap z-[3]">
   {data.map((item,index) => (<Card {...item } key={index} reference={ref} />
))}

   </div>
  </>
}
