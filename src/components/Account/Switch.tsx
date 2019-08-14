import * as React from 'react'
import {FunctionComponent} from "react";
import {LoginPassword} from "./LoginPassword";

export interface SwitchProps{

password:string,
    login:string,
    handleAuthorisedClick:()=>boolean,
    handleLoginChange:()=>void,
    handlePasswordChange:()=>void
}

export const Switch:FunctionComponent<SwitchProps>=(props)=>{
   const {password,
       login,
       handleAuthorisedClick
       ,handlePasswordChange,
       handleLoginChange}=props
    const returnApp=
        <div>
        {
            props.children
        }
         </div>
    switch (handleAuthorisedClick()) {
        case true:
            returnApp
        case false:
            <LoginPassword handleLogin={handleLoginChange}
                           handlePassword={handlePasswordChange}
                           authorisedClick={handleAuthorisedClick}
            />
    }
    return(
        


    )
}