import React from "react"
import {useField} from "formik"

export const TextField = ({label,...props})=>{
    const [field,meta] = useField(props)
    return (
        <div  className="mb-2">
            <label style={{fontWeight:600,fontSize:"15px",display:"block",marginBottom:"15px"}} {...field} {...props} htmlFor={field.name}>{label}</label>
            
            <input style={{minHeight:"48px"}} className="form-control shadow-none" autoComplete="off" type="text"></input>
        </div>
    )
}