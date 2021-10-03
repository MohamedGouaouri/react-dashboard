import { Visibility } from "@material-ui/icons"
import React from "react"

export default function Member({name, role}){
    return <div className="member">
        <img src="https://thispersondoesnotexist.com/image" alt="" height="40" width="40"/>
        <div className="member-desc">
            <h3>{name}</h3>
            <span>{role}</span>
        </div>
        <button >
            <Visibility className="btn-icon"/>
            Display
        </button>
    </div>
}