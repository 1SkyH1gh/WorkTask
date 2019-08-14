import * as React from 'react'
import {FunctionComponent, useState} from "react";


export interface LoginPasswordProps{
handleLogin:(e:any)=>void,
    handlePassword:(e:any)=>void,
    authorisedClick:()=>void
}

export const LoginPassword:FunctionComponent<LoginPasswordProps>=(props)=>{


    return(
        <div>
            <form>
                <div>
                    login:
                </div>
                <input placeholder="login" onChange={props.handleLogin}/>
                <div>password:</div>
                <input placeholder="password" onChange={props.handlePassword}/>
            </form>
            <div onClick={props.authorisedClick}>Authorised</div>

        </div>
    )
}