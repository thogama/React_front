import React, { useState } from "react"
import { useField, ErrorMessage } from "formik"
import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai"

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    meta.value = props.name



    return (
        <div className="mb-2">
            <div style={{ display: "block" }}>

            </div>
            <label style={{ fontWeight: 600, fontSize: "15px", display: "block", marginBottom: "15px" }} htmlFor={field.name}>
                {label}
            </label>
            <div className="myField" style={{ display: "flex", alignItems: "center" }}>
                <input {...field} {...props} style={{ fontSize: "20px", minHeight: "48px" }}
                    className={`form-control shadow-none ${meta.touched && meta.error && 'error ' || meta.touched && !meta.error && `success`}`}
                    autoComplete="off" type={props.type}>



                </input>
                {meta.error && meta.touched && (
                    <AiOutlineExclamationCircle color="red" size={20} style={{ position: "absolute", right: "15%" }} />
                )}
                {!meta.error && meta.touched && (
                    <AiOutlineCheckCircle color="green" className="success" size={20} style={{border:"none" ,position: "absolute", right: "15%" }} />
                )}


            </div>






            <div style={{display:"flex",color:"red",justifyContent:"center",marginTop:"5px"}}>
            <ErrorMessage name={field.name} />
            </div>

        </div>
    )
}

