import React from 'react';

const Form = () => {
    return (
        <div>
            <form >
                 <label htmlfor="firstName">First Name</label>
                 <input type="text" name="firstName" value=""/>
                 <label htmlfor="LastName">Last Name</label>
                 <input type="text" name="LastName" value=""/><br/>
                 <label htmlfor="email">Email</label>
                 <input type="text" name="email" value=""/>
                 <label htmlfor="phone">Phone Number</label>
                 <input type="text" name="phone" value="" placeholder="555-555-5555"/><br/>
                 <textarea type="text" name="text" value="">Enter your message here</textarea><br/>
                 <input type="submit"/>
            </form>
        </div>
    );
};

export default Form;