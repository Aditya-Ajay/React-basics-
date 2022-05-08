import React from "react";
import ReactDOM from "react-dom"

import {Data} from "./Books"
import Books from "./Book"


const BookList = ()=>{
  return Data.map((e)=>{
    // console.log(e)
 return <Books key = {Data.id} {...e}/>
  })
}






ReactDOM.render(<BookList/>,document.getElementById("root"))
