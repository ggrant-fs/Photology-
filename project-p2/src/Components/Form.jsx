import React from 'react';
import {useState} from 'react'

const Form = (props) => {
    const [formData, setFormData]= useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        message:""
    })

    const handleChange =(e)=>{
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]:value

        })
    }

    const handleSubmit =()=>{
      props.formPostRequest(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit }>
                 <label htmlFor="firstName">First Name</label>
                 <input 
                 type="text" 
                 name="firstName" 
                 value={formData.firstName} 
                 onChange={(e)=>handleChange(e)}/>

                 <label htmlFor="LastName">Last Name</label>
                 <input 
                 type="text" 
                 name="lastName" 
                 value={formData.lastName} 
                 onChange={(e)=>handleChange(e)}/><br/>

                 <label htmlFor="email">Email</label>
                 <input 
                 type="text" 
                 name="email"
                 value={formData.email}
                 onChange={(e)=>handleChange(e)} />

                 <label htmlFor="phoneNumber">Phone Number</label>
                 <input 
                 type="text" 
                 name="phoneNumber"  
                 value={formData.phoneNumber}
                 onChange={(e)=>handleChange(e)}
                 placeholder="555-555-5555"/>
                 <textarea type="text" name="message" value={formData.message} onChange={(e)=>handleChange(e)}></textarea>
               
                 <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Form;