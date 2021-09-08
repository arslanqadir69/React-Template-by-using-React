import React from 'react'
import lgo from "../images/logo.png";
import content from '../images/content.jpg'
import {Link} from'react-router-dom'
// import Gallery from './Gallery';
function FrontEnd() {
    return (
        <>
        <div className=" w-80 h-auto  mx-auto max-w-md ">
       <img src={lgo}  alt="something wrong" className="pl-5    h-16  w-40       "/>
       <img src={content}  alt="something wrong" className=" mt-5 w-96 
     mx-auto rounded-md shadow-xl  "/>
     <div className="mt-4">
       <h1 className=" font-bold leading-tight text-xl ">Your Life is very short
        Thats why <span className="text-indigo-500">you have to enjoy it!</span> 
        </h1>
        <p className="text-sm text-gray-600 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum is simply dummy text of the printing and typesetting indus. 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
 
        <Link to="/Gallery" className=" bg-purple-500 rounded-md px-3 py-1
        text-red-50 mt-2 tracking-wider uppercase text-sm">
       Book Your Place
        </Link>
 
     </div>
     </div>
     </>
    )
}

export default FrontEnd
