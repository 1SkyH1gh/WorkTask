import * as React from 'react'
import {FunctionComponent} from "react";

export interface MiniatureUserProps {

}

export const MiniatureUser:FunctionComponent<MiniatureUserProps>=()=>{
    return(
        <React.Fragment>
        <div className="currentStatus">Ac</div>
        <div className="professionPool">
        <div className="name"> Константинов А.М</div>
    <div className="profession">web-designer</div>
        </div>
        </React.Fragment>
    )
}