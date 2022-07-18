import React, { useState } from "react"
import { useField, ErrorMessage} from "formik"
import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai"
export const TextField = ({  ...props }) => {
    const [field, meta] = useField(props)
    meta.value = props.name

    
   
    return (
        <div  style={{width:"100%",marginBottom:"20px"}} errorsOn={props.errorsOn}  className="form-group">
            
            
            <div  className="mb-1 myField" style={{display:"flex",
            alignItems:"center",backgroundColor:"#e8f0fe"}}>
             
             {props.icon}

                <input    {...field} {...props} style={{ fontSize: "14px", height: "2rem",
                
                paddingLeft:"20px",
                 }}
                    className={`form-control row  ${meta.touched && meta.error && "error" || meta.touched && !meta.error && "success" }`}
                    autoComplete="off" type={props.type}>
                         


                </input>
                
                
                
                

            </div>






            <div hidden={props.errorsOn} style={{color:"red",fontSize:"14px"}}>
            <ErrorMessage  name={field.name} />
            </div>

        </div>
    )
}

