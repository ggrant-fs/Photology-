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
        <div id="form-page">
            <form onSubmit={handleSubmit }>
                <label id="first-name" htmlFor="firstName">First Name</label>
                <label id="last-name" htmlFor="LastName">Last Name</label>
                <div id="sec1">
                 <input 
                 className="input"
                 id="input1"
                 type="text" 
                 name="firstName" 
                 placeholder="First Name"
                 value={formData.firstName} 
                 onChange={(e)=>handleChange(e)}/>

                 <input 
                className="input"
                id="input2"
                 type="text" 
                 name="lastName" 
                 placeholder="Last Name"
                 value={formData.lastName} 
                 onChange={(e)=>handleChange(e)}/><br/>
                </div>
                 <div>
                 <label id="email" htmlFor="email">Email </label>
                 <label htmlFor="phoneNumber"> Phone</label>
                 </div>
                 <div id="sec2">
                 <input 
                 className="input"
                 id="input3"
                 type="text" 
                 name="email"
                 placeholder="Email"
                 value={formData.email}
                 onChange={(e)=>handleChange(e)} />

                 <input 
                 className="input"
                 id="input4" 
                 type="text" 
                 name="phoneNumber"  
                 value={formData.phoneNumber}
                 onChange={(e)=>handleChange(e)}
                 placeholder="Phone number"/>
                 </div>

                 <div id="sec3">
                 <textarea type="text" 
                 id="text-area"
                 name="message" 
                 placeholder="Send us a message"
                 value={formData.message} 
                 onChange={(e)=>handleChange(e)}></textarea>
                 </div>
               
                 <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Form;