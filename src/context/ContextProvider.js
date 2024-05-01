import React from 'react'
import { createContext, useState } from 'react'



export const Context = createContext()
const ContextProvider = (props) => {
    const[text, setText] = useState("")
    // console.log(text)
    
  return (
    <div>
        <Context.Provider value={{text, setText}}>
           {props.children}
        </Context.Provider>

    </div>
  )
}

export default ContextProvider;